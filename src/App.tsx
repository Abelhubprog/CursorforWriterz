/**
 * Main App Component (DEPRECATED)
 * 
 * NOTE: This component is no longer the main entry point.
 * Routing is now handled via createBrowserRouter in router.tsx which is configured in main.tsx
 * 
 * @deprecated Use router.tsx for route definitions instead
 */

import React from 'react';
import { SupabaseProvider } from './providers/SupabaseProvider';
import { AuthProvider as AdminAuthProvider } from './admin/components/hooks/useAuth';
import Homepage from './pages/Homepage';

/**
 * App component wrapper - provides context providers
 * This component is no longer used for routing
 */
const App: React.FC = React.memo(() => {
  console.log('App is rendering, but this component is DEPRECATED');
  
  // Simply render the Homepage component directly
  // This is only kept for backward compatibility
  return (
    <SupabaseProvider>
      <AdminAuthProvider>
        <Homepage />
      </AdminAuthProvider>
    </SupabaseProvider>
  );
});

export default App;
