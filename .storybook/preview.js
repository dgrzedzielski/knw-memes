import * as React from 'react';
import { GlobalStyles } from '../core/styles';
import { initialize as initializeMSW, mswDecorator } from 'msw-storybook-addon';
import { ThemeWrapper } from './theme-wrapper';
import { QueryClient, QueryClientProvider } from 'react-query';

const themeDecorator = (story) => (
  <ThemeWrapper>
    <GlobalStyles />
    {story()}
  </ThemeWrapper>
);

const mockedQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const queryClientDecorator = (story) => (
  <QueryClientProvider client={mockedQueryClient}>
    {story()}
  </QueryClientProvider>
);

initializeMSW();

export const decorators = [mswDecorator, queryClientDecorator, themeDecorator];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
