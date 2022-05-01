import { css } from '@emotion/react';

export const lightTheme = css`
  body[data-theme='light'] {
    --white: hsl(0, 0%, 100%);
    --grey-5: hsl(204, 15%, 94%);
    --grey-10: hsl(198, 16%, 84%);
    --grey-20: hsl(200, 15%, 73%);
    --grey-30: hsl(200, 16%, 62%);
    --grey-40: hsl(200, 15%, 54%);
    --grey-50: hsl(200, 18%, 46%);
    --grey-60: hsl(199, 18%, 40%);
    --grey-70: hsl(199, 18%, 33%);
    --grey-80: hsl(200, 18%, 26%);
    --grey-90: hsl(200, 19%, 18%);
    --black: hsl(0, 0%, 0%);

    --blue-light: hsl(215, 100%, 69%);
    --blue-main: hsl(210, 79%, 46%);
    --blue-dark: hsl(212, 100%, 31%);

    --purple-light: hsl(266, 100%, 74%);
    --purple-main: hsl(256, 100%, 65%);
    --purple-dark: hsl(252, 75%, 45%);

    --green-light: hsl(123, 38%, 64%);
    --green-main: hsl(123, 38%, 57%);
    --green-dark: hsl(123, 43%, 39%);

    --red-light: hsl(0, 69%, 67%);
    --red-main: hsl(4, 90%, 58%);
    --red-dark: hsl(0, 65%, 51%);

    --orange-light: hsl(36, 100%, 65%);
    --orange-main: hsl(36, 100%, 57%);
    --orange-dark: hsl(30, 100%, 48%);

    --body-bg: var(--grey-5);
    --card-bg: var(--white);
    --comments-bg: var(--white);

    --border-color: var(--grey-10);
    --border-main: 1px solid var(--border-color);

    --body-font-color: var(--grey-90);
    --headings-color: var(--black);
  }
`;
