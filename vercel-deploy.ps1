# PowerShell deployment script for Vercel

# Define color output functions
function Write-ColorOutput($ForegroundColor) {
    $fc = $host.UI.RawUI.ForegroundColor
    $host.UI.RawUI.ForegroundColor = $ForegroundColor
    if ($args) {
        Write-Output $args
    }
    $host.UI.RawUI.ForegroundColor = $fc
}

function Write-Green($text) {
    Write-ColorOutput Green $text
}

function Write-Yellow($text) {
    Write-ColorOutput Yellow $text
}

function Write-Red($text) {
    Write-ColorOutput Red $text
}

Write-Green "🚀 Starting Vercel deployment preparation...`n"

# Check prerequisites
Write-Yellow "Checking prerequisites..."
$prereqs = @(
    @{Name = "Node.js"; Command = "node --version"},
    @{Name = "pnpm"; Command = "pnpm --version"},
    @{Name = "Git"; Command = "git --version"}
)

$failed = $false
foreach ($prereq in $prereqs) {
    try {
        $null = Invoke-Expression $prereq.Command
        Write-Green "✅ $($prereq.Name) is installed"
    }
    catch {
        Write-Red "❌ $($prereq.Name) is required but not installed"
        $failed = $true
    }
}

if ($failed) {
    exit 1
}

# Check Node.js version
$nodeVersion = (node --version).Replace('v', '')
if ([version]$nodeVersion -lt [version]"18.0.0") {
    Write-Red "❌ Node.js version must be >= 18.0.0"
    exit 1
}

Write-Green "`n✅ Prerequisites checked`n"

# Create production environment file if it doesn't exist
if (!(Test-Path .env.production)) {
    Write-Yellow "Creating .env.production file..."
    @"
VITE_APP_URL=https://your-production-domain.vercel.app
VITE_SUPABASE_URL=your-supabase-production-url
VITE_SUPABASE_ANON_KEY=your-supabase-production-key
VITE_CLERK_PUBLISHABLE_KEY=your-clerk-production-key
NODE_ENV=production
SKIP_PREFLIGHT_CHECK=true
TSC_COMPILE_ON_ERROR=true
"@ | Out-File -FilePath .env.production -Encoding UTF8

    Write-Yellow "⚠️ Please edit .env.production with your production values`n"
}

# Clean install dependencies
Write-Yellow "Installing dependencies..."
try {
    pnpm install
    Write-Green "✅ Dependencies installed`n"
}
catch {
    Write-Red "❌ Failed to install dependencies"
    exit 1
}

# Run local build verification
Write-Yellow "Verifying build locally..."
try {
    pnpm build:vercel
    Write-Green "✅ Local build verified`n"
}
catch {
    Write-Red "❌ Local build verification failed"
    Write-Yellow "Check build-error-log.txt for details"
    exit 1
}

# Git operations
Write-Yellow "Checking Git status..."
$status = git status --porcelain
if ([string]::IsNullOrWhiteSpace($status)) {
    Write-Green "✅ Working directory clean"
}
else {
    Write-Yellow "Uncommitted changes found. Preparing commit..."
    git add .
    try {
        git commit -m "Prepare for Vercel deployment"
        Write-Green "✅ Changes committed"
    }
    catch {
        Write-Red "❌ Failed to commit changes"
        exit 1
    }
}

# Push to repository
Write-Yellow "`nPushing to repository..."
try {
    git push origin main
    Write-Green "✅ Code pushed to repository`n"
}
catch {
    Write-Red "❌ Failed to push to repository"
    exit 1
}

Write-Green "🎉 Deployment preparation complete!"
Write-Yellow "`nNext steps:"
Write-Host "1. Go to https://vercel.com/new"
Write-Host "2. Import your repository"
Write-Host "3. Configure the following settings:"
Write-Host "   - Build Command: node scripts/vercel-build.js"
Write-Host "   - Output Directory: dist"
Write-Host "   - Node.js Version: 18.x"
Write-Host "4. Add environment variables from .env.production"
Write-Host "5. Deploy!`n"
Write-Host "For detailed instructions, refer to DEPLOYMENT.md"
