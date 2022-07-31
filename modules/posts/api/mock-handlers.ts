import { rest } from 'msw';

import { PostsListResponse } from 'modules/posts/api/types';

import { Post } from '../types';

const mockedPosts: Array<Post> = [
  {
    id: '1',
    author: {
      name: 'Łyczko w D',
      avatar: 'https://via.placeholder.com/150',
    },
    createdAt: new Date().toISOString(),
    description: 'Lorem ipsum dolor sit amet',
    imageUrl: 'https://via.placeholder.com/150',
    title: 'Lorem ipsum',
    commentsCount: 0,
    score: -2,
  },
  {
    id: '2',
    author: {
      name: 'Krystian Chryń',
      avatar: 'https://via.placeholder.com/150',
    },
    createdAt: '2022-05-27T11:06:49.420Z0',
    description: 'Why qa exist?',
    imageUrl:
      'https://user-images.githubusercontent.com/44877084/171571433-29b168f2-4549-472e-a1e2-b71900b5e98c.jpg',
    title: 'QAs not like other developers',
    commentsCount: 0,
    score: -3,
  },
  {
    id: '3',
    author: {
      name: 'Słońce po burzy',
      avatar: 'https://via.placeholder.com/150',
    },
    createdAt: '2022-05-27T11:06:49.420Z0',
    description:
      'Amber Heard broke down in tears as she returned to the witness stand in her rebuttal against Johnny Depp after his side rested their case on Thursday.\n' +
      '\n' +
      '“I am harassed, humiliated, threatened, every single day,” she said, adding that “all I want” is to “get my voice back”.',
    imageUrl: 'https://img-9gag-fun.9cache.com/photo/avADGrE_700bwp.webp',
    title: 'Amber Cry',
    commentsCount: 3,
    score: 2,
  },
  {
    id: '4',
    author: {
      name: 'Konrad BezPodwyżki',
      avatar: 'https://via.placeholder.com/150',
    },
    createdAt: '2022-05-27T11:06:49.420Z0',
    description: 'Pope Sanwitch motherfuckers',
    imageUrl:
      'https://www.wykop.pl/cdn/c3201142/comment_1653926067Yjms9z8kalr1PhTz6N6cBS.jpg',
    title: 'Polish Pope',
    commentsCount: 2,
    score: -2,
  },
];

export const postsHandlers = [
  rest.get<never, never, PostsListResponse>('/api/posts', (req, res, ctx) => {
    return res(
      ctx.json({
        posts: mockedPosts,
        total: mockedPosts.length,
      })
    );
  }),

  rest.get<never, { id: string }, { post: Post | undefined }>(
    '/api/posts/:id',
    (req, res, ctx) => {
      const post = mockedPosts.find((p) => p.id === req.params.id);
      return res(ctx.json({ post }));
    }
  ),
];
