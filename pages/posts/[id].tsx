import styled from '@emotion/styled';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { SinglePost } from '../../modules/posts/componets/single-post';
import { usePost } from '../../modules/posts/hooks/use-post';

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PostPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { status, data } = usePost(id as string);

  if (!data?.post) {
    console.log(status);
    return <div>404</div>;
  }

  return (
    <StyledContainer>
      <Link href={`${+id - 1}`}>Prev</Link>
      <SinglePost post={data.post} />
      <Link href={`${+id + 1}`}>Next</Link>
    </StyledContainer>
  );
};

export default PostPage;
