-- First, enable RLS
ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;

-- Create a very simple policy first
CREATE POLICY "Allow full access to authenticated users"
ON public.messages
FOR ALL
TO authenticated
USING (true)
WITH CHECK (true);

-- Testing to see if this works
SELECT * FROM public.messages;

-- Now insert a test record
INSERT INTO public.messages (user_id, content, sender_type)
VALUES ('00000000-0000-0000-0000-000000000000', 'Another test message', 'user'); 