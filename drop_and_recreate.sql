-- First, drop the existing table
DROP TABLE IF EXISTS public.messages;

-- Recreate the messages table
CREATE TABLE public.messages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  admin_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  content TEXT NOT NULL,
  is_read BOOLEAN DEFAULT FALSE,
  sender_type TEXT NOT NULL CHECK (sender_type IN ('user', 'admin')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Now let's verify the columns
SELECT 
  column_name, 
  data_type,
  column_default,
  is_nullable
FROM 
  information_schema.columns 
WHERE 
  table_schema = 'public' 
  AND table_name = 'messages'
ORDER BY 
  ordinal_position; 