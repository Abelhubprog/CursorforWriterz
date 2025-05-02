import { supabase } from '@/lib/supabase';

export interface ContentVersion {
  id: string;
  contentId: string;
  versionNumber: number;
  title: string;
  content: string;
  contentBlocks?: any[];
  metadata: any;
  createdBy: string;
  createdAt: string;
}

export interface ChangeLogEntry {
  id: string;
  contentId: string;
  changedBy: string;
  changeType: string;
  oldValues: any;
  newValues: any;
  metadata: any;
  createdAt: string;
}

export const contentVersionService = {
  /**
   * Get all versions of a content piece
   */
  async getVersions(contentId: string): Promise<ContentVersion[]> {
    const { data, error } = await supabase
      .from('content_versions')
      .select(`
        id,
        content_id,
        version_number,
        title,
        content,
        content_blocks,
        metadata,
        created_by,
        created_at
      `)
      .eq('content_id', contentId)
      .order('version_number', { ascending: false });

    if (error) {
      console.error('Error fetching content versions:', error);
      throw new Error('Failed to fetch content versions');
    }

    return data.map(version => ({
      id: version.id,
      contentId: version.content_id,
      versionNumber: version.version_number,
      title: version.title,
      content: version.content,
      contentBlocks: version.content_blocks,
      metadata: version.metadata,
      createdBy: version.created_by,
      createdAt: version.created_at
    }));
  },

  /**
   * Get a specific version of a content piece
   */
  async getVersion(contentId: string, versionNumber: number): Promise<ContentVersion> {
    const { data, error } = await supabase
      .rpc('get_content_version', {
        p_content_id: contentId,
        p_version_number: versionNumber
      });

    if (error) {
      console.error('Error fetching content version:', error);
      throw new Error('Failed to fetch content version');
    }

    const version = data[0];
    return {
      id: version.version_id,
      contentId: version.content_id,
      versionNumber: version.version_number,
      title: version.title,
      content: version.content,
      contentBlocks: version.content_blocks,
      metadata: version.metadata,
      createdBy: version.created_by,
      createdAt: version.created_at
    };
  },

  /**
   * Revert content to a specific version
   */
  async revertToVersion(contentId: string, versionNumber: number): Promise<void> {
    const { error } = await supabase
      .rpc('revert_to_version', {
        p_content_id: contentId,
        p_version_number: versionNumber
      });

    if (error) {
      console.error('Error reverting content version:', error);
      throw new Error('Failed to revert content version');
    }
  },

  /**
   * Get change history for a content piece
   */
  async getChangeHistory(contentId: string): Promise<ChangeLogEntry[]> {
    const { data, error } = await supabase
      .from('content_change_log')
      .select(`
        id,
        content_id,
        changed_by,
        change_type,
        old_values,
        new_values,
        metadata,
        created_at
      `)
      .eq('content_id', contentId)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching change history:', error);
      throw new Error('Failed to fetch change history');
    }

    return data.map(entry => ({
      id: entry.id,
      contentId: entry.content_id,
      changedBy: entry.changed_by,
      changeType: entry.change_type,
      oldValues: entry.old_values,
      newValues: entry.new_values,
      metadata: entry.metadata,
      createdAt: entry.created_at
    }));
  },

  /**
   * Get version differences
   */
  async getVersionDiff(
    contentId: string, 
    fromVersion: number, 
    toVersion: number
  ): Promise<{
    fromVersion: ContentVersion;
    toVersion: ContentVersion;
    changes: {
      title?: { old: string; new: string };
      content?: { changed: boolean };
      contentBlocks?: { changed: boolean };
      metadata?: { changed: boolean };
    };
  }> {
    // Fetch both versions
    const [oldVersion, newVersion] = await Promise.all([
      this.getVersion(contentId, fromVersion),
      this.getVersion(contentId, toVersion)
    ]);

    // Calculate differences
    const changes = {
      ...(oldVersion.title !== newVersion.title && {
        title: { old: oldVersion.title, new: newVersion.title }
      }),
      ...(oldVersion.content !== newVersion.content && {
        content: { changed: true }
      }),
      ...(JSON.stringify(oldVersion.contentBlocks) !== JSON.stringify(newVersion.contentBlocks) && {
        contentBlocks: { changed: true }
      }),
      ...(JSON.stringify(oldVersion.metadata) !== JSON.stringify(newVersion.metadata) && {
        metadata: { changed: true }
      })
    };

    return {
      fromVersion: oldVersion,
      toVersion: newVersion,
      changes
    };
  }
};

export default contentVersionService;
