import {
  commentsHandlers,
  postsHandlers,
} from 'modules/posts/api/mock-handlers';

export const allHandlers = [...postsHandlers, ...commentsHandlers];
