export interface Post {
  id: string;
  title: string;
  content: string;
  author_id: string;
  status: string;
  updated_at: string;
  created_at: string;
}

export interface PostWithRelations extends Post {
  author?: {
    name: string;
  };
  content_workflow?: Array<{
    stage: string;
  }>;
}

export interface CreatePostPayload {
  title: string;
  content: string;
  authorId: string;
}

export interface UpdatePostPayload {
  id: string;
  title?: string;
  content?: string;
  status?: string;
}

export interface DeletePostPayload {
  id: string;
}
