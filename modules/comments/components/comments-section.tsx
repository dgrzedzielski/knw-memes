import * as React from 'react';
import { Comment } from '../types';
import { SingleComment } from './single-comment';

export const CommentsSection = ({
  children,
  comments,
  commentsCount,
}: {
  children: React.ReactNode;
  comments: Comment[];
  commentsCount: number;
}) => {
  return (
    <>
      <div>Comments</div>
      {comments.map((comment) => (
        <SingleComment key={comment.id} {...comment} />
      ))}
      {children}
    </>
  );
};
