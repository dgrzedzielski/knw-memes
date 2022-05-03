import { Post } from './base';

export interface PostsListResponse {
  posts: Post[];
  total: number;
}

export interface CreatePostPayload {
  title: string;
  description: string;
  imageUrl: string;
  authorId: string;
}
