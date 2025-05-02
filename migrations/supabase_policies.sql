-- Drop existing policies first to avoid conflicts
DROP POLICY IF EXISTS "Admin users viewable by authenticated users" ON admin_users;
DROP POLICY IF EXISTS "Admin users manageable by admins" ON admin_users;
DROP POLICY IF EXISTS "Posts are viewable by everyone when published" ON posts;
DROP POLICY IF EXISTS "Posts are editable by authors" ON posts;
DROP POLICY IF EXISTS "Posts are manageable by admins" ON posts;
DROP POLICY IF EXISTS "Content revisions viewable by content owners and admins" ON content_revisions;
DROP POLICY IF EXISTS "Content workflows manageable by admins" ON content_workflows;
DROP POLICY IF EXISTS "Services viewable by everyone" ON services;
DROP POLICY IF EXISTS "Services manageable by admins" ON services;
DROP POLICY IF EXISTS "Categories viewable by everyone" ON categories;
DROP POLICY IF EXISTS "Categories manageable by admins" ON categories;
DROP POLICY IF EXISTS "Media assets viewable by everyone" ON media_assets;
DROP POLICY IF EXISTS "Media assets manageable by owners and admins" ON media_assets;
DROP POLICY IF EXISTS "Workflow templates viewable by authenticated" ON workflow_templates;
DROP POLICY IF EXISTS "Workflow templates manageable by admins" ON workflow_templates;
DROP POLICY IF EXISTS "Workflow assignments viewable by assigned users" ON workflow_assignments;
DROP POLICY IF EXISTS "Workflow assignments manageable by admins" ON workflow_assignments;

-- Enable RLS on all tables
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE content_revisions ENABLE ROW LEVEL SECURITY;
ALTER TABLE content_workflows ENABLE ROW LEVEL SECURITY;
ALTER TABLE workflow_templates ENABLE ROW LEVEL SECURITY;
ALTER TABLE workflow_assignments ENABLE ROW LEVEL SECURITY;
ALTER TABLE media_assets ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;

-- Admin users policies
CREATE POLICY "Admin users viewable by authenticated users"
ON admin_users FOR SELECT
TO authenticated
USING (true);

CREATE POLICY "Admin users manageable by admins"
ON admin_users FOR ALL
USING (clerk_user_id::text = auth.uid()::text);

-- Posts policies
CREATE POLICY "Posts are viewable by everyone when published"
ON posts FOR SELECT
USING (status = 'published');

CREATE POLICY "Posts are editable by authors"
ON posts FOR ALL
USING (author_id::text = auth.uid()::text);

CREATE POLICY "Posts are manageable by admins"
ON posts FOR ALL
USING (EXISTS (
    SELECT 1 FROM admin_users 
    WHERE clerk_user_id::text = auth.uid()::text
));

-- Content revisions policies
CREATE POLICY "Content revisions viewable by content owners and admins"
ON content_revisions FOR SELECT
USING (
    EXISTS (
        SELECT 1 FROM posts p
        WHERE p.id = content_id
        AND (
            p.author_id::text = auth.uid()::text
            OR EXISTS (
                SELECT 1 FROM admin_users 
                WHERE clerk_user_id::text = auth.uid()::text
            )
        )
    )
);

-- Content workflows policies
CREATE POLICY "Content workflows viewable by participants"
ON content_workflows FOR SELECT
USING (
    EXISTS (
        SELECT 1 FROM posts p
        WHERE p.id = post_id
        AND (
            p.author_id::text = auth.uid()::text
            OR assigned_to::text = auth.uid()::text
            OR reviewed_by::text = auth.uid()::text
            OR EXISTS (
                SELECT 1 FROM admin_users 
                WHERE clerk_user_id::text = auth.uid()::text
            )
        )
    )
);

CREATE POLICY "Content workflows manageable by admins"
ON content_workflows FOR ALL
USING (
    EXISTS (
        SELECT 1 FROM admin_users 
        WHERE clerk_user_id::text = auth.uid()::text
    )
);

-- Services and categories policies
CREATE POLICY "Services viewable by everyone"
ON services FOR SELECT
USING (true);

CREATE POLICY "Services manageable by admins"
ON services FOR ALL
USING (
    EXISTS (
        SELECT 1 FROM admin_users 
        WHERE clerk_user_id::text = auth.uid()::text
    )
);

CREATE POLICY "Categories viewable by everyone"
ON categories FOR SELECT
USING (true);

CREATE POLICY "Categories manageable by admins"
ON categories FOR ALL
USING (
    EXISTS (
        SELECT 1 FROM admin_users 
        WHERE clerk_user_id::text = auth.uid()::text
    )
);

-- Media assets policies
CREATE POLICY "Media assets viewable by everyone"
ON media_assets FOR SELECT
USING (true);

CREATE POLICY "Media assets manageable by owners and admins"
ON media_assets FOR ALL
USING (
    uploaded_by::text = auth.uid()::text
    OR EXISTS (
        SELECT 1 FROM admin_users 
        WHERE clerk_user_id::text = auth.uid()::text
    )
);

-- Workflow templates policies
CREATE POLICY "Workflow templates viewable by authenticated"
ON workflow_templates FOR SELECT
TO authenticated
USING (true);

CREATE POLICY "Workflow templates manageable by admins"
ON workflow_templates FOR ALL
USING (
    EXISTS (
        SELECT 1 FROM admin_users 
        WHERE clerk_user_id::text = auth.uid()::text
    )
);

-- Workflow assignments policies
CREATE POLICY "Workflow assignments viewable by assigned users"
ON workflow_assignments FOR SELECT
USING (
    user_id::text = auth.uid()::text
    OR EXISTS (
        SELECT 1 FROM admin_users 
        WHERE clerk_user_id::text = auth.uid()::text
    )
);

CREATE POLICY "Workflow assignments manageable by admins"
ON workflow_assignments FOR ALL
USING (
    EXISTS (
        SELECT 1 FROM admin_users 
        WHERE clerk_user_id::text = auth.uid()::text
    )
);

-- Ensure admin_users has proper type for clerk_user_id
DO $$ 
BEGIN
    -- Check if clerk_user_id column exists and is of type text
    IF NOT EXISTS (
        SELECT 1 
        FROM information_schema.columns 
        WHERE table_name = 'admin_users' 
        AND column_name = 'clerk_user_id'
        AND data_type = 'text'
    ) THEN
        -- Add clerk_user_id column if it doesn't exist
        ALTER TABLE admin_users ADD COLUMN IF NOT EXISTS clerk_user_id text;
        -- Create index on clerk_user_id
        CREATE INDEX IF NOT EXISTS idx_admin_users_clerk_user_id ON admin_users(clerk_user_id);
    END IF;
END $$;
