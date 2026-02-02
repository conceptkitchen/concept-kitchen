-- Subscribers table
CREATE TABLE IF NOT EXISTS subscribers (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255),
  source VARCHAR(100) DEFAULT 'website',
  tags TEXT[] DEFAULT '{}',
  sequence_step INTEGER DEFAULT 0,
  sequence_started_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  unsubscribed_at TIMESTAMP
);

-- Email logs table
CREATE TABLE IF NOT EXISTS email_logs (
  id SERIAL PRIMARY KEY,
  subscriber_id INTEGER REFERENCES subscribers(id),
  email_type VARCHAR(100) NOT NULL,
  subject VARCHAR(500),
  resend_id VARCHAR(255),
  status VARCHAR(50) DEFAULT 'sent',
  sent_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Index for sequence processing
CREATE INDEX IF NOT EXISTS idx_subscribers_sequence 
ON subscribers(sequence_step, sequence_started_at) 
WHERE unsubscribed_at IS NULL;

-- Index for email lookup
CREATE INDEX IF NOT EXISTS idx_subscribers_email 
ON subscribers(email);
