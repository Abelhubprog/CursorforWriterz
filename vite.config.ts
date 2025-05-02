import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Ensure base URL is correctly set
  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  define: {
    global: 'globalThis'
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true
    },
    outDir: 'dist',
    sourcemap: true, // Enable sourcemaps for debugging
    minify: 'esbuild',
    // Don't fail on warnings
    reportCompressedSize: false,
    chunkSizeWarningLimit: 2000, // Increase the warning limit
    // Ensure proper SSR handling
    ssrManifest: false,
    // Improve error handling
    emptyOutDir: true,
    // Handle build errors more gracefully
    rollupOptions: {
      onwarn(warning, warn) {
        // Skip certain warnings
        if (warning.code === 'MODULE_LEVEL_DIRECTIVE') {
          return;
        }
        // Log other warnings
        if (warning.message) {
          console.log(warning.message);
        } else {
          warn(warning);
        }
      },
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'supabase-vendor': ['@supabase/supabase-js']
        }
      }
    }
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      '@clerk/clerk-react',
      '@tanstack/react-query',
      'react-hot-toast',
      'react-helmet-async',
      '@supabase/supabase-js',
      'lucide-react',
      'framer-motion'
    ],
    force: true,
    esbuildOptions: {
      define: {
        global: 'globalThis'
      }
    }
  },
  server: {
    port: 5173,
    host: true,
    fs: {
      strict: false,
      allow: ['..']
    },
    watch: {
      usePolling: true
    }
  },
  preview: {
    port: 5173,
    host: true
  },
  envPrefix: ['VITE_', 'CLERK_', 'SUPABASE_']
});
