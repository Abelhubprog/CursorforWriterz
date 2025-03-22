import { ClerkProvider as BaseClerkProvider } from '@clerk/clerk-react';
import { dark } from '@clerk/themes';
import { useTheme } from '@/hooks/useTheme';

if (!import.meta.env.VITE_CLERK_PUBLISHABLE_KEY) {
  throw new Error('Missing Clerk Publishable Key');
}

const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

// Check if we're in development mode
const isDevelopment = import.meta.env.MODE === 'development';
const isLocalhost = typeof window !== 'undefined' && (
  window.location.hostname === 'localhost' || 
  window.location.hostname === '127.0.0.1'
);

// Function to check if a key is a development key
const isDevKey = (key: string | undefined) => {
  return key?.includes('pk_test_') || key?.includes('clerk.daring-goshawk-70.accounts.dev');
};

// Check if using development key in production
if (!isDevelopment && !isLocalhost && isDevKey(publishableKey)) {
  console.warn('Using Clerk development key in production environment');
  // We'll show a toast but not throw an error to avoid breaking the app
  if (typeof window !== 'undefined') {
    setTimeout(() => {
      toast.error(
        'Using development authentication keys in production. This has strict usage limits. Please update to production keys. Learn more: https://clerk.com/docs/deployments/overview', 
        {
          duration: 10000,
          id: 'clerk-dev-key-warning',
        }
      );
    }, 2000);
  }
}

export function ClerkProvider({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();

  return (
    <BaseClerkProvider
      publishableKey={publishableKey}
      appearance={{
        baseTheme: theme === 'dark' ? dark : undefined,
        variables: { colorPrimary: '#0F172A' },
      }}
    >
      {children}
    </BaseClerkProvider>
  );
}
