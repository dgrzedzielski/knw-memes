import * as React from 'react';

import styled from '@emotion/styled';

interface CommentFormData {
  author: string;
  body: string;
}

interface CommentFormProps {
  onSubmit: (value: CommentFormData) => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
`;

const StyledSubmitButton = styled.button`
  display: block;
  background-color: antiquewhite;
  margin-top: 10px;
  width: 100px;
`;

export const CommentForm = ({ onSubmit }: CommentFormProps) => {
  const authorInputRef = React.useRef<HTMLInputElement>(null);
  const bodyInputRef = React.useRef<HTMLTextAreaElement>(null);
  const submitComment = React.useCallback(
    (event) => {
      event.preventDefault();

      if (!authorInputRef.current || !bodyInputRef.current) return;

      const {
        current: { value: commentAuthor },
      } = authorInputRef;
      const {
        current: { value: commentBody },
      } = bodyInputRef;
      onSubmit({ author: commentAuthor, body: commentBody });
      event.target.reset();
    },
    [onSubmit]
  );

  return (
    <Container>
      <form onSubmit={submitComment}>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label>
          Author:
          <input type="text" name="author" required ref={authorInputRef} />
        </label>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label>
          Comment:
          <textarea required ref={bodyInputRef} />
        </label>
        <StyledSubmitButton type="submit">Submit</StyledSubmitButton>
      </form>
    </Container>
  );
};
