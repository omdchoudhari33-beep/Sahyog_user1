/*
# Create civic reports tables (single-tenant, no auth)

1. New Tables
- `reports`
  - `id` (uuid, primary key)
  - `ticket_id` (text, unique, human-readable ticket number like "TC-2026-XXXXXX")
  - `category` (text, issue category: roads, water, sanitation, electricity, other)
  - `description` (text, citizen description of the issue)
  - `lat` (numeric, latitude)
  - `lng` (numeric, longitude)
  - `address` (text, optional nearest address or landmark)
  - `media_urls` (text[], array of storage URLs for photos/audio)
  - `phone_number` (text, citizen phone for status updates)
  - `status` (text, current status: submitted, under_review, in_progress, resolved, rejected)
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)
- `report_events`
  - `id` (uuid, primary key)
  - `report_id` (uuid, FK to reports.id ON DELETE CASCADE)
  - `status` (text, the status at this event point)
  - `note` (text, optional note about the event)
  - `created_at` (timestamptz)

2. Security
- Enable RLS on both tables.
- This is a public civic reporting app with no sign-in, so all CRUD is allowed for anon + authenticated.
- `USING (true)` is acceptable here because the data is intentionally public/shared (citizens report and track civic issues).

3. Indexes
- Index on `reports.ticket_id` for fast ticket lookups.
- Index on `report_events.report_id` for fetching timeline events.
*/

CREATE TABLE IF NOT EXISTS reports (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  ticket_id text UNIQUE NOT NULL,
  category text NOT NULL DEFAULT 'other',
  description text NOT NULL DEFAULT '',
  lat numeric,
  lng numeric,
  address text DEFAULT '',
  media_urls text[] DEFAULT '{}',
  phone_number text DEFAULT '',
  status text NOT NULL DEFAULT 'submitted',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS report_events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  report_id uuid NOT NULL REFERENCES reports(id) ON DELETE CASCADE,
  status text NOT NULL,
  note text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_reports_ticket_id ON reports(ticket_id);
CREATE INDEX IF NOT EXISTS idx_report_events_report_id ON report_events(report_id);

ALTER TABLE reports ENABLE ROW LEVEL SECURITY;
ALTER TABLE report_events ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_reports" ON reports;
CREATE POLICY "anon_select_reports" ON reports FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_reports" ON reports;
CREATE POLICY "anon_insert_reports" ON reports FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_reports" ON reports;
CREATE POLICY "anon_update_reports" ON reports FOR UPDATE
  TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_reports" ON reports;
CREATE POLICY "anon_delete_reports" ON reports FOR DELETE
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_select_report_events" ON report_events;
CREATE POLICY "anon_select_report_events" ON report_events FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_report_events" ON report_events;
CREATE POLICY "anon_insert_report_events" ON report_events FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_report_events" ON report_events;
CREATE POLICY "anon_update_report_events" ON report_events FOR UPDATE
  TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_report_events" ON report_events;
CREATE POLICY "anon_delete_report_events" ON report_events FOR DELETE
  TO anon, authenticated USING (true);