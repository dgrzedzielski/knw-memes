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

export interface Comment {
  id: number;
  author: string;
  body: string;
}
