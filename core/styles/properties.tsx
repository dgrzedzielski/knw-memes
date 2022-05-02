import { css } from '@emotion/react';

import { getRem } from 'core/styles/utils';

export const propertiesStyles = css`
  :root {
    --font-family-base: -apple-system, BlinkMacSystemFont, segoe ui, avenir next,
      avenir, helvetica neue, helvetica, Ubuntu, tahoma, roboto, noto, arial,
      sans-serif;

    --font-weight-headings: 600;
    --font-size-heading-1: clamp(2.67rem, 2.07rem + 3vw, 4.21rem);
    --font-size-heading-2: clamp(2.14rem, 1.74rem + 1.99vw, 3.16rem);
    --font-size-heading-3: clamp(1.71rem, 1.45rem + 1.29vw, 2.37rem);
    --font-size-heading-4: clamp(1.4rem, 1.3rem + 0.8vw, 2rem);
    --font-size-heading-5: clamp(1.25rem, 1.15rem + 0.5vw, 1.65rem);
    --font-size-heading-6: clamp(1.09rem, 1rem + 0.4vw, 1.35rem);
    --font-size-base: ${getRem(18)};
    --font-size-sub: ${getRem(16)};
    --font-size-small: ${getRem(14)};
    --font-size-smaller: ${getRem(12)};
    --font-size-button: ${getRem(14)};
    --font-size-label: ${getRem(16)};
  }
`;
