-- Check column names with exact case sensitivity
SELECT 
  attname, 
  pg_catalog.format_type(atttypid, atttypmod) as data_type
FROM 
  pg_catalog.pg_attribute 
WHERE 
  attrelid = 'public.messages'::regclass
  AND attnum > 0 
  AND NOT attisdropped
ORDER BY 
  attnum;

-- Try inserting with double-quoted column names to be case-sensitive
INSERT INTO public.messages ("id", "user_id", "content", "sender_type") 
VALUES 
  (uuid_generate_v4(), '00000000-0000-0000-0000-000000000000', 'Case sensitive test', 'user');

-- Alternative insert approach with different casing
INSERT INTO public.messages ("userid", "content", "sender_type") 
VALUES 
  ('00000000-0000-0000-0000-000000000000', 'Different casing test', 'user'); 