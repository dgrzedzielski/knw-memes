export interface Comment {
  id: string;
  author: {
    avatarUrl: string;
    name: string;
  };
  body: string;
  createdAt: string;
}
