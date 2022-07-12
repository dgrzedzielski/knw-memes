import { PaginationParams } from '~/types';
import { httpClient } from '~/utils/http-client';

import { Post } from '../types';

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
