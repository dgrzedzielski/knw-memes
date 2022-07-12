import { Comment } from '../types';

export interface CommentsListResponse {
  comments: Comment[];
  count: number;
}
