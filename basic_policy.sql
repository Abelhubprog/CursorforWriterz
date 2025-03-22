-- Enable RLS
ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;

-- Create a basic policy that allows access to everyone
CREATE POLICY "messages_policy" 
ON public.messages 
FOR ALL 
TO authenticated 
USING (true) 
WITH CHECK (true);

-- Once this is working, we can refine the policy
-- First with a basic user policy
/*
CREATE POLICY "user_select_own_messages" 
ON public.messages 
FOR SELECT 
TO authenticated 
USING (auth.uid()::text = user_id::text);
*/ 