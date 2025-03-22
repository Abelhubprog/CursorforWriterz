-- Drop the existing function first to ensure we replace it
DROP FUNCTION IF EXISTS public.is_admin();

-- Create the admin function with the correct column reference
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS boolean AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM public.admin_users
    WHERE id = auth.uid()
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER; 