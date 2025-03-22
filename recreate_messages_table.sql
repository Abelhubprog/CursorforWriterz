-- Create a new messages table with a different name
CREATE TABLE IF NOT EXISTS public.messages_new (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  admin_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  content TEXT NOT NULL,
  is_read BOOLEAN DEFAULT FALSE,
  sender_type TEXT NOT NULL CHECK (sender_type IN ('user', 'admin')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Verify the structure
SELECT 
  column_name, 
  data_type
FROM 
  information_schema.columns 
WHERE 
  table_schema = 'public' 
  AND table_name = 'messages_new'
ORDER BY 
  ordinal_position;

-- Try inserting a test message
INSERT INTO public.messages_new (user_id, content, sender_type)
VALUES ('00000000-0000-0000-0000-000000000000', 'Test message', 'user');

-- Retrieve the test message
SELECT * FROM public.messages_new; 