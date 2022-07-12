import { Comment } from 'modules/comments/types';

import { Post } from '../types';

export interface PostsListResponse {
  posts: Post[];
  total: number;
}

export interface CreatePostPayload {
  title: string;
  description: string;
  imageUrl: string;
  // authorId is optional as long as authentication is not ready
  authorId?: string;
}

export interface CommentsListsResponse {
  comments: Comment[];
  count: number;
}
