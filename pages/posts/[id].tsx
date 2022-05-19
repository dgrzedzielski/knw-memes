import { useRouter } from 'next/router';

const PostPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return <div>Single post: {id}</div>;
};

export default PostPage;
