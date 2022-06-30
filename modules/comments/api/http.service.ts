import { httpClient } from '~/utils/http-client';

import { CommentsListResponse } from './types';
import { Post } from '../../posts/types';

export const getComments = async (postId: Post['id']) => {
  const { data } = await httpClient.get<CommentsListResponse>(
    `/api/posts/${postId}/comments`
  );

  return data;
};
