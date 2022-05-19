import * as React from 'react';

type State<TData, TError = string> =
  | { data: TData; status: 'success' }
  | { status: 'loading' }
  | { status: 'error'; error: TError }
  | { status: 'idle' };

export const useFetch = <TData, TError = string>(
  dataFetcher: () => Promise<TData>
) => {
  const [state, setState] = React.useState<State<TData, TError>>({
    status: 'idle',
  });

  const fetchData = React.useCallback(async () => {
    setState({ status: 'loading' });

    try {
      const data = await dataFetcher();

      setState({ data, status: 'success' });
    } catch (e: any) {
      setState({ status: 'error', error: e.message });
    }
  }, [dataFetcher]);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    state,
  };
};
