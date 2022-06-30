export interface Post {
  id: string;
  createdAt: string;
  authorNick: string;
  title: string;
  description: string;
  imageUrl: string;
  likesCount: number;
}

export interface Comment {
  id: number;
  author: string;
  body: string;
}

export interface AddCommentPayload extends Omit<Comment, 'id'> {
  postId: string;
}
