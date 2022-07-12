export interface Comment {
  id: string;
  author: {
    avatarUrl: string | null;
    name: string;
  };
  body: string;
  createdAt: string;
}

export interface CreateCommentPayload {
  content: string;
  postId: string;
  // authorId is optional as long as authentication is not ready
  authorId?: string;
}
