-- Create extension for UUID generation if not exists
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create document_submissions table
CREATE TABLE IF NOT EXISTS public.document_submissions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  files JSONB NOT NULL, -- Array of file objects with name, url, size, etc.
  metadata JSONB,       -- Service type, subject area, etc.
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create document_submission_queue table for tracking retry status
CREATE TABLE IF NOT EXISTS public.document_submission_queue (
  id UUID PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  metadata JSONB,
  status TEXT NOT NULL,
  attempts INTEGER NOT NULL DEFAULT 0,
  max_attempts INTEGER NOT NULL DEFAULT 3,
  last_attempt TIMESTAMPTZ,
  error TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create admin_notifications table
CREATE TABLE IF NOT EXISTS public.admin_notifications (
  id UUID PRIMARY KEY,
  title TEXT NOT NULL,
  message TEXT NOT NULL,
  priority TEXT NOT NULL,
  channels TEXT[] NOT NULL,
  status JSONB NOT NULL,
  metadata JSONB,
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create admin_messages table (simplified for direct admin communication)
CREATE TABLE IF NOT EXISTS public.admin_messages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  message TEXT NOT NULL,
  priority TEXT NOT NULL DEFAULT 'medium',
  metadata JSONB,
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  is_read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Add indexes for better performance
CREATE INDEX IF NOT EXISTS doc_submissions_user_id_idx ON public.document_submissions(user_id);
CREATE INDEX IF NOT EXISTS doc_submissions_status_idx ON public.document_submissions(status);
CREATE INDEX IF NOT EXISTS doc_submissions_created_at_idx ON public.document_submissions(created_at);

CREATE INDEX IF NOT EXISTS doc_submission_queue_user_id_idx ON public.document_submission_queue(user_id);
CREATE INDEX IF NOT EXISTS doc_submission_queue_status_idx ON public.document_submission_queue(status);

CREATE INDEX IF NOT EXISTS admin_notifications_user_id_idx ON public.admin_notifications(user_id);
CREATE INDEX IF NOT EXISTS admin_notifications_priority_idx ON public.admin_notifications(priority);
CREATE INDEX IF NOT EXISTS admin_notifications_created_at_idx ON public.admin_notifications(created_at);

CREATE INDEX IF NOT EXISTS admin_messages_user_id_idx ON public.admin_messages(user_id);
CREATE INDEX IF NOT EXISTS admin_messages_is_read_idx ON public.admin_messages(is_read);
CREATE INDEX IF NOT EXISTS admin_messages_created_at_idx ON public.admin_messages(created_at);

-- Enable Row Level Security
ALTER TABLE public.document_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.document_submission_queue ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.admin_notifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.admin_messages ENABLE ROW LEVEL SECURITY;

-- Create is_admin function if it doesn't exist
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS boolean AS $$
BEGIN
  -- First try to check admin_users table
  RETURN EXISTS (
    SELECT 1 FROM public.admin_users
    WHERE user_id = auth.uid()
  );
EXCEPTION
  WHEN undefined_table THEN
    -- Fallback for installations without admin_users table
    RETURN FALSE;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create RLS policies for document_submissions
CREATE POLICY "Users can view their own submissions"
  ON public.document_submissions
  FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own submissions"
  ON public.document_submissions
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own submissions"
  ON public.document_submissions
  FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Admins can view all submissions"
  ON public.document_submissions
  FOR SELECT
  USING (is_admin());

CREATE POLICY "Admins can update all submissions"
  ON public.document_submissions
  FOR UPDATE
  USING (is_admin());

-- Create RLS policies for document_submission_queue
CREATE POLICY "Users can view their own submission queue"
  ON public.document_submission_queue
  FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own submission queue items"
  ON public.document_submission_queue
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Admins can view all submission queue items"
  ON public.document_submission_queue
  FOR SELECT
  USING (is_admin());

CREATE POLICY "Admins can update all submission queue items"
  ON public.document_submission_queue
  FOR ALL
  USING (is_admin());

-- Create RLS policies for admin_notifications
CREATE POLICY "Users can view their own notifications"
  ON public.admin_notifications
  FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all notifications"
  ON public.admin_notifications
  FOR SELECT
  USING (is_admin());

CREATE POLICY "Admins can manage all notifications"
  ON public.admin_notifications
  FOR ALL
  USING (is_admin());

-- Create RLS policies for admin_messages
CREATE POLICY "Users can view their own admin messages"
  ON public.admin_messages
  FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all admin messages"
  ON public.admin_messages
  FOR SELECT
  USING (is_admin());

CREATE POLICY "Admins can manage all admin messages"
  ON public.admin_messages
  FOR ALL
  USING (is_admin());

-- Create storage buckets if they don't exist
INSERT INTO storage.buckets (id, name, public)
VALUES ('submissions', 'User submitted documents', false)
ON CONFLICT (id) DO NOTHING;

-- Set up storage policies
CREATE POLICY "Users can upload to their own folders"
  ON storage.objects
  FOR INSERT
  TO authenticated
  WITH CHECK (
    bucket_id = 'submissions' AND
    auth.uid()::text = (storage.foldername(name))[1]
  );

CREATE POLICY "Users can view their own submissions"
  ON storage.objects
  FOR SELECT
  TO authenticated
  USING (
    bucket_id = 'submissions' AND
    auth.uid()::text = (storage.foldername(name))[1]
  );

CREATE POLICY "Admins can access all submissions"
  ON storage.objects
  FOR ALL
  TO authenticated
  USING (
    bucket_id = 'submissions' AND
    is_admin()
  ); 