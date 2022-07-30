import * as React from 'react';
import { useQuery } from 'react-query';

import { getPosts } from 'modules/posts/api/http.service';

import { postsQueryKeys } from '../queries';

export const usePosts = () => {
  const [page, setPage] = React.useState(1);

  const queryResult = useQuery(
    postsQueryKeys.list({ page }),
    () => getPosts({ page, perPage: 20 }),
    {
      keepPreviousData: true,
    }
  );

  return {
    page,
    setPage,
    ...queryResult,
  };
};
