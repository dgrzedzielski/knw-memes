import { rest } from 'msw';

import { PostsListResponse } from 'modules/posts/api/types';

export const postsHandlers = [
  rest.get<never, never, PostsListResponse>('/api/posts', (req, res, ctx) => {
    return res(
      ctx.json({
        posts: [
          {
            id: '1234-1234-1234',
            authorId: '1234',
            createdAt: new Date().toISOString(),
            description: 'Lorem ipsum dolor sit amet',
            imageUrl: 'https://via.placeholder.com/150',
            title: 'Lorem ipsum',
          },
        ],
        total: 1,
      })
    );
  }),
];
