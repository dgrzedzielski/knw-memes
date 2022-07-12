import styled from '@emotion/styled';
import * as React from 'react';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const StyledButton = styled.button`
  background-color: aquamarine;
  width: 100px;
`;

interface FormElement extends HTMLFormControlsCollection {
  author: HTMLInputElement;
  body: HTMLTextAreaElement;
}

interface CommentFormElement extends HTMLFormElement {
  readonly elements: FormElement;
}

export const CommentForm = ({
  onSubmit,
}: {
  onSubmit: (data: { author: string; body: string }) => void;
}) => {
  const submitForm = (event: React.FormEvent<CommentFormElement>) => {
    event.preventDefault();
    const {
      currentTarget: {
        elements: { author, body },
      },
    } = event;
    onSubmit({ author: author.value, body: body.value });
  };

  return (
    <form onSubmit={submitForm}>
      <StyledContainer>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="author">Author</label>
        <input id="author" required type="text" />
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="body">Comment</label>
        <textarea id="body" required />
        <StyledButton type="submit">Submit</StyledButton>
      </StyledContainer>
    </form>
  );
};
