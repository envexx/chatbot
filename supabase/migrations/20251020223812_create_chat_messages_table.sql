/*
  # Create Chat Messages Table

  1. New Tables
    - `messages`
      - `id` (uuid, primary key) - Unique identifier for each message
      - `content` (text) - The message content
      - `role` (text) - Either 'user' or 'assistant'
      - `created_at` (timestamptz) - Timestamp when message was created
      - `session_id` (text) - Identifier to group messages by chat session

  2. Security
    - Enable RLS on `messages` table
    - Add policy for anyone to read messages (public chat interface)
    - Add policy for anyone to insert messages (public chat interface)
*/

CREATE TABLE IF NOT EXISTS messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  content text NOT NULL,
  role text NOT NULL CHECK (role IN ('user', 'assistant')),
  created_at timestamptz DEFAULT now(),
  session_id text NOT NULL DEFAULT 'default'
);

ALTER TABLE messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read messages"
  ON messages
  FOR SELECT
  USING (true);

CREATE POLICY "Anyone can insert messages"
  ON messages
  FOR INSERT
  WITH CHECK (true);