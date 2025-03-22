-- Get detailed information about the messages table
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

-- Also check if the table was actually created correctly
\d public.messages

-- Alternative way to check table structure
SELECT 
  c.relname as table_name,
  a.attname as column_name,
  pg_catalog.format_type(a.atttypid, a.atttypmod) as data_type
FROM 
  pg_catalog.pg_class c
  JOIN pg_catalog.pg_attribute a ON a.attrelid = c.oid
WHERE 
  c.relname = 'messages'
  AND a.attnum > 0
  AND NOT a.attisdropped
ORDER BY 
  a.attnum; 