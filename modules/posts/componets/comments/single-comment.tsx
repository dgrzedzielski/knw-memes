import styled from '@emotion/styled';

import { Comment } from '../../types';

const StyledContainer = styled.div`
  padding: 10px 0;
`;

export const SingleComment = ({ author, body }: Comment) => {
  return (
    <StyledContainer>
      <p>
        <u>Author</u>: {author}
      </p>
      <p>
        <u>Body</u>: {body}
      </p>
    </StyledContainer>
  );
};
