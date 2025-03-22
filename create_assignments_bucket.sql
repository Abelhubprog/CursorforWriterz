-- Create a new storage bucket for assignments if it doesn't exist
INSERT INTO storage.buckets (id, name, public, avif_autodetection)
VALUES ('assignments', 'Assignments', true, false)
ON CONFLICT (id) DO NOTHING;

-- Set up security policies for the assignments bucket
-- Allow authenticated users to upload files
CREATE POLICY "Allow authenticated uploads" 
ON storage.objects 
FOR INSERT 
TO authenticated 
WITH CHECK (bucket_id = 'assignments');

-- Allow users to read their own files
CREATE POLICY "Allow users to read own files" 
ON storage.objects 
FOR SELECT 
TO authenticated 
USING (
  bucket_id = 'assignments' AND 
  (storage.foldername(name))[1] = auth.uid()::text
);

-- Allow users to update their own files
CREATE POLICY "Allow users to update own files" 
ON storage.objects 
FOR UPDATE 
TO authenticated 
USING (
  bucket_id = 'assignments' AND 
  (storage.foldername(name))[1] = auth.uid()::text
);

-- Allow users to delete their own files
CREATE POLICY "Allow users to delete own files" 
ON storage.objects 
FOR DELETE 
TO authenticated 
USING (
  bucket_id = 'assignments' AND 
  (storage.foldername(name))[1] = auth.uid()::text
);

-- Allow admins to access all files in the assignments bucket
CREATE POLICY "Allow admins to access all files" 
ON storage.objects 
FOR ALL 
TO authenticated 
USING (
  bucket_id = 'assignments' AND 
  public.is_admin() = true
); 