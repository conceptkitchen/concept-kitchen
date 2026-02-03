import express from 'express';
import cors from 'cors';
import pg from 'pg';
import { Resend } from 'resend';
import path from 'path';
import { fileURLToPath } from 'url';
import 'dotenv/config';

import { welcomeSequence, getEmailForStep, renderEmail } from './emails/welcome-sequence.js';
import { createTrendRoutes } from './trends/routes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const { Pool } = pg;

// Database
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

// Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files (frontend)
app.use(express.static(path.join(__dirname, 'public')));

// Trends API routes
app.use('/api/trends', createTrendRoutes(pool));

// Trends dashboard route
app.get('/trends', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'trends.html'));
});

// Subscribe endpoint
app.post('/api/subscribe', async (req, res) => {
  const { email, name, source = 'website' } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Valid email required' });
  }

  try {
    // Insert or update subscriber
    const result = await pool.query(`
      INSERT INTO subscribers (email, name, source, sequence_step, sequence_started_at)
      VALUES ($1, $2, $3, 1, NOW())
      ON CONFLICT (email) 
      DO UPDATE SET 
        name = COALESCE(EXCLUDED.name, subscribers.name),
        updated_at = NOW()
      RETURNING id, email, sequence_step
    `, [email.toLowerCase().trim(), name?.trim() || null, source]);

    const subscriber = result.rows[0];

    // Send welcome email (step 1) immediately
    const email1 = getEmailForStep(1);
    const rendered = renderEmail(email1, {
      download_url: 'https://conceptkitchen.github.io/concept-kitchen/ask.html' // Update with actual PDF link
    });

    const sent = await resend.emails.send({
      from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`,
      to: subscriber.email,
      subject: rendered.subject,
      html: rendered.html
    });

    // Log the email
    await pool.query(`
      INSERT INTO email_logs (subscriber_id, email_type, subject, resend_id)
      VALUES ($1, $2, $3, $4)
    `, [subscriber.id, 'welcome-1', rendered.subject, sent.data?.id]);

    console.log(`✅ Subscribed: ${subscriber.email}`);

    res.json({ 
      success: true, 
      message: 'Check your inbox!' 
    });

  } catch (error) {
    console.error('Subscribe error:', error);
    res.status(500).json({ error: 'Something went wrong. Try again?' });
  }
});

// Process sequence (call this via cron)
app.post('/api/process-sequence', async (req, res) => {
  // Simple auth for cron
  const authHeader = req.headers.authorization;
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    let processed = 0;
    let errors = 0;

    // Get subscribers who need next email
    for (const emailConfig of welcomeSequence.slice(1)) { // Skip step 1 (already sent)
      const daysAgo = emailConfig.delayDays;
      
      const subscribers = await pool.query(`
        SELECT id, email, name, sequence_step
        FROM subscribers
        WHERE sequence_step = $1
          AND sequence_started_at <= NOW() - INTERVAL '${daysAgo} days'
          AND unsubscribed_at IS NULL
        LIMIT 50
      `, [emailConfig.step - 1]); // Current step is one less than email step

      for (const subscriber of subscribers.rows) {
        try {
          const rendered = renderEmail(emailConfig, {
            download_url: 'https://conceptkitchen.github.io/concept-kitchen/ask.html'
          });

          const sent = await resend.emails.send({
            from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`,
            to: subscriber.email,
            subject: rendered.subject,
            html: rendered.html
          });

          // Update subscriber step
          await pool.query(`
            UPDATE subscribers 
            SET sequence_step = $1, updated_at = NOW()
            WHERE id = $2
          `, [emailConfig.step, subscriber.id]);

          // Log email
          await pool.query(`
            INSERT INTO email_logs (subscriber_id, email_type, subject, resend_id)
            VALUES ($1, $2, $3, $4)
          `, [subscriber.id, `welcome-${emailConfig.step}`, rendered.subject, sent.data?.id]);

          processed++;
          console.log(`📧 Sent step ${emailConfig.step} to ${subscriber.email}`);

        } catch (err) {
          console.error(`Failed to send to ${subscriber.email}:`, err);
          errors++;
        }
      }
    }

    res.json({ processed, errors });

  } catch (error) {
    console.error('Sequence processing error:', error);
    res.status(500).json({ error: 'Processing failed' });
  }
});

// Unsubscribe
app.get('/api/unsubscribe', async (req, res) => {
  const { email } = req.query;

  if (!email) {
    return res.status(400).send('Email required');
  }

  try {
    await pool.query(`
      UPDATE subscribers 
      SET unsubscribed_at = NOW()
      WHERE email = $1
    `, [email.toLowerCase().trim()]);

    res.send(`
      <html>
        <body style="font-family: system-ui; max-width: 500px; margin: 100px auto; text-align: center;">
          <h2>You've been unsubscribed</h2>
          <p>Sorry to see you go. You won't receive any more emails from The Concept Kitchen.</p>
        </body>
      </html>
    `);

  } catch (error) {
    console.error('Unsubscribe error:', error);
    res.status(500).send('Something went wrong');
  }
});

// Stats (protected)
app.get('/api/stats', async (req, res) => {
  const authHeader = req.headers.authorization;
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const stats = await pool.query(`
      SELECT 
        COUNT(*) as total_subscribers,
        COUNT(*) FILTER (WHERE unsubscribed_at IS NULL) as active_subscribers,
        COUNT(*) FILTER (WHERE created_at > NOW() - INTERVAL '7 days') as new_this_week,
        COUNT(*) FILTER (WHERE sequence_step = 5) as completed_sequence
      FROM subscribers
    `);

    const emailStats = await pool.query(`
      SELECT email_type, COUNT(*) as count
      FROM email_logs
      WHERE sent_at > NOW() - INTERVAL '30 days'
      GROUP BY email_type
      ORDER BY email_type
    `);

    res.json({
      subscribers: stats.rows[0],
      emailsSent: emailStats.rows
    });

  } catch (error) {
    console.error('Stats error:', error);
    res.status(500).json({ error: 'Failed to get stats' });
  }
});

// Catch-all: serve index.html for any non-API routes (SPA-style)
app.get('*', (req, res) => {
  if (!req.path.startsWith('/api')) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🍳 Concept Kitchen running on port ${PORT}`);
  console.log(`   Frontend: http://localhost:${PORT}`);
  console.log(`   API: http://localhost:${PORT}/api/*`);
});
