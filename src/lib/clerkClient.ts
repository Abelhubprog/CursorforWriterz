import { supabase } from './supabaseClient';

// Function to sync a Clerk user to Supabase
export const syncUserToSupabase = async (clerkUser: any) => {
    if (!clerkUser) return null;

    try {
        // Check if user already exists in Supabase
        const { data: existingUsers, error: queryError } = await supabase
            .from('users')
            .select('*')
            .eq('clerk_id', clerkUser.id)
            .limit(1);

        if (queryError) throw queryError;

        if (existingUsers && existingUsers.length > 0) {
            // User exists, update user data
            const existingUser = existingUsers[0];
            
            const userData = {
                name: `${clerkUser.firstName} ${clerkUser.lastName}`.trim(),
                email: clerkUser.emailAddresses[0]?.emailAddress || existingUser.email,
                avatar_url: clerkUser.imageUrl || existingUser.avatar_url,
                last_login: new Date().toISOString(),
            };

            const { data: updatedUser, error } = await supabase
                .from('users')
                .update(userData)
                .eq('id', existingUser.id)
                .select()
                .single();

            if (error) throw error;
            return updatedUser;
        } else {
            // User doesn't exist, create new user
            const userData = {
                clerk_id: clerkUser.id,
                name: `${clerkUser.firstName} ${clerkUser.lastName}`.trim(),
                email: clerkUser.emailAddresses[0]?.emailAddress || '',
                role: 'user', // Default role for new users
                avatar_url: clerkUser.imageUrl || `https://ui-avatars.com/api/?name=${clerkUser.firstName}+${clerkUser.lastName}&background=random`,
                status: 'active',
                last_login: new Date().toISOString(),
                created_at: new Date().toISOString(),
            };

            const { data: newUser, error } = await supabase
                .from('users')
                .insert([userData])
                .select()
                .single();

            if (error) throw error;
            return newUser;
        }
    } catch (error) {
        console.error('Error syncing user to Supabase:', error);
        throw error;
    }
};

// Function to get a user's Supabase record by Clerk ID
export const getUserByClerkId = async (clerkId: string) => {
    try {
        const { data: users, error } = await supabase
            .from('users')
            .select('*')
            .eq('clerk_id', clerkId)
            .limit(1);

        if (error) throw error;
        return users && users.length > 0 ? users[0] : null;
    } catch (error) {
        console.error('Error getting user by Clerk ID:', error);
        return null;
    }
};

// Check if a user has admin privileges
export const isAdmin = async (clerkId: string) => {
    try {
        const user = await getUserByClerkId(clerkId);
        return user && (user.role === 'admin' || user.role === 'editor');
    } catch (error) {
        console.error('Error checking admin status:', error);
        return false;
    }
};

// Promote a user to admin
export const promoteToAdmin = async (userId: string) => {
    try {
        const { data, error } = await supabase
            .from('users')
            .update({ role: 'admin' })
            .eq('id', userId)
            .select()
            .single();

        if (error) throw error;
        return data;
    } catch (error) {
        console.error('Error promoting user to admin:', error);
        throw error;
    }
};

// Update a user's status (active/inactive/pending)
export const updateUserStatus = async (userId: string, status: 'active' | 'inactive' | 'pending') => {
    try {
        const { data, error } = await supabase
            .from('users')
            .update({ status })
            .eq('id', userId)
            .select()
            .single();

        if (error) throw error;
        return data;
    } catch (error) {
        console.error('Error updating user status:', error);
        throw error;
    }
};

export default {
    syncUserToSupabase,
    getUserByClerkId,
    isAdmin,
    promoteToAdmin,
    updateUserStatus
}; 