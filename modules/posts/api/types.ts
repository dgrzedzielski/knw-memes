import { Comment, Post } from '../types';

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

export interface CommentsListsResponse {
  comments: Comment[];
  count: number;
}
