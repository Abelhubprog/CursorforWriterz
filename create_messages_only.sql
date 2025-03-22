-- Create messages table
CREATE TABLE IF NOT EXISTS public.messages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  admin_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  content TEXT NOT NULL,
  is_read BOOLEAN DEFAULT FALSE,
  sender_type TEXT NOT NULL CHECK (sender_type IN ('user', 'admin')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS on messages
ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;

-- Allow users to view messages related to them
CREATE POLICY "Users can view their own messages"
ON public.messages
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

-- Allow users to send messages
CREATE POLICY "Users can send messages"
ON public.messages
FOR INSERT
TO authenticated
WITH CHECK (
  auth.uid() = user_id AND 
  sender_type = 'user'
);

-- Allow users to mark messages as read
CREATE POLICY "Users can mark messages as read"
ON public.messages
FOR UPDATE
TO authenticated
USING (
  auth.uid() = user_id AND 
  sender_type = 'admin'
)
WITH CHECK (
  auth.uid() = user_id AND 
  sender_type = 'admin'
);

-- Allow admins to see all messages
CREATE POLICY "Admins can view all messages"
ON public.messages
FOR SELECT
TO authenticated
USING (public.is_admin() = true);

-- Allow admins to send messages to users
CREATE POLICY "Admins can send messages"
ON public.messages
FOR INSERT
TO authenticated
WITH CHECK (
  public.is_admin() = true AND 
  sender_type = 'admin'
);

-- Allow admins to update messages they sent
CREATE POLICY "Admins can update messages"
ON public.messages
FOR UPDATE
TO authenticated
USING (
  public.is_admin() = true AND 
  (sender_type = 'admin' OR sender_type = 'user')
)
WITH CHECK (
  public.is_admin() = true
);

-- Create message indexes
CREATE INDEX IF NOT EXISTS messages_user_id_idx ON public.messages (user_id);
CREATE INDEX IF NOT EXISTS messages_admin_id_idx ON public.messages (admin_id);
CREATE INDEX IF NOT EXISTS messages_created_at_idx ON public.messages (created_at); 