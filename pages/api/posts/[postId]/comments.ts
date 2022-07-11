import { NextApiRequest, NextApiResponse } from 'next';

import { Post } from '@prisma/client';

import { withLastResortErrorHandler } from '~/middleware/with-last-resort-error-handler';
import { withMethodsGuard } from '~/middleware/with-methods-guard';
import { getStringFromQueryParam } from '~/utils/get-string-from-query-param';
import { prisma } from '~/utils/prisma-client';

import { CreateCommentPayload } from 'modules/comments/types';

const getComments = async (id: Post['id']) => {
  const comments = await prisma.comment.findMany({
    where: {
      post: {
        id,
      },
    },
    select: {
      id: true,
      author: { select: { avatar: true, name: true } },
      content: true,
      createdAt: true,
    },
  });

  return comments;
};

const getCommentsResponse = async (id: Post['id'] | Post['id'][]) => {
  const comments = await getComments(getStringFromQueryParam(id));

  return comments.map(({ content, author, ...comment }) => ({
    body: content,
    author: {
      name: author?.name || 'unknown',
      avatarUrl: author?.avatar,
    },
    ...comment,
  }));
};

const createComment = async (data: CreateCommentPayload) => {
  return prisma.comment.create({
    data,
  });
};

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { postId },
  } = req;

  if (req.method === 'GET') {
    const comments = await getCommentsResponse(postId);

    res.status(200).json({ comments, count: comments.length });
  }

  if (req.method === 'POST') {
    const comment = await createComment(req.body);

    res.status(200).json({ comment });
  }
}

export default withMethodsGuard(withLastResortErrorHandler(handler), 'GET');
