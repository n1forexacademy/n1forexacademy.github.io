-- Adds image attachments to messages, so a student can send the chart rather
-- than describe it.
--
-- Apply with:
--   npx wrangler d1 execute n1-academy --remote --file=./migrations/005_attachments.sql
--
-- Safe to re-run: everything is IF NOT EXISTS.
--
-- WHY THE BYTES LIVE IN D1 AND NOT R2. R2 is the obvious home for objects, and
-- it would be the right answer at scale. It is not used here because enabling
-- R2 requires a payment method on the account, and this platform's whole
-- premise — documented in FREE-STACK-GUIDE.md — is that it runs on free tiers
-- with no card attached. D1's free tier is 5 GB. Screenshots are compressed in
-- the browser before they are ever sent, so a year of an academy this size is
-- a few hundred megabytes. If that ever stops being true, moving to R2 means
-- changing where `data` is read and written and nothing else, which is why the
-- bytes sit in their own table rather than in a column on `messages`.
--
-- student_id is DENORMALISED on purpose. Serving an image has to answer "may
-- this person see it?" on every request, and that check must not need a join.

CREATE TABLE IF NOT EXISTS attachments (
  id          TEXT PRIMARY KEY,
  message_id  TEXT NOT NULL,
  student_id  TEXT NOT NULL,            -- whose thread it belongs to; the access check reads this
  mime        TEXT NOT NULL,            -- only ever an image type from the server's allowlist
  bytes       INTEGER NOT NULL,
  width       INTEGER,
  height      INTEGER,
  data        BLOB NOT NULL,
  created_at  INTEGER NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_attachments_message ON attachments(message_id);
CREATE INDEX IF NOT EXISTS idx_attachments_thread  ON attachments(student_id, created_at);
