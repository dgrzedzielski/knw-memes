import { httpClient } from 'core/utils/http-client';

import { PostsListResponse } from './types';

export const getPosts = async () => {
  const { data } = await httpClient.get<PostsListResponse>('/api/posts');

  return data;
};
