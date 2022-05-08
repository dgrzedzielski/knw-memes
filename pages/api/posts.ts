import type { NextApiRequest, NextApiResponse } from 'next';

import { prisma } from 'core/utils/prisma-client';
import { CreatePostPayload } from 'modules/posts/api/types';

const getPosts = async () => {
  try {
    return await prisma.post.findMany({
      include: {
        author: true,
        reactions: true,
      },
    });
  } catch (e) {
    console.error(e);
    return null;
  }
};

const createPost = async (data: CreatePostPayload) => {
  return prisma.post.create({
    data,
  });
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const posts = await getPosts();

    res.status(200).json({ posts });
  }

  if (req.method === 'POST') {
    const post = await createPost(req.body);

    res.status(200).json({ post });
  }
}
