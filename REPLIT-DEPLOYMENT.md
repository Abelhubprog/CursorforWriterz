
# HandyWriterz Replit Deployment Guide

This document outlines how to deploy HandyWriterz on Replit's platform.

## Prerequisites

- A Replit account
- Your environment variables properly configured

## Quick Deployment Steps

1. **Prepare your environment**

   Make sure you've added all the necessary environment variables in the Secrets tab:
   - `VITE_CLERK_PUBLISHABLE_KEY`
   - `VITE_APPWRITE_PROJECT_ID`
   - `VITE_APPWRITE_DATABASE_ID`
   - `VITE_APPWRITE_API_KEY`
   - Other necessary variables for your application

2. **Build and deploy**

   Simply click the "Run" button or run this command:

   ```bash
   pnpm replit-deploy
   ```

   This will:
   - Install necessary dependencies
   - Build the application
   - Prepare it for deployment

3. **Deploy via Replit Deployments**

   - Go to the "Deployments" tab in your Replit workspace
   - Select "Autoscale" deployment type
   - Configure with at least "Boosted" compute
   - Click "Deploy"

## Deployment Configuration

The deployment is configured to:

- Use Express.js to serve the built application
- Handle SPA routing correctly (redirect to index.html)
- Set appropriate security headers
- Optimize static asset caching

## Post-Deployment Steps

1. Once deployed, your application will be available at `https://<your-repl-name>.<your-username>.repl.co`

2. Verify that all features work correctly:
   - Authentication
   - Content management
   - API services
   - Uploads and downloads

3. Monitor your application:
   - Check Replit's logs for any errors
   - Monitor your backend services (Appwrite)

## Troubleshooting

- **Authentication issues**: Ensure your Clerk environment variables are set correctly
- **API connection problems**: Verify Appwrite settings and connection
- **Routing issues**: Check if routes are being correctly handled by the Express server

## Updating Your Deployment

To update your deployment after making changes:

1. Make your changes to the codebase
2. Click the "Run" button again (or run `pnpm replit-deploy`)
3. Go to the Deployments tab and click "Deploy" to update

## Resources

- [Replit Deployments Documentation](https://docs.replit.com/hosting/deployments/about-deployments)
- [Appwrite Documentation](https://appwrite.io/docs)
- [Clerk Documentation](https://clerk.com/docs)
