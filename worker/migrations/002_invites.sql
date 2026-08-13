-- Adds invite links so students can self-enrol from a URL instead of the
-- instructor issuing codes by hand.
--
-- Apply with:
--   npx wrangler d1 execute n1-academy --remote --file=./migrations/002_invites.sql
--
-- Safe to re-run: everything is IF NOT EXISTS.

CREATE TABLE IF NOT EXISTS invites (
  id          TEXT PRIMARY KEY,          -- short public id, safe to show in lists
  token_hash  TEXT NOT NULL UNIQUE,      -- SHA-256 of the link token; the token itself is never stored
  label       TEXT NOT NULL,             -- what this invite is for, e.g. "October cohort"
  role        TEXT NOT NULL DEFAULT 'student',
  max_uses    INTEGER NOT NULL DEFAULT 1,
  uses        INTEGER NOT NULL DEFAULT 0,
  created_by  TEXT,
  created_at  INTEGER NOT NULL,
  expires_at  INTEGER,                   -- NULL = never expires
  revoked     INTEGER NOT NULL DEFAULT 0
);

CREATE INDEX IF NOT EXISTS idx_invites_token ON invites(token_hash);

-- Who joined via which invite, so an instructor can audit a link after the fact.
CREATE TABLE IF NOT EXISTS invite_uses (
  invite_id   TEXT NOT NULL,
  student_id  TEXT NOT NULL,
  used_at     INTEGER NOT NULL,
  PRIMARY KEY (invite_id, student_id)
);
