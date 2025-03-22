-- Find a real user ID that exists in the auth.users table
SELECT id FROM auth.users LIMIT 1;

-- Check how many users exist
SELECT COUNT(*) FROM auth.users;

-- If we need to create a test user (uncomment if needed)
-- INSERT INTO auth.users (id, email) 
-- VALUES (uuid_generate_v4(), 'test@example.com')
-- RETURNING id; 