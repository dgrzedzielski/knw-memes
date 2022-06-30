import { ReactNode } from 'react';

import styled from '@emotion/styled';

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CommentsSection = ({
  commentsCount,
  children,
}: {
  commentsCount: number;
  children: ReactNode;
}) => {
  return (
    <>
      <SectionHeader>
        <p>Comments Section</p>
        <p>Comments: {commentsCount}</p>
      </SectionHeader>
      {children}
    </>
  );
};
