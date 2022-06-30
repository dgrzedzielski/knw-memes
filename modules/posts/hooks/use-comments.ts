import { useQuery } from 'react-query';

import { getComments } from 'modules/posts/api/http.service';

import { Post } from '../types';

export const useComments = (postId: Post['id']) => {
  const queryResult = useQuery(
    ['comments', postId],
    () => getComments(postId),
    {
      keepPreviousData: false,
    }
  );

  return {
    ...queryResult,
  };
};
