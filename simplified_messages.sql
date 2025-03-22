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

-- Make the table public for now until we debug the RLS issues
GRANT ALL ON public.messages TO authenticated;
GRANT ALL ON public.messages TO anon;
GRANT ALL ON public.messages TO service_role;

-- We'll add RLS later once the table is working
-- ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;

-- Create indexes
CREATE INDEX IF NOT EXISTS messages_user_id_idx ON public.messages (user_id);
CREATE INDEX IF NOT EXISTS messages_admin_id_idx ON public.messages (admin_id);
CREATE INDEX IF NOT EXISTS messages_created_at_idx ON public.messages (created_at); 