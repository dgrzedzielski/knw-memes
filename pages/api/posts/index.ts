import type { NextApiRequest, NextApiResponse } from 'next';

import { withLastResortErrorHandler } from '~/middleware/with-last-resort-error-handler';
import { withMethodsGuard } from '~/middleware/with-methods-guard';
import { PaginationParams } from '~/types';
import { prisma } from '~/utils/prisma-client';

import { CreatePostPayload } from 'modules/posts/api/types';

const FIRST_PAGE = 1;
const DEFAULT_PER_PAGE = 20;

const getPosts = async ({ page, perPage }: PaginationParams) => {
  const posts = await prisma.post.findMany({
    skip: (page - FIRST_PAGE) * perPage,
    take: perPage,
    include: {
      author: true,
      comments: true,
      reactions: true,
    },
  });

  return posts.map(
    ({ id, createdAt, author, title, description, imageUrl, comments }) => ({
      id,
      createdAt,
      authorNick: author?.name || 'unknown',
      title,
      description,
      imageUrl,
      commentsCount: comments.length,
    })
  );
};

const getPostsTotalCount = async () => {
  return prisma.post.count();
};

const createPost = async (data: CreatePostPayload) => {
  return prisma.post.create({
    data,
  });
};

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { query } = req;

    const page = +query.page || FIRST_PAGE;
    const perPage = +query.perPage || DEFAULT_PER_PAGE;

    const [posts, total] = await Promise.all([
      getPosts({
        page,
        perPage,
      }),
      getPostsTotalCount(),
    ]);

    res.status(200).json({ posts, total });
  }

  if (req.method === 'POST') {
    const post = await createPost(req.body);

    res.status(200).json({ post });
  }
}

export default withMethodsGuard(
  withLastResortErrorHandler(handler),
  'GET',
  'POST'
);
