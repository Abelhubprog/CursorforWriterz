import { supabase } from '@/lib/supabase';

/**
 * Create a new content version
 */
export async function createContentVersion(
  contentId: string,
  version: {
    title: string;
    content: string;
    contentBlocks?: any[];
    metadata?: Record<string, any>;
  },
  accessToken: string
) {
  const {
    data: { user },
    error: userError
  } = await supabase.auth.getUser(accessToken);

  if (userError) {
    throw new Error('Unauthorized');
  }

  // Get the latest version number
  const { data: versions, error: versionsError } = await supabase
    .from('content_revisions')
    .select('version')
    .eq('content_id', contentId)
    .order('version', { ascending: false })
    .limit(1);

  if (versionsError) {
    throw new Error('Failed to get latest version');
  }

  const nextVersion = versions && versions.length > 0 ? versions[0].version + 1 : 1;

  // Create new version
  const { error: createError } = await supabase
    .from('content_revisions')
    .insert({
      content_id: contentId,
      version: nextVersion,
      title: version.title,
      content: version.content,
      content_blocks: version.contentBlocks,
      metadata: version.metadata,
      created_by: user.id
    });

  if (createError) {
    throw new Error('Failed to create version');
  }

  return { version: nextVersion };
}

/**
 * Get content version history
 */
export async function getContentVersions(contentId: string) {
  const { data, error } = await supabase
    .from('content_revisions')
    .select(`
      id,
      version,
      title,
      created_by,
      created_at,
      metadata
    `)
    .eq('content_id', contentId)
    .order('version', { ascending: false });

  if (error) {
    throw new Error('Failed to get versions');
  }

  return data;
}

/**
 * Get specific content version
 */
export async function getContentVersion(contentId: string, version: number) {
  const { data, error } = await supabase
    .from('content_revisions')
    .select()
    .eq('content_id', contentId)
    .eq('version', version)
    .single();

  if (error) {
    throw new Error('Failed to get version');
  }

  return data;
}

/**
 * Restore content to specific version
 */
export async function restoreContentVersion(
  contentId: string, 
  version: number,
  accessToken: string
) {
  // Get version data
  const versionData = await getContentVersion(contentId, version);

  // Update content with version data
  const { error } = await supabase
    .from('content')
    .update({
      title: versionData.title,
      content: versionData.content,
      content_blocks: versionData.content_blocks,
      updated_at: new Date().toISOString()
    })
    .eq('id', contentId);

  if (error) {
    throw new Error('Failed to restore version');
  }

  // Create new version to track the restore
  await createContentVersion(
    contentId,
    {
      title: versionData.title,
      content: versionData.content,
      contentBlocks: versionData.content_blocks,
      metadata: {
        ...versionData.metadata,
        restoredFromVersion: version
      }
    },
    accessToken
  );
}
