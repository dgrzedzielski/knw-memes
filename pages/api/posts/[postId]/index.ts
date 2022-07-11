import { NextApiRequest, NextApiResponse } from 'next';

import { Post } from '@prisma/client';

import { withLastResortErrorHandler } from '~/middleware/with-last-resort-error-handler';
import { withMethodsGuard } from '~/middleware/with-methods-guard';
import { getRequiredEnv } from '~/utils/get-env';
import { getStringFromQueryParam } from '~/utils/get-string-from-query-param';
import { prisma } from '~/utils/prisma-client';
import { supabase } from '~/utils/supabase-client';

import { CreatePostPayload } from 'modules/posts/api/types';

const SKIP = 1;
const TAKE = 1;

const getPreviousPostId = async (currentPost: Post) => {
  const previous = await prisma.post.findMany({
    take: -TAKE,
    skip: SKIP,
    cursor: {
      id: currentPost.id,
    },
    select: {
      id: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return previous[0]?.id || null;
};

const getNextPostId = async (currentPost: Post) => {
  const next = await prisma.post.findMany({
    take: TAKE,
    skip: SKIP,
    cursor: {
      id: currentPost.id,
    },
    select: {
      id: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return next[0]?.id || null;
};

// how should we return likesCount?
const getPost = async (id: Post['id']) => {
  const post = await prisma.post.findUnique({
    where: { id },
    include: {
      author: { select: { name: true } },
      comments: true,
    },
  });

  return post;
};

const getPostResponse = async (id: Post['id'] | Post['id'][]) => {
  const post = await getPost(getStringFromQueryParam(id));

  if (!post) {
    return null;
  }

  const { author, comments, ...restOfPost } = post;

  return {
    post: {
      authorNick: author?.name || 'unknown',
      commentsCount: comments.length,
      ...restOfPost,
    },
    pagination: {
      currentId: post.id,
      previousId: await getPreviousPostId(post),
      nextId: await getNextPostId(post),
    },
  };
};

const updatePost = async (
  id: Post['id'] | Post['id'][],
  data: CreatePostPayload
) => {
  return prisma.post.update({
    where: { id: getStringFromQueryParam(id) },
    data,
  });
};

const deletePost = async (id: Post['id'] | Post['id'][]) => {
  const post = await prisma.post.delete({
    where: {
      id: getStringFromQueryParam(id),
    },
  });

  if (post.imageUrl) {
    const bucketName = getRequiredEnv('SUPABASE_BUCKET');

    const path = post.imageUrl.split(`${bucketName}/`)?.[1];
    await supabase.storage.from(bucketName).remove([path]);
  }
};

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { postId },
  } = req;

  if (req.method === 'GET') {
    const postResponse = await getPostResponse(postId);

    res.status(200).json(postResponse);
  }

  if (req.method === 'PUT') {
    const updatedPost = await updatePost(postId, req.body);

    res.status(200).json(updatedPost);
  }

  if (req.method === 'DELETE') {
    const post = await deletePost(postId);

    res.status(200).json(post);
  }
}

export default withMethodsGuard(
  withLastResortErrorHandler(handler),
  'GET',
  'PUT',
  'DELETE'
);
