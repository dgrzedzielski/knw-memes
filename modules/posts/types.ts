export interface Post {
  id: string;
  createdAt: string;
  authorNick: string;
  title: string;
  description: string;
  imageUrl: string;
  commentsCount: number;
  likesCount: number;
}
