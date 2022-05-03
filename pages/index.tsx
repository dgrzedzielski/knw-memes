import type { NextPage } from 'next';

import * as React from 'react';

import { Heading } from 'core/components/atoms/typography';

import { httpClient } from '../core/utils/http-client';

const Home: NextPage = () => {
  React.useEffect(() => {
    httpClient
      .get('/api/posts')
      .then((data) => console.log(data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div>
      <Heading level={1}>Heading 1</Heading>
      <Heading level={2}>Heading 2</Heading>
      <Heading level={3}>Heading 3</Heading>
      <Heading level={4}>Heading 4</Heading>
      <Heading level={5}>Heading 5</Heading>
      <Heading level={6}>Heading 6</Heading>
    </div>
  );
};

export default Home;
