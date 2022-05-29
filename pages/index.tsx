import type { NextPage } from 'next';

import * as React from 'react';

import { usePosts } from 'modules/posts/hooks/use-posts';

const Home: NextPage = () => {
  const { page, setPage, status, data } = usePosts();

  if (status === 'success') {
    return (
      <div>
        <pre>{JSON.stringify(data, null, 2)}</pre>
        <button type="button" onClick={() => setPage((prev) => prev - 1)}>
          --
        </button>
        <span>{page}</span>
        <button type="button" onClick={() => setPage((prev) => prev + 1)}>
          ++
        </button>
      </div>
    );
  }

  return <div>Loading...</div>;
};

export default Home;
