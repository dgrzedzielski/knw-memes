export interface Post {
  id: string;
  createdAt: string;
  authorNick: string;
  title: string;
  description: string;
  imageUrl: string;
  commentsCount: number;
  likesCount?: number;
}

export interface Pagination {
  currentId: string;
  previousId: string;
  nextId: string;
}

export interface PostResponse {
  post: Post;
  pagination: Pagination;
}
