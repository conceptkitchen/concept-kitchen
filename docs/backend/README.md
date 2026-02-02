# The Concept Kitchen — Backend

Email subscription and automation backend.

## Stack
- **Runtime:** Node.js on Replit
- **Database:** PostgreSQL (Replit DB)
- **Email:** Resend API
- **Frontend:** GitHub Pages

## Setup

### 1. Create Replit Project
- Import from GitHub or create new Node.js repl
- Enable PostgreSQL in the Database tab

### 2. Environment Variables
Set these in Replit Secrets:

```
RESEND_API_KEY=re_xxxxxxxxxxxx
DATABASE_URL=<from Replit DB tab>
FROM_EMAIL=hi@concept.kitchen
FROM_NAME=RJ from The Concept Kitchen
FRONTEND_URL=https://conceptkitchen.github.io
CRON_SECRET=<random string for cron auth>
```

### 3. Initialize Database
Run the schema in `db/schema.sql` via Replit's SQL console.

### 4. Resend Setup
1. Create account at resend.com
2. Verify your domain (concept.kitchen)
3. Get API key

### 5. Connect Frontend
Update the form on GitHub Pages to POST to your Replit URL:
```javascript
fetch('https://your-repl.replit.app/api/subscribe', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email, name })
})
```

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/subscribe` | POST | Add subscriber, send welcome email |
| `/api/process-sequence` | POST | Process drip sequence (cron) |
| `/api/unsubscribe` | GET | Unsubscribe page |
| `/api/stats` | GET | Subscriber stats (protected) |

## Cron Setup

Set up a cron job to hit `/api/process-sequence` daily:

**Using Replit's built-in cron:**
```javascript
// In replit, use the "Run on a schedule" feature
// Or use an external cron service like cron-job.org
```

**Curl example:**
```bash
curl -X POST https://your-repl.replit.app/api/process-sequence \
  -H "Authorization: Bearer YOUR_CRON_SECRET"
```

## Email Sequence

| Step | Delay | Subject |
|------|-------|---------|
| 1 | Instant | Your guide is here 🍳 |
| 2 | Day 2 | The one thing most people skip |
| 3 | Day 4 | How I got here (no CS degree) |
| 4 | Day 6 | Another recipe for you |
| 5 | Day 8 | What's next? |

## Local Development

```bash
cp .env.example .env
# Fill in your values
npm install
npm run dev
```

---

Built for The Concept Kitchen 🍳
