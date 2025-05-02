-- SQL function to ensure the users table exists
CREATE OR REPLACE FUNCTION public.ensure_users_table()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Check if users table exists
  IF NOT EXISTS (
    SELECT FROM pg_tables 
    WHERE schemaname = 'public' 
    AND tablename = 'users'
  ) THEN
    -- Create users table if it doesn't exist
    CREATE TABLE public.users (
      id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
      email TEXT UNIQUE NOT NULL,
      full_name TEXT,
      avatar_url TEXT,
      updated_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
      created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
    );
    
    -- Set up Row Level Security
    ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
    
    -- Create policies
    CREATE POLICY "Users can view their own data" 
      ON public.users 
      FOR SELECT 
      USING (auth.uid() = id);
      
    CREATE POLICY "Users can update their own data" 
      ON public.users 
      FOR UPDATE 
      USING (auth.uid() = id);
      
    RAISE NOTICE 'Created users table with RLS policies';
  ELSE
    RAISE NOTICE 'Users table already exists';
  END IF;
END;
$$; 