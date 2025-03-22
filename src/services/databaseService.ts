import { supabase } from '@/lib/supabase';

class DatabaseService {
  // Basic CRUD operations
  async create(table: string, data: any) {
    const { data: result, error } = await supabase
      .from(table)
      .insert(data)
      .select();
    
    if (error) throw error;
    return result;
  }

  async read(table: string, query: any = {}) {
    let queryBuilder = supabase.from(table).select(query.select || '*');
    
    // Apply filters if any
    if (query.filters) {
      for (const filter of query.filters) {
        queryBuilder = queryBuilder.filter(filter.column, filter.operator, filter.value);
      }
    }
    
    // Apply order if any
    if (query.order) {
      queryBuilder = queryBuilder.order(query.order.column, { ascending: query.order.ascending });
    }
    
    // Apply pagination if any
    if (query.pagination) {
      queryBuilder = queryBuilder.range(
        query.pagination.from, 
        query.pagination.to
      );
    }
    
    const { data, error } = await queryBuilder;
    
    if (error) throw error;
    return data;
  }

  async update(table: string, id: string, data: any) {
    const { data: result, error } = await supabase
      .from(table)
      .update(data)
      .eq('id', id)
      .select();
    
    if (error) throw error;
    return result;
  }

  async delete(table: string, id: string) {
    const { error } = await supabase
      .from(table)
      .delete()
      .eq('id', id);
    
    if (error) throw error;
    return true;
  }

  // Helper methods
  async count(table: string, column: string = 'id') {
    const { count, error } = await supabase
      .from(table)
      .select(column, { count: 'exact', head: true });
    
    if (error) throw error;
    return count;
  }

  async exists(table: string, column: string, value: any) {
    const { data, error } = await supabase
      .from(table)
      .select('id')
      .eq(column, value)
      .maybeSingle();
    
    if (error) throw error;
    return !!data;
  }

  // Service page operations
  async fetchServicePageBySlug(slug: string) {
    const { data, error } = await supabase
      .from('service_pages')
      .select('*')
      .eq('slug', slug)
      .single();
    
    if (error) {
      if (error.code === 'PGRST116') { // "No rows returned" error
      return null;
      }
      throw error;
    }
    
    return data;
  }
  
  async trackServicePageShare(pageId: string) {
    try {
      // Get current shares count
    const { data, error } = await supabase
        .from('service_page_stats')
        .select('shares')
      .eq('page_id', pageId)
      .single();
    
    if (error) {
        if (error.code === 'PGRST116') { // "No rows returned" error
          // Create stats record if it doesn't exist
          await supabase
            .from('service_page_stats')
            .insert({
              page_id: pageId,
              shares: 1,
              views: 0,
              likes: 0
            });
        } else {
          throw error;
        }
      } else {
        // Update existing shares count
        await supabase
          .from('service_page_stats')
          .update({
            shares: (data.shares || 0) + 1
          })
          .eq('page_id', pageId);
      }
      
      return true;
    } catch (error) {
      console.error('Error tracking service page share:', error);
      return false;
    }
  }

  async deleteServicePage(pageId: string) {
    try {
      // Delete related stats first
      await supabase
        .from('service_page_stats')
        .delete()
        .eq('page_id', pageId);
      
      // Delete the page
      const { error } = await supabase
        .from('service_pages')
        .delete()
        .eq('id', pageId);
      
      if (error) throw error;
      
      return true;
    } catch (error) {
      console.error('Error deleting service page:', error);
      return false;
    }
  }
  
  async likeServicePage(pageId: string, userId: string) {
    try {
    // Insert like record
    const { error: insertError } = await supabase
      .from('service_page_likes')
      .insert({
        page_id: pageId,
          user_id: userId,
          created_at: new Date().toISOString()
        });
      
      if (insertError) throw insertError;
      
      // Update likes count in stats
      const { data: stats, error: statsError } = await supabase
        .from('service_page_stats')
        .select('likes')
        .eq('page_id', pageId)
        .single();
      
      if (statsError) {
        if (statsError.code === 'PGRST116') { // "No rows returned" error
          // Create stats record if it doesn't exist
          await supabase
            .from('service_page_stats')
            .insert({
              page_id: pageId,
              likes: 1,
              views: 0,
              shares: 0
            });
        } else {
          throw statsError;
        }
      } else {
        // Update existing likes count
        await supabase
          .from('service_page_stats')
      .update({
            likes: (stats.likes || 0) + 1
          })
          .eq('page_id', pageId);
      }
      
      return true;
    } catch (error) {
      console.error('Error liking service page:', error);
      return false;
    }
  }
  
  async unlikeServicePage(pageId: string, userId: string) {
    try {
    // Delete like record
    const { error: deleteError } = await supabase
      .from('service_page_likes')
      .delete()
        .match({
          page_id: pageId,
          user_id: userId
        });
      
      if (deleteError) throw deleteError;
      
      // Update likes count in stats
      const { data: stats, error: statsError } = await supabase
        .from('service_page_stats')
        .select('likes')
      .eq('page_id', pageId)
        .single();
      
      if (!statsError && stats) {
        // Only decrement if count is positive
        const newCount = Math.max(0, (stats.likes || 1) - 1);
        await supabase
          .from('service_page_stats')
          .update({ likes: newCount })
          .eq('page_id', pageId);
      }
      
      return true;
    } catch (error) {
      console.error('Error unliking service page:', error);
      return false;
    }
  }
  
  async hasUserLikedServicePage(pageId: string, userId: string) {
    try {
    const { data, error } = await supabase
        .from('service_page_likes')
        .select('id')
        .match({
          page_id: pageId,
          user_id: userId
        })
        .maybeSingle();
      
      if (error) throw error;
      
      return !!data;
    } catch (error) {
      console.error('Error checking if user liked service page:', error);
      return false;
    }
  }
}

export default new DatabaseService(); 