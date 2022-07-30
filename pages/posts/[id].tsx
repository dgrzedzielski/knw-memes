import styled from '@emotion/styled';
import { useRouter } from 'next/router';

import { SinglePost } from 'modules/posts/componets/single-post';
import { usePost } from 'modules/posts/hooks/use-post';

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PostPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data } = usePost(id as string);

  if (!data?.post) {
    return <div>404</div>;
  }

  return (
    <StyledContainer>
      <SinglePost post={data.post} />
    </StyledContainer>
  );
};

export default PostPage;
