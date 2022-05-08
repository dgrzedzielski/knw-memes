import * as React from 'react';
import { GlobalStyles } from '../core/styles';
import { initialize as initializeMSW, mswDecorator } from 'msw-storybook-addon';
import { ThemeWrapper } from './theme-wrapper';

const themeDecorator = story => <ThemeWrapper>
  <GlobalStyles />
  {story()}
</ThemeWrapper>

initializeMSW();

export const decorators = [mswDecorator, themeDecorator];


export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
