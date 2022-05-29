import { QueryClient, QueryClientProvider } from 'react-query';

import type { AppProps } from 'next/app';

import { initMsw } from '~/mocks/init';
import { GlobalStyles } from '~/styles';

initMsw();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10000,
    },
  },
});

const CustomApp = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
};

export default CustomApp;
