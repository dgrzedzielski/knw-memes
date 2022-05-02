import * as React from 'react';

import styled from '@emotion/styled';

interface BaseHeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
}

export const StyledHeading = styled.h1<BaseHeadingProps>(
  {
    color: 'var(--headings-color)',
    fontWeight: 'var(--font-weight-headings)',
  },
  (p) => ({
    fontSize: `var(--font-size-heading-${p.level})`,
  })
);

interface HeadingProps extends BaseHeadingProps {
  children: React.ReactNode;
}

export const Heading = ({ level, ...props }: HeadingProps) => (
  <StyledHeading as={`h${level}`} level={level} {...props} />
);
