/*
# Add voice_memo_url column to reports

1. Modified Tables
- `reports`
  - Added `voice_memo_url` (text, nullable) column to store the URL/path of the citizen's voice memo recording.

2. Security
- No policy changes — existing anon+authenticated CRUD policies already cover this column.
*/

ALTER TABLE reports ADD COLUMN IF NOT EXISTS voice_memo_url text;