import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    strictPort: true,  // Fail if port is already in use
    host: true,        // Listen on all addresses
    open: true,        // Open browser on server start
    cors: true,        // Enable CORS for all origins
    hmr: {
      protocol: 'ws',
      host: 'localhost',
      port: 5173,
      clientPort: 5173, // Ensure client connects to correct port
      timeout: 5000     // Increase timeout for slower connections
    }
  },
  build: {
    outDir: 'dist',
    target: 'es2018',
    sourcemap: true,
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  }
});
