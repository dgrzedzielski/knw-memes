import * as React from 'react';
import { useMutation, useQueryClient } from 'react-query';

import styled from '@emotion/styled';
import { FaRegComments } from 'react-icons/fa';

import { Heading, Text } from '~/components/atoms/typography';
import { UserLink } from '~/components/atoms/user-link';

import { addComment } from '../api/http.service';
import { useComments } from '../hooks/use-comments';
import { Comment, Post } from '../types';

import { CommentForm } from './comments/comment-form';
import { CommentsSection } from './comments/comments-section';
import { SingleComment } from './comments/single-comment';

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
`;

const PostContainer = styled.div`
  margin-top: 30px;
  display: flex;
  max-width: 600px;
  flex-direction: column;
  padding: 16px;
  border: var(--border-std);
  border-radius: 12px;
  background-color: var(--card-bg);
`;

export const SinglePost = ({ post }: { post: Post }) => {
  const { status, data } = useComments(post.id);
  const queryClient = useQueryClient();

  const {
    mutate: saveComment,
    data: addCommentResponse,
    status: addCommentStatus,
  } = useMutation((commentData: Omit<Comment, 'id'>) =>
    addComment({ postId: post.id, ...commentData })
  );

  React.useEffect(() => {}, [addCommentResponse]);

  const submitComment = React.useCallback(
    (commentData) => {
      saveComment(commentData, {
        onSuccess: (comment) => {
          queryClient.setQueryData(['comments', post.id], {
            comments: [...data!.comments, comment],
            count: data!.count + 1,
          });
        },
      });
    },
    [data]
  );

  if (!data?.comments) {
    return null;
  }

  return (
    <PostContainer>
      <Heading level={6}>{post.title}</Heading>
      <FlexDiv>
        <UserLink>{post.authorNick}</UserLink>
        <span>{post.createdAt}</span>
        <FlexDiv>
          <FaRegComments />
        </FlexDiv>
      </FlexDiv>
      <Text>{post.description}</Text>
      <img src={post.imageUrl} alt="meme-img" />
      <CommentsSection commentsCount={data.count}>
        {data.comments.map((commentProps) => (
          <>
            <SingleComment key={commentProps.id} {...commentProps} />
            <hr />
          </>
        ))}
        <CommentForm onSubmit={submitComment} />
      </CommentsSection>
    </PostContainer>
  );
};
