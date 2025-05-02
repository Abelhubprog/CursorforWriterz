Write-Host "Directly patching Vite client env.mjs..." -ForegroundColor Green

# Stop any running Node processes
taskkill /F /IM node.exe >$null 2>&1

# Path to Vite's client env.mjs that needs patching
$envMjsPath = "node_modules\vite\dist\client\env.mjs"

# The fixed content to write
$content = @"
// This file is auto-generated
export const __WS_TOKEN__ = 'development';
"@

# Write fixed content directly to file
Set-Content -Path $envMjsPath -Value $content -Force

Write-Host "✅ Successfully patched Vite's env.mjs file" -ForegroundColor Green
Write-Host "Now run 'pnpm dev' to start the development server" -ForegroundColor Yellow 