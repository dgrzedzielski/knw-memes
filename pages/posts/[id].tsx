import styled from '@emotion/styled';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { SinglePost } from '../../modules/posts/componets/single-post';
import { usePost } from '../../modules/posts/hooks/use-post';
import { useComments } from '../../modules/comments/hooks/use-comments';
import { CommentsSection } from '../../modules/comments/components/comments-section';
import { SingleComment } from '../../modules/comments/components/single-comment';
import { CommentForm } from '../../modules/comments/components/comment-form';

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const PostPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: commentsData } = useComments(id as string);
  const { status, data } = usePost(id as string);

  if (!data?.post) {
    console.log(status);
    return <div>404</div>;
  }

  const addComment = (comment: { author: string; body: string }) => {
    console.log('Make api call:', comment);
  };

  return (
    <StyledContainer>
      <Link href={`${+id - 1}`}>Prev</Link>
      <StyledContent>
        <SinglePost post={data.post} />
        <CommentsSection
          comments={commentsData?.comments || []}
          commentsCount={commentsData?.count || 0}
        >
          <CommentForm onSubmit={addComment} />
        </CommentsSection>
      </StyledContent>
      <Link href={`${+id + 1}`}>Next</Link>
    </StyledContainer>
  );
};

export default PostPage;
