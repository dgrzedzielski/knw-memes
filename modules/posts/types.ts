export interface Post {
  id: string;
  createdAt: string;
  author: {
    name: string;
    avatar: string;
  };
  title: string;
  description: string;
  imageUrl: string;
  commentsCount: number;
  score: number;
}
