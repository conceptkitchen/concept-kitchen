-- Trends table
CREATE TABLE IF NOT EXISTS trends (
  id SERIAL PRIMARY KEY,
  url TEXT,
  platform VARCHAR(50), -- instagram, tiktok, youtube, twitter, linkedin
  title TEXT,
  description TEXT,
  views_estimate VARCHAR(50), -- "500K", "1.2M", etc.
  hook_type VARCHAR(100), -- pattern interrupt, question, bold claim, etc.
  format VARCHAR(50), -- reel, carousel, static, thread, short
  why_it_works TEXT,
  how_to_apply TEXT, -- how TCK could use this trend
  source_query TEXT, -- what search found this
  status VARCHAR(20) DEFAULT 'new', -- new, saved, used, archived
  tags TEXT[], -- array of tags
  notes TEXT,
  researched_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Index for date-based queries
CREATE INDEX IF NOT EXISTS idx_trends_date ON trends(researched_at DESC);

-- Index for status filtering
CREATE INDEX IF NOT EXISTS idx_trends_status ON trends(status);

-- Index for platform filtering  
CREATE INDEX IF NOT EXISTS idx_trends_platform ON trends(platform);
