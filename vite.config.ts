import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Configure Vite to use .env.local file with higher priority
export default defineConfig(({ mode }) => {
  // Load environment variables
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
      },
    },
    define: {
      // Make environment variables available to the app
      'import.meta.env': JSON.stringify(env)
    },
    server: {
      port: 3000,
      host: true,
    },
    build: {
      outDir: 'dist',
      sourcemap: mode !== 'production',
      minify: mode === 'production',
      target: 'esnext',
      assetsDir: 'assets',
      emptyOutDir: true,
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom'],
            'ui-components': [
              '@/components/ui/button',
              '@/components/ui/card',
              '@/components/ui/input',
              '@/components/ui/textarea',
              '@/components/ui/label',
            ],
          },
          entryFileNames: 'assets/[name].[hash].js',
          chunkFileNames: 'assets/[name].[hash].js',
          assetFileNames: 'assets/[name].[hash].[ext]'
        },
      },
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
      ],
    },
  };
});
