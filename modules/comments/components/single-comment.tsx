import styled from '@emotion/styled';
import { Comment } from '../types';

const StyledContainer = styled.div`
  display: flex;
  gap: 5px;
`;

export const SingleComment = ({ author, body, createdAt }: Comment) => {
  return (
    <StyledContainer>
      <div>
        <img width={30} height={30} src={author.avatarUrl} />
      </div>
      <div>
        <div>
          Author: {author.name} {createdAt}
        </div>
        <div>{body}</div>
      </div>
    </StyledContainer>
  );
};
