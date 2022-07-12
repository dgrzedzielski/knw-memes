import { useQuery } from 'react-query';

import { getPost } from '../api/http.service';

export const usePost = (postId: string) => {
  return useQuery(['postId', postId], () => getPost(postId), {
    enabled: !!postId,
  });
};
