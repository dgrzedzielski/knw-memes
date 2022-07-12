import { useQuery } from 'react-query';
import { Post } from '../../posts/types';
import { getComments } from '../api/http.service';

export const useComments = (postId: Post['id']) => {
  return useQuery(['posts', postId, 'comments'], () => getComments(postId), {
    enabled: !!postId,
  });
};
