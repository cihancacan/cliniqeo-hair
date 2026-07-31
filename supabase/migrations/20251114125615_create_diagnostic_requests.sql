/*
  # Create diagnostic requests table

  1. New Tables
    - `diagnostic_requests`
      - `id` (uuid, primary key)
      - `first_name` (text) - Patient first name
      - `last_name` (text) - Patient last name
      - `email` (text) - Contact email
      - `phone` (text) - Contact phone number
      - `age` (integer) - Patient age
      - `message` (text) - Additional message/notes
      - `photo_front_url` (text) - Front view photo URL
      - `photo_profile_url` (text) - Profile view photo URL
      - `photo_top_url` (text) - Top view photo URL
      - `photo_donor_url` (text) - Donor area photo URL
      - `status` (text) - Request status (pending, reviewed, contacted)
      - `created_at` (timestamptz) - Request creation time
      - `updated_at` (timestamptz) - Last update time

  2. Security
    - Enable RLS on `diagnostic_requests` table
    - Add policy for public to insert their diagnostic requests
    - Add policy for authenticated admins to view all requests
*/

CREATE TABLE IF NOT EXISTS diagnostic_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  age integer,
  message text DEFAULT '',
  photo_front_url text,
  photo_profile_url text,
  photo_top_url text,
  photo_donor_url text,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE diagnostic_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit diagnostic requests"
  ON diagnostic_requests
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all diagnostic requests"
  ON diagnostic_requests
  FOR SELECT
  TO authenticated
  USING (true);