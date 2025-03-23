#!/bin/bash

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}🚀 Starting Vercel deployment preparation...${NC}\n"

# Check prerequisites
echo -e "${YELLOW}Checking prerequisites...${NC}"
command -v node >/dev/null 2>&1 || { echo -e "${RED}❌ Node.js is required but not installed.${NC}" >&2; exit 1; }
command -v pnpm >/dev/null 2>&1 || { echo -e "${RED}❌ pnpm is required but not installed.${NC}" >&2; exit 1; }
command -v git >/dev/null 2>&1 || { echo -e "${RED}❌ Git is required but not installed.${NC}" >&2; exit 1; }

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2)
if (( $(echo "$NODE_VERSION 18.0.0" | awk '{print ($1 < $2)}') )); then
    echo -e "${RED}❌ Node.js version must be >= 18.0.0${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Prerequisites checked${NC}\n"

# Create production environment file if it doesn't exist
if [ ! -f .env.production ]; then
    echo -e "${YELLOW}Creating .env.production file...${NC}"
    cat > .env.production << EOL
VITE_APP_URL=https://your-production-domain.vercel.app
VITE_SUPABASE_URL=your-supabase-production-url
VITE_SUPABASE_ANON_KEY=your-supabase-production-key
VITE_CLERK_PUBLISHABLE_KEY=your-clerk-production-key
NODE_ENV=production
SKIP_PREFLIGHT_CHECK=true
TSC_COMPILE_ON_ERROR=true
EOL
    echo -e "${YELLOW}⚠️  Please edit .env.production with your production values${NC}\n"
fi

# Clean install dependencies
echo -e "${YELLOW}Installing dependencies...${NC}"
pnpm install
if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Failed to install dependencies${NC}"
    exit 1
fi
echo -e "${GREEN}✅ Dependencies installed${NC}\n"

# Run local build verification
echo -e "${YELLOW}Verifying build locally...${NC}"
pnpm build:vercel
if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Local build verification failed${NC}"
    echo -e "${YELLOW}Check build-error-log.txt for details${NC}"
    exit 1
fi
echo -e "${GREEN}✅ Local build verified${NC}\n"

# Git operations
echo -e "${YELLOW}Checking Git status...${NC}"
if [ -z "$(git status --porcelain)" ]; then
    echo -e "${GREEN}✅ Working directory clean${NC}"
else
    echo -e "${YELLOW}Uncommitted changes found. Preparing commit...${NC}"
    git add .
    git commit -m "Prepare for Vercel deployment"
    if [ $? -ne 0 ]; then
        echo -e "${RED}❌ Failed to commit changes${NC}"
        exit 1
    fi
    echo -e "${GREEN}✅ Changes committed${NC}"
fi

# Push to repository
echo -e "${YELLOW}Pushing to repository...${NC}"
git push origin main
if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Failed to push to repository${NC}"
    exit 1
fi
echo -e "${GREEN}✅ Code pushed to repository${NC}\n"

echo -e "${GREEN}🎉 Deployment preparation complete!${NC}"
echo -e "\n${YELLOW}Next steps:${NC}"
echo -e "1. Go to ${YELLOW}https://vercel.com/new${NC}"
echo -e "2. Import your repository"
echo -e "3. Configure the following settings:"
echo -e "   - Build Command: ${YELLOW}node scripts/vercel-build.js${NC}"
echo -e "   - Output Directory: ${YELLOW}dist${NC}"
echo -e "   - Node.js Version: ${YELLOW}18.x${NC}"
echo -e "4. Add environment variables from ${YELLOW}.env.production${NC}"
echo -e "5. Deploy!\n"
echo -e "For detailed instructions, refer to ${YELLOW}DEPLOYMENT.md${NC}"
