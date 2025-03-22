/**
 * This is a temporary adapter for admin authentication
 * Used to fix compatibility issues during the transition
 */

// Mock implementation of admin auth fix service
export const adminAuthFixService = {
  getCurrentUser: () => {
    // Get user from localStorage if available
    const storedUser = localStorage.getItem('admin_user');
    if (storedUser) {
      try {
        return JSON.parse(storedUser);
      } catch (error) {
        console.error('Error parsing stored user:', error);
      }
    }
    return null;
  },

  verifySession: async () => {
    // Simple session verification
    const sessionToken = localStorage.getItem('admin_session');
    return !!sessionToken;
  },

  clearLocalStorage: () => {
    localStorage.removeItem('admin_user');
    localStorage.removeItem('admin_session');
  }
}; 