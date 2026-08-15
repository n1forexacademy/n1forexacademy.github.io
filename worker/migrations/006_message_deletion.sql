-- Lets a message, or a single picture inside one, be removed.
--
-- Apply with:
--   npx wrangler d1 execute n1-academy --remote --file=./migrations/006_message_deletion.sql
--
-- ⚠️ UNLIKE THE OTHER MIGRATIONS, THIS ONE IS NOT SAFE TO RE-RUN.
-- SQLite has no "ADD COLUMN IF NOT EXISTS". Running it twice fails with
-- "duplicate column name: deleted_at", which means it was already applied and
-- nothing is wrong. Do not try to "fix" that by dropping the column.
--
-- WHY MESSAGES ARE TOMBSTONED BUT PICTURES ARE NOT.
--
-- The message row survives with `deleted_at` set and its body blanked, so the
-- conversation keeps its shape: both people can see that something was here and
-- was taken back. Silently vanishing a message from the middle of a thread makes
-- the remaining messages read as replies to nothing.
--
-- The attachment rows are DELETED OUTRIGHT. A tombstone that kept the bytes
-- would defeat the entire point — the reason someone removes a picture is that
-- they did not mean to send it, and "hidden but still in the database" is not
-- removed. Storage is the lesser reason; the real one is that a student who
-- screenshots their platform with their account balance showing needs the
-- pixels gone, not flagged.
--
-- The consequence, stated plainly because it cannot be undone: deletion is
-- permanent. There is no recycle bin and no admin recovery.

ALTER TABLE messages ADD COLUMN deleted_at INTEGER;
ALTER TABLE messages ADD COLUMN deleted_by TEXT;   -- 'student' | 'instructor'
