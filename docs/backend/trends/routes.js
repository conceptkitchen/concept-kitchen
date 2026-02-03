// Trend Scout API Routes
import { Router } from 'express';
import { analyzeContent, getTodayQueries } from './research.js';

export function createTrendRoutes(pool) {
  const router = Router();

  // Get all trends (with optional filters)
  router.get('/', async (req, res) => {
    const { status, platform, limit = 50, offset = 0 } = req.query;
    
    try {
      let query = 'SELECT * FROM trends WHERE 1=1';
      const params = [];
      let paramCount = 0;
      
      if (status) {
        paramCount++;
        query += ` AND status = $${paramCount}`;
        params.push(status);
      }
      
      if (platform) {
        paramCount++;
        query += ` AND platform = $${paramCount}`;
        params.push(platform);
      }
      
      query += ` ORDER BY researched_at DESC LIMIT $${paramCount + 1} OFFSET $${paramCount + 2}`;
      params.push(parseInt(limit), parseInt(offset));
      
      const result = await pool.query(query, params);
      
      // Get counts by status
      const counts = await pool.query(`
        SELECT status, COUNT(*) as count 
        FROM trends 
        GROUP BY status
      `);
      
      res.json({
        trends: result.rows,
        counts: counts.rows.reduce((acc, row) => {
          acc[row.status] = parseInt(row.count);
          return acc;
        }, {}),
        total: result.rows.length
      });
      
    } catch (error) {
      console.error('Error fetching trends:', error);
      res.status(500).json({ error: 'Failed to fetch trends' });
    }
  });

  // Get today's trends
  router.get('/today', async (req, res) => {
    try {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      const result = await pool.query(`
        SELECT * FROM trends 
        WHERE researched_at >= $1 
        ORDER BY researched_at DESC
      `, [today]);
      
      res.json({ trends: result.rows, date: today.toISOString().split('T')[0] });
      
    } catch (error) {
      console.error('Error fetching today trends:', error);
      res.status(500).json({ error: 'Failed to fetch trends' });
    }
  });

  // Add a trend manually
  router.post('/', async (req, res) => {
    const { url, platform, title, description, views_estimate, notes } = req.body;
    
    if (!title && !url) {
      return res.status(400).json({ error: 'Title or URL required' });
    }
    
    try {
      // Analyze the content
      const analysis = analyzeContent({ url, title, description });
      
      const result = await pool.query(`
        INSERT INTO trends (url, platform, title, description, views_estimate, 
                           hook_type, format, why_it_works, how_to_apply, notes, status)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, 'new')
        RETURNING *
      `, [
        url, platform, title, description, views_estimate,
        analysis.hook_type, analysis.format, 
        analysis.why_it_works, analysis.how_to_apply, notes
      ]);
      
      res.json({ trend: result.rows[0] });
      
    } catch (error) {
      console.error('Error adding trend:', error);
      res.status(500).json({ error: 'Failed to add trend' });
    }
  });

  // Update trend status/notes
  router.patch('/:id', async (req, res) => {
    const { id } = req.params;
    const { status, notes, tags } = req.body;
    
    try {
      const updates = [];
      const params = [];
      let paramCount = 0;
      
      if (status) {
        paramCount++;
        updates.push(`status = $${paramCount}`);
        params.push(status);
      }
      
      if (notes !== undefined) {
        paramCount++;
        updates.push(`notes = $${paramCount}`);
        params.push(notes);
      }
      
      if (tags) {
        paramCount++;
        updates.push(`tags = $${paramCount}`);
        params.push(tags);
      }
      
      if (updates.length === 0) {
        return res.status(400).json({ error: 'No updates provided' });
      }
      
      paramCount++;
      params.push(id);
      
      const result = await pool.query(`
        UPDATE trends 
        SET ${updates.join(', ')}
        WHERE id = $${paramCount}
        RETURNING *
      `, params);
      
      if (result.rows.length === 0) {
        return res.status(404).json({ error: 'Trend not found' });
      }
      
      res.json({ trend: result.rows[0] });
      
    } catch (error) {
      console.error('Error updating trend:', error);
      res.status(500).json({ error: 'Failed to update trend' });
    }
  });

  // Delete trend
  router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    
    try {
      await pool.query('DELETE FROM trends WHERE id = $1', [id]);
      res.json({ success: true });
    } catch (error) {
      console.error('Error deleting trend:', error);
      res.status(500).json({ error: 'Failed to delete trend' });
    }
  });

  // Research endpoint (called by cron)
  router.post('/research', async (req, res) => {
    // Auth check
    const authHeader = req.headers.authorization;
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    
    try {
      const queries = getTodayQueries();
      const trendsFound = [];
      
      // Note: In production, this would call a search API
      // For now, we'll return the queries that would be searched
      // Yaya will do the actual research and add trends via POST /api/trends
      
      res.json({ 
        message: 'Research triggered',
        queries,
        note: 'Yaya will research these queries and add trends manually or via API'
      });
      
    } catch (error) {
      console.error('Research error:', error);
      res.status(500).json({ error: 'Research failed' });
    }
  });

  return router;
}
