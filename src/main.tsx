/**
 * Main Application Entry
 * 
 * Sets up the React application and all required providers.
 * 
 * @file src/main.tsx
 */

// Load polyfills first
import './polyfills';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ClerkProvider } from '@clerk/clerk-react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import { HelmetProvider } from 'react-helmet-async';
import { SupabaseProvider } from './providers/SupabaseProvider';
import { logEnvironmentStatus } from './utils/checkEnv';
import './index.css';
import { router } from './router';

// Import Tailwind styles directly
import 'tailwindcss/tailwind.css';

// Check environment on startup
logEnvironmentStatus();

// Initialize React Query client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

// Get Clerk publishable key with fallback
const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY || 'pk_live_Y2xlcmsuaGFuZHl3cml0ZXJ6LmNvbSQ';

// Try to render the application, with error handling
try {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    throw new Error("Root element not found");
  }
  
  ReactDOM.createRoot(rootElement).render(
    <HelmetProvider>
      <ClerkProvider 
        publishableKey={publishableKey}
        appearance={{
          variables: { colorPrimary: '#0369a1' },
        }}
      >
        <SupabaseProvider>
          <QueryClientProvider client={queryClient}>
            <Toaster />
            <RouterProvider router={router} />
          </QueryClientProvider>
        </SupabaseProvider>
      </ClerkProvider>
    </HelmetProvider>
  );
} catch (error) {
  console.error("Failed to render application:", error);
  
  // Render a fallback UI
  const rootElement = document.getElementById('root');
  if (rootElement) {
    rootElement.innerHTML = `
      <div style="padding: 20px; text-align: center; font-family: system-ui, sans-serif;">
        <h1 style="color: #0369a1;">HandyWriterz</h1>
        <p>We're experiencing technical difficulties. Please try again later.</p>
      </div>
    `;
  }
}
