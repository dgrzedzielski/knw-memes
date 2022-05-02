import { css } from '@emotion/react';

export const darkTheme = css`
  [data-theme='dark'] {
    --grey-95: hsla(220, 26%, 15%, 1);
    --grey-90: hsla(220, 26%, 18%, 1);
    --grey-85: hsla(221, 25%, 22%, 1);
    --grey-80: hsla(220, 25%, 26%, 1);
    --grey-70: hsla(220, 25%, 33%, 1);
    --grey-60: hsla(220, 20%, 40%, 1);
    --grey-50: hsla(220, 25%, 48%, 1);
    --grey-40: hsla(220, 23%, 54%, 1);
    --grey-30: hsla(220, 23%, 62%, 1);
    --grey-20: hsla(220, 22%, 73%, 1);
    --grey-10: hsla(218, 23%, 84%, 1);
    --grey-5: hsla(223, 22%, 94%, 1);

    --gradient-7: linear-gradient(
      147deg,
      hsl(184, 71%, 68%) 7%,
      hsl(216, 100%, 48%) 93%
    );

    --white: hsl(0, 0%, 100%);
    --black: hsl(0, 0%, 0%);

    --green-old: hsla(126, 94%, 73%, 1);
    --green-main: hsla(156, 67%, 46%, 1);
    --green-darker: hsla(156, 78%, 16%, 1);

    --red-main: hsla(350, 100%, 68%, 1);
    --red-darker: hsla(350, 60%, 14%, 1);

    --blue-main: hsla(202, 100%, 50%, 1);

    --body-font-color: var(--grey-10);
    --headings-color: var(--white);

    --body-bg: var(--grey-95);
    --card-bg: var(--grey-90);
    --comments-bg: var(--grey-90);

    --border-color: var(--grey-60);
    --border-color-darker: var(--grey-70);
    --border-std: 1px solid var(--border-color);
  }
`;
