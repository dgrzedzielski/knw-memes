import styled from '@emotion/styled';
import { FaRegComments } from 'react-icons/fa';

import { Heading, Text } from '~/components/atoms/typography';
import { UserLink } from '~/components/atoms/user-link';

import { Post } from '../types';

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
  return (
    <PostContainer>
      <Heading level={6}>{post.title}</Heading>
      <FlexDiv>
        <UserLink>{post.author.name}</UserLink>
        <span>{post.createdAt}</span>
        <FlexDiv>
          <span>{post.commentsCount}</span>
          <FaRegComments />
        </FlexDiv>
      </FlexDiv>
      <Text>{post.description}</Text>
      <img src={post.imageUrl} alt="meme-img" />
    </PostContainer>
  );
};
