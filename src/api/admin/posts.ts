import { supabase } from '@/lib/supabase';
import type { Post, PostWithRelations, CreatePostPayload, UpdatePostPayload, DeletePostPayload } from '@/types/content';

export async function GET(request: Request) {
  try {
    const { data: posts, error } = await supabase
      .from('posts')
      .select(`
        id,
        title,
        author:profiles(name),
        updated_at,
        content_workflow(stage)
      `)
      .order('updated_at', { ascending: false });

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Transform the data to match the expected format
    const formattedPosts = posts.map((post: PostWithRelations) => ({
      id: post.id,
      title: post.title,
      status: post.content_workflow?.[0]?.stage || 'draft',
      author: post.author?.name || 'Unknown',
      lastModified: post.updated_at
    }));

    return new Response(JSON.stringify(formattedPosts), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Error fetching posts:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json() as CreatePostPayload;
    const { title, content, authorId } = body;

    // First, create the post
    const { data: post, error: postError } = await supabase
      .from('posts')
      .insert([
        {
          title,
          content,
          author_id: authorId,
          status: 'draft'
        }
      ])
      .select()
      .single();

    if (postError) {
      return new Response(JSON.stringify({ error: postError.message }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // The workflow entry will be created automatically by the trigger we set up

    return new Response(JSON.stringify(post), {
      status: 201,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Error creating post:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json() as UpdatePostPayload;
    const { id, ...updates } = body;

    const { data: post, error: postError } = await supabase
      .from('posts')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (postError) {
      return new Response(JSON.stringify({ error: postError.message }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify(post), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Error updating post:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

export async function DELETE(request: Request) {
  try {
    const body = await request.json() as DeletePostPayload;
    const { id } = body;

    const { error } = await supabase
      .from('posts')
      .delete()
      .eq('id', id);

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Error deleting post:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
