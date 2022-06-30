import { PaginationParams } from '~/types';
import { httpClient } from '~/utils/http-client';

import { AddCommentPayload, Comment, Post } from '../types';

import { PostsListResponse } from './types';

export const getPosts = async (params: PaginationParams) => {
  const { data } = await httpClient.get<PostsListResponse>('/api/posts', {
    params,
  });

  return data;
};

export const getPost = async (postId: string) => {
  const { data } = await httpClient.get<{ post: Post }>(`/api/posts/${postId}`);

  return data;
};

export const getComments = async (postId: string) => {
  const { data } = await httpClient.get<{ comments: Comment[]; count: number }>(
    `/api/posts/${postId}/comments`
  );

  return data;
};

export const addComment = async ({
  postId,
  ...commentData
}: AddCommentPayload) => {
  const { data } = await httpClient.post<Comment>(
    `/api/posts/${postId}/comments`,
    { ...commentData }
  );

  return data;
};
