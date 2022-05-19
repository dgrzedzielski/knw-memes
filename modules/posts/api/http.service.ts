import { PaginationParams } from '~/types';
import { httpClient } from '~/utils/http-client';

import { PostsListResponse } from './types';

export const getPosts = async (params: PaginationParams) => {
  const { data } = await httpClient.get<PostsListResponse>('/api/posts', {
    params,
  });

  return data;
};
