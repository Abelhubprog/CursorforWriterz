-- Step 1: Create messages table
CREATE TABLE IF NOT EXISTS public.messages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  admin_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  content TEXT NOT NULL,
  is_read BOOLEAN DEFAULT FALSE,
  sender_type TEXT NOT NULL CHECK (sender_type IN ('user', 'admin')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Step 2: Enable RLS on messages
ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;

-- Step 3: Create the first policy - uncomment and run only this after steps 1-2 succeed
CREATE POLICY "Users can view their own messages"
ON public.messages
FOR SELECT
TO authenticated
USING (auth.uid()::uuid = user_id);

-- Step 4: Create the second policy - uncomment and run only this after step 3 succeeds
CREATE POLICY "Users can send messages"
ON public.messages
FOR INSERT
TO authenticated
WITH CHECK (
  auth.uid()::uuid = NEW.user_id AND 
  NEW.sender_type = 'user'
);

-- Step 5: Create the third policy - uncomment and run only this after step 4 succeeds
/*
CREATE POLICY "Users can mark messages as read"
ON public.messages
FOR UPDATE
TO authenticated
USING (
  auth.uid()::uuid = user_id AND 
  sender_type = 'admin'
)
WITH CHECK (
  auth.uid()::uuid = NEW.user_id AND 
  NEW.sender_type = 'admin'
);
*/

-- Step 6: Create the fourth policy - uncomment and run only this after step 5 succeeds
/*
CREATE POLICY "Admins can view all messages"
ON public.messages
FOR SELECT
TO authenticated
USING (public.is_admin() = true);
*/

-- Step 7: Create the fifth policy - uncomment and run only this after step 6 succeeds
/*
CREATE POLICY "Admins can send messages"
ON public.messages
FOR INSERT
TO authenticated
WITH CHECK (
  public.is_admin() = true AND 
  NEW.sender_type = 'admin'
);
*/

-- Step 8: Create the sixth policy - uncomment and run only this after step 7 succeeds
/*
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
*/

-- Step 9: Create indexes - uncomment and run only this after step 8 succeeds
/*
CREATE INDEX IF NOT EXISTS messages_user_id_idx ON public.messages (user_id);
CREATE INDEX IF NOT EXISTS messages_admin_id_idx ON public.messages (admin_id);
CREATE INDEX IF NOT EXISTS messages_created_at_idx ON public.messages (created_at);
*/ 