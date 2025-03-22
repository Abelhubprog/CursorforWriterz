import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  
  console.log(`Building for ${mode} mode`);
  
  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@/components': path.resolve(__dirname, './src/components'),
        '@/lib': path.resolve(__dirname, './src/lib'),
        '@/utils': path.resolve(__dirname, './src/lib/utils'),
        '@/types': path.resolve(__dirname, './src/types'),
        '@/styles': path.resolve(__dirname, './src/styles'),
        '@/hooks': path.resolve(__dirname, './src/hooks'),
        '@/contexts': path.resolve(__dirname, './src/contexts'),
        '@/services': path.resolve(__dirname, './src/services'),
        '@/assets': path.resolve(__dirname, './src/assets'),
        '@/admin': path.resolve(__dirname, './src/admin')
      }
    },
    define: {
      'import.meta.env.VITE_SUPABASE_URL': JSON.stringify(env.VITE_SUPABASE_URL),
      'import.meta.env.VITE_SUPABASE_ANON_KEY': JSON.stringify(env.VITE_SUPABASE_ANON_KEY),
      'import.meta.env.VITE_CLERK_PUBLISHABLE_KEY': JSON.stringify(env.VITE_CLERK_PUBLISHABLE_KEY),
    },
    build: {
      outDir: 'dist',
      sourcemap: true,
      minify: true,
      // Don't fail on warnings
      reportCompressedSize: false,
      chunkSizeWarningLimit: 1600,
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom'],
            'supabase-vendor': ['@supabase/supabase-js'],
            'ui-components': [
              '@/components/ui/button',
              '@/components/ui/card',
              '@/components/ui/input',
              '@/components/ui/textarea',
              '@/components/ui/label',
            ],
          }
        }
      }
    },
    optimizeDeps: {
      include: [
        'react',
        'react-dom',
        'class-variance-authority',
        'clsx',
        'tailwind-merge',
        '@clerk/clerk-react',
        '@supabase/supabase-js'
      ]
    },
    server: {
      port: 5173,
      host: true,
    },
  };
});
