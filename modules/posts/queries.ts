import { Post } from './types';

export const postsQueryKeys = {
  all: ['posts'],
  list: (params: unknown) => [...postsQueryKeys.all, 'list', params], // @todo: be more specific, maybe remove params if this will be only pagination params
  single: (id: Post['id']) => [...postsQueryKeys.all, 'single', id],
};
