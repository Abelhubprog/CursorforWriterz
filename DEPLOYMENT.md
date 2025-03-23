# Vercel Deployment Guide

## Quick Start

1. First, verify your deployment setup:
```bash
node verify-deployment.js
```
This will check all prerequisites and configurations, ensuring your project is ready for deployment.

2. Run the deployment script for your platform:
- Windows: `.\vercel-deploy.ps1`
- Unix/Mac: `chmod +x vercel-deploy.sh && ./vercel-deploy.sh`

3. Follow the guided deployment steps that appear after the script completes.

## Prerequisites
- A Vercel account
- A GitHub account
- Git installed on your machine
- Node.js >= 18.0.0
- pnpm installed (`npm install -g pnpm`)

## Step 1: Local Preparation

1. Ensure all changes are committed to your repository:
```bash
git add .
git commit -m "Prepare for deployment"
git push origin main
```

2. Verify your build locally:
```bash
pnpm install
pnpm build:vercel
```

## Step 2: Environment Variables

1. Create a new file called `.env.production` with your production values:
```env
VITE_APP_URL=https://your-production-domain.vercel.app
VITE_SUPABASE_URL=your-supabase-production-url
VITE_SUPABASE_ANON_KEY=your-supabase-production-key
VITE_CLERK_PUBLISHABLE_KEY=your-clerk-production-key
NODE_ENV=production
SKIP_PREFLIGHT_CHECK=true
TSC_COMPILE_ON_ERROR=true
```

## Step 3: Vercel Setup

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Import your Git repository
4. Configure project settings:
   - Framework Preset: Vite
   - Build Command: `node scripts/vercel-build.js`
   - Output Directory: `dist`
   - Node.js Version: 18.x

5. Add Environment Variables in Vercel:
   - Go to Settings > Environment Variables
   - Add all variables from your `.env.production`
   - Required variables:
     ```
     VITE_SUPABASE_URL
     VITE_SUPABASE_ANON_KEY
     VITE_CLERK_PUBLISHABLE_KEY
     VITE_APP_URL
     NODE_ENV
     SKIP_PREFLIGHT_CHECK
     TSC_COMPILE_ON_ERROR
     ```

## Step 4: Deploy

1. Click "Deploy" in Vercel dashboard
2. Watch the build logs for any issues
3. Once deployed, Vercel will provide you with a production URL

## Step 5: Post-Deployment Verification

1. Visit your deployed site
2. Verify these features work:
   - Authentication (Clerk sign-in/sign-up)
   - Supabase connections
   - API endpoints
   - Static asset loading
   - Routing (test different pages)

## Troubleshooting

If you encounter build errors:

1. Check build logs in Vercel dashboard
2. Common issues:
   - Missing environment variables
   - TypeScript errors (these won't block deployment but should be reviewed)
   - Dependencies not installing correctly

2. If build fails:
   - Review `build-error-log.txt` in your repository
   - Ensure all dependencies are in package.json
   - Verify Node.js version compatibility

## Maintenance

- Monitor your deployment:
  - Vercel dashboard analytics
  - Error tracking
  - Performance metrics

- For updates:
  1. Make changes locally
  2. Test with `pnpm build:vercel`
  3. Commit and push to GitHub
  4. Vercel will automatically deploy updates

## Production Considerations

1. Enable these features in Vercel dashboard:
   - Automatic Preview Deployments
   - Pull Request Comments
   - Production Branch Protection

2. Configure custom domain:
   - Go to Settings > Domains
   - Add your custom domain
   - Follow DNS configuration instructions

3. Enable these production optimizations:
   - Edge Caching
   - Automatic HTTPS
   - Serverless Functions (if used)
