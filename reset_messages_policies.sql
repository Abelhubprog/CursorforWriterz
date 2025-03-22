-- Drop all existing policies
DROP POLICY IF EXISTS "Users can view their own messages" ON public.messages;
DROP POLICY IF EXISTS "Users can send messages" ON public.messages;
DROP POLICY IF EXISTS "Users can mark messages as read" ON public.messages;
DROP POLICY IF EXISTS "Admins can view all messages" ON public.messages;
DROP POLICY IF EXISTS "Admins can send messages" ON public.messages;
DROP POLICY IF EXISTS "Admins can update messages" ON public.messages;

-- Temporarily disable RLS for testing
ALTER TABLE public.messages DISABLE ROW LEVEL SECURITY;

-- Now let's verify the table structure
SELECT column_name, data_type 
FROM information_schema.columns 
WHERE table_schema = 'public' 
AND table_name = 'messages';

-- Insert a test message manually to verify the table works
INSERT INTO public.messages (user_id, content, sender_type)
VALUES ('00000000-0000-0000-0000-000000000000', 'Test message', 'user');

-- Retrieve the message to verify it was inserted
SELECT * FROM public.messages; 