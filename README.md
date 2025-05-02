# HandyWriterz Admin Portal and Content Management System

A comprehensive admin portal and content management system for HandyWriterz, built with React, TypeScript, Clerk for authentication, and Supabase for backend services.

![HandyWriterz Admin Dashboard](https://example.com/dashboard-preview.png)

## 🚀 Features

### Authentication & Authorization
- Secure user authentication using Clerk
- Role-based access control
- Single sign-on capabilities
- Secure profile management

### Content Management
- Rich text editor with markdown support
- Media library for image, video, and document management
- Post scheduling and publishing
- SEO optimization tools
- Content categorization and tagging

### Communication Tools
- Comprehensive message inbox
- Reply management
- File attachment support
- Message archiving and starring

### Modern UI
- Responsive design for all devices
- Theme customization (light/dark mode)
- Color scheme selection
- Accessible interface with proper ARIA support

### Integration
- Seamless integration with Supabase for backend services
- Real-time updates and notifications
- Data synchronization between Clerk and Supabase

## 🛠️ Tech Stack

- **Frontend**: React, TypeScript, TailwindCSS
- **Authentication**: Clerk
- **Backend & Database**: Supabase
- **State Management**: React Context API & useState
- **UI Components**: Custom components with TailwindCSS
- **Icons**: Lucide React
- **Rich Text Editing**: React Quill, React Markdown
- **Code Highlighting**: React Syntax Highlighter
- **Notifications**: React Hot Toast

## 📋 Prerequisites

- Node.js 16.x or higher
- npm/yarn/pnpm
- Supabase account
- Clerk account

## 🔧 Installation

1. **Clone the repository**

```bash
   git clone https://github.com/yourusername/handywriterz.git
   cd handywriterz
   ```

2. **Install dependencies**

```bash
   npm install
# or
yarn install
   # or
   pnpm install
   ```

3. **Environment setup**

   Create a `.env` file in the root directory with the following variables:

```
# Clerk Authentication
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

# Appwrite Configuration
VITE_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
VITE_APPWRITE_PROJECT_ID=your_appwrite_project_id
```

4. **Initialize Supabase Tables**

Run the initialization script to set up all the required Supabase tables and policies:

```bash
node scripts/initSupabase.js
```

This will set up all required tables and RLS policies in your Supabase project.

5. **Start the development server**

```bash
   npm run dev
# or
yarn dev
   # or
   pnpm dev
   ```

## ⚙️ Configuration

### Supabase Setup

1. Create a Supabase project in the [Supabase Dashboard](https://app.supabase.com)
2. Get your project URL and anon key from the project settings
3. Create the necessary storage buckets:
   - `media`: For storing images, videos, and general media files
   - `documents`: For storing documents like PDFs, Word files, etc.
   - `avatars`: For storing user avatars

### Clerk Setup

1. Create a Clerk application in the [Clerk Dashboard](https://dashboard.clerk.dev/)
2. Configure the following settings:
   - Authentication methods (email, social logins, etc.)
   - Sign-in and sign-up URLs
   - Redirect URLs after authentication
3. Get your Publishable Key from the Clerk Dashboard

## 🔍 Directory Structure

```
├── public/              # Static assets
├── scripts/             # Utility scripts for setup and maintenance
├── src/
│   ├── components/      # Reusable components
│   │   ├── admin/       # Admin-specific components
│   │   └── ui/          # UI components
│   │   └── services/    # Service pages
│   ├── lib/             # Library code and utilities
│   ├── pages/           # Page components
│   │   ├── admin/       # Admin pages
│   │   └── services/    # Service pages
│   ├── hooks/           # Custom React hooks
│   ├── App.tsx          # Main app component
│   └── main.tsx         # Entry point
└── package.json         # Dependencies and scripts
```

## 🌟 Usage

### Admin Dashboard

Access the admin dashboard at `/admin`. You'll need admin privileges to access this area.

### Content Management

1. Creating new posts:
   - Navigate to Posts -> New Post
   - Fill in the details and use the rich text editor
   - Add tags, categories, and SEO information
   - Save as draft or publish immediately

2. Managing media:
   - Navigate to Media Library
   - Upload new files or manage existing ones
   - Use the media in your posts

### Message Management

1. Access the message inbox:
   - Navigate to Messages
   - View and respond to user inquiries
   - Star important messages and archive old ones

## 🔒 Security

- All API requests are authenticated
- Role-based access control ensures only authorized users can access admin features
- Clerk handles secure authentication
- Content is sanitized to prevent XSS attacks
- File uploads are validated for type and size

## 🚢 Deployment

### Build the Application

```bash
npm run build
# or
yarn build
# or
pnpm build
```

This will generate a `dist` directory with the compiled assets.

### Deployment Options

1. **Static Hosting**:
   - Netlify, Vercel, or GitHub Pages
   - Configure redirects for SPA routing

2. **Docker Deployment**:
   - Use the included Dockerfile
   - Build: `docker build -t handywriterz .`
   - Run: `docker run -p 8080:80 handywriterz`

3. **Server Deployment**:
   - Copy the `dist` directory to your web server
   - Configure server for SPA routing

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📃 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support, email support@handywriterz.com or open an issue in the GitHub repository.

# HandyWriterz Service Pages with Appwrite

This document provides instructions for setting up and using the service pages in the HandyWriterz application with Appwrite as the backend.

## Features

- Multiple service areas (Adult Health Nursing, Mental Health Nursing, Child Nursing, Cryptocurrency)
- Content management through admin dashboard
- User authentication integration
- Interactive features (likes, comments, views)
- Advanced content filtering and search capabilities

## Setup Instructions

### 1. Appwrite Setup

1. Create an Appwrite project
2. Create a database in your Appwrite project
3. Set up API keys with appropriate permissions
4. Run the setup script to create all necessary collections

### 2. Environment Variables

Create a `.env` file with the following variables:

```
# Clerk Authentication
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

# Supabase Configuration
VITE_SUPABASE_URL=https://your-project-ref.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
VITE_SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Database Tables (these are automatically created by the setup script)
# - posts
# - categories
# - comments
# - likes
# - views
# - profiles
```

### 3. Run The Setup Script

Execute the setup script to create all necessary collections:

```bash
# Install dependencies if needed
npm install

# Run the setup script
node scripts/setup-appwrite.js
```

## Database Structure

The application uses the following collections:

### Posts Collection

Stores blog posts and service content:

- `id`: Unique identifier (auto-generated)
- `title`: Post title (required)
- `excerpt`: Short summary of the post
- `content`: Full HTML content of the post (required)
- `coverImage`: URL to the post's featured image
- `category`: Category name (required)
- `serviceType`: Type of service (adult-health-nursing, mental-health-nursing, child-nursing, crypto)
- `status`: Publication status (published, draft, archived)
- `authorId`: Reference to the user profile (required)
- `publishedAt`: Publication date
- `tags`: Array of post tags
- `likesCount`: Number of likes
- `commentsCount`: Number of comments
- `viewsCount`: Number of views

### Categories Table

Stores content categories:

- `id`: UUID primary key (auto-generated)
- `name`: Category name (required, unique)
- `slug`: URL-friendly version of name (required, unique)
- `description`: Category description text
- `service_type`: ENUM of service types
- `post_count`: Integer counter (updated via trigger)

### Comments Table

Stores user comments on posts:

- `id`: UUID primary key (auto-generated)
- `post_id`: UUID foreign key reference to posts table (required)
- `author_id`: UUID foreign key reference to profiles table (required)
- `content`: Comment text (required)
- `created_at`: Timestamp with timezone (auto-generated)
- `likesCount`: Number of likes

### Likes Table

Stores user likes on posts and comments:

- `id`: UUID primary key (auto-generated)
- `target_id`: UUID foreign key reference to posts or comments table (required)
- `target_type`: ENUM ('post' or 'comment')
- `user_id`: UUID foreign key reference to profiles table (required)
- `created_at`: Timestamp with timezone (auto-generated)

### Views Table

Tracks post views:

- `id`: UUID primary key (auto-generated)
- `post_id`: UUID foreign key reference to posts table (required)
- `user_id`: UUID foreign key reference to profiles table (optional)
- `viewed_at`: Timestamp with timezone (auto-generated)
- `ip_address`: IP address of viewer (anonymized)
- `user_agent`: Browser user agent string

### Profiles Table

User profiles for the application:

- `id`: UUID primary key (matches auth.users.id)
- `email`: User's email address (unique)
- `full_name`: User's full name
- `avatar_url`: URL to user's avatar in storage
- `bio`: User's biography text
- `role`: ENUM ('admin', 'editor', 'user')
- `created_at`: Timestamp with timezone (auto-generated)
- `updated_at`: Timestamp with timezone (auto-updated)
- `status`: Account status (active, inactive, pending)
- `lastLoginAt`: Last login timestamp

## User Roles

The application supports the following user roles:

- **Admin**: Can create, edit, and delete all content; manage users
- **Editor**: Can create and edit content
- **User**: Can view published content, like, and comment

### Posts Table

Stores all content posts:

- `id`: UUID primary key (auto-generated)
- `title`: Post title (required)
- `slug`: URL-friendly version of title (required, unique)
- `content`: Post content in markdown format
- `excerpt`: Short description for previews
- `author_id`: UUID foreign key reference to profiles table
- `category_id`: UUID foreign key reference to categories table
- `status`: ENUM ('draft', 'published', 'archived')
- `published_at`: Timestamp with timezone
- `created_at`: Timestamp with timezone (auto-generated)
- `updated_at`: Timestamp with timezone (auto-updated)
- `likes_count`: Integer counter (updated via trigger)
- `comments_count`: Integer counter (updated via trigger)
- `views_count`: Integer counter (updated via trigger)
- `meta_title`: SEO title
- `meta_description`: SEO description
- `featured_image`: URL to featured image in storage

## Component Architecture

The service pages are built with the following components:

1. **ServicePage** - Main page component for each service
2. **PostsList** - Displays a grid or list of posts
3. **PostDetail** - Shows full post content
4. **CommentSection** - Displays and allows creating comments
5. **CategoryFilter** - Filters posts by category
6. **SearchBar** - Searches posts by title

## Admin Dashboard

The admin dashboard allows managing:

- Posts (create, edit, delete)
- Categories (create, edit, delete)
- Users (manage roles, status)
- Comments (moderate, delete)
- Analytics (view post performance)

Access the admin dashboard at `/admin/dashboard`.

## Admin Dashboard Setup Instructions

The HandyWriterz platform includes a powerful admin dashboard for managing content across all service pages. This guide will help you set up and use the admin dashboard.

### Setup Process

1. **Database Setup**

   The admin dashboard requires specific database tables and Row Level Security (RLS) policies. Set these up by running our migration script:

   ```bash
   node scripts/setup_db.js
   ```

   This script will:
   - Create all necessary tables in your Supabase project
   - Set up RLS policies for secure access control
   - Create necessary database functions and triggers
   - Set up storage bucket policies
   - Optionally create an admin user
   - Optionally seed sample data for service pages

2. **Environment Configuration**

   Ensure your `.env` file contains the following Supabase configuration:

   ```
   VITE_SUPABASE_URL=https://your-project-ref.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key
   ```

3. **Start the Application**

   Start the application in development mode:

   ```bash
   npm run dev
   ```

   The admin dashboard will be available at:
   ```
   http://localhost:5173/admin
   ```

### Admin Dashboard Features

The admin dashboard includes the following features:

#### Content Management

- **Service-Specific Content:** Create and manage content for individual service pages (Adult Health Nursing, Mental Health Nursing, Child Nursing, Cryptocurrency, AI)
- **Rich Content Editor:** Create content with markdown, images, videos, code blocks, and more
- **Content Organization:** Organize content with categories and tags
- **SEO Tools:** Optimize content with SEO metadata

#### User Management

- **User Administration:** Manage user accounts and permissions
- **Role-Based Access:** Assign roles (admin, editor, viewer) to control access

#### Service Page Configuration

- **Page Settings:** Configure service page layouts and display options
- **Featured Content:** Select content to feature on service pages
- **Visual Customization:** Set banner images and icons for service pages

#### Analytics

- **Content Performance:** View content performance metrics
- **User Engagement:** Track user engagement with content
- **Service Performance:** Compare performance across different service pages

### Using the Admin Dashboard

1. **Login to Admin**

   Navigate to `/admin/login` and sign in with your admin credentials.

2. **Dashboard Overview**

   The dashboard home provides an overview of all content and services.

3. **Managing Content**

   - To create new content, click "Create Content" or navigate to a specific service page and click "Add New"
   - Use the rich editor to create formatted content including code blocks with syntax highlighting
   - Schedule content publication for future dates if needed

4. **Service Configuration**

   - Navigate to Services > [Service Name] > Settings
   - Configure display options, SEO settings, and featured content

5. **User Management**

   - Navigate to Users to manage user accounts
   - Assign appropriate roles for team members

### Content Types

The platform supports various content types optimized for different service pages:

- **Text Articles:** Standard formatted articles with sections and images
- **Code Tutorials:** Content with syntax-highlighted code blocks (especially for Crypto/AI pages)
- **Video Content:** Embed and describe video content
- **Interactive Guides:** Step-by-step guides with rich formatting

### Troubleshooting

If you encounter issues with the admin dashboard:

1. Check Supabase connection in the browser console
2. Verify database tables and RLS policies were created correctly in Supabase Dashboard
3. Ensure your user has admin role in the profiles table
4. Check storage bucket permissions in Supabase Dashboard
5. Verify environment variables are set correctly
6. Check for any JavaScript errors in the console

For additional help, please contact support.

