-- This file contains SQL functions for initializing the database schema in Supabase
-- Copy this into the Supabase SQL editor and execute

-- Create function to create users table
CREATE OR REPLACE FUNCTION create_users_table()
RETURNS void AS $$
BEGIN
  IF NOT EXISTS (
    SELECT FROM information_schema.tables 
    WHERE table_schema = 'public' 
    AND table_name = 'users'
  ) THEN
    CREATE TABLE public.users (
      id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
      clerk_id TEXT UNIQUE,
      name TEXT,
      email TEXT UNIQUE,
      role TEXT DEFAULT 'user',
      avatar_url TEXT,
      status TEXT DEFAULT 'active',
      last_login TIMESTAMP WITH TIME ZONE DEFAULT now(),
      created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
      updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
    );
    
    -- Create RLS policies for the users table
    ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
    
    -- Allow authenticated users to read all users
    CREATE POLICY "Allow authenticated users to read all users"
      ON public.users
      FOR SELECT
      TO authenticated
      USING (true);
      
    -- Allow users to update their own data
    CREATE POLICY "Allow users to update their own data"
      ON public.users
      FOR UPDATE
      TO authenticated
      USING (auth.uid() = id);
      
    -- Allow the service role to do everything
    CREATE POLICY "Allow service role full access"
      ON public.users
      TO service_role
      USING (true);
  END IF;
END;
$$ LANGUAGE plpgsql;

-- Create function to create users table via direct SQL
-- This is a fallback if the RPC function fails
CREATE OR REPLACE FUNCTION create_users_table_sql()
RETURNS void AS $$
BEGIN
  EXECUTE '
    CREATE TABLE IF NOT EXISTS public.users (
      id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
      clerk_id TEXT UNIQUE,
      name TEXT,
      email TEXT UNIQUE,
      role TEXT DEFAULT ''user'',
      avatar_url TEXT,
      status TEXT DEFAULT ''active'',
      last_login TIMESTAMP WITH TIME ZONE DEFAULT now(),
      created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
      updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
    );
    
    -- Create RLS policies for the users table if they don''t exist
    ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
    
    -- Check if policy exists before creating
    DO $$ 
    BEGIN
      IF NOT EXISTS (
        SELECT 1 FROM pg_policies 
        WHERE tablename = ''users'' 
        AND policyname = ''Allow authenticated users to read all users''
      ) THEN
        CREATE POLICY "Allow authenticated users to read all users"
          ON public.users
          FOR SELECT
          TO authenticated
          USING (true);
      END IF;
      
      IF NOT EXISTS (
        SELECT 1 FROM pg_policies 
        WHERE tablename = ''users'' 
        AND policyname = ''Allow users to update their own data''
      ) THEN
        CREATE POLICY "Allow users to update their own data"
          ON public.users
          FOR UPDATE
          TO authenticated
          USING (auth.uid() = id);
      END IF;
      
      IF NOT EXISTS (
        SELECT 1 FROM pg_policies 
        WHERE tablename = ''users'' 
        AND policyname = ''Allow service role full access''
      ) THEN
        CREATE POLICY "Allow service role full access"
          ON public.users
          TO service_role
          USING (true);
      END IF;
    END $$;
  ';
END;
$$ LANGUAGE plpgsql; 