@echo off
echo Starting development server with environment fix...
start "Vite Env Fixer" /min node keep-vite-env-fixed.js
timeout /t 2 /nobreak
pnpm dev --host --port 5173
