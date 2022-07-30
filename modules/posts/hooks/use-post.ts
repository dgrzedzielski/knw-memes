import { useQuery } from 'react-query';

import { getPost } from '../api/http.service';
import { postsQueryKeys } from '../queries';
import { Post } from '../types';

export const usePost = (postId: Post['id']) => {
  return useQuery(postsQueryKeys.single(postId), () => getPost(postId), {
    enabled: !!postId,
  });
};
