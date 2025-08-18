export interface Comment {
  postId: number;
  id: number;
  email?: string;
  body: string;
}

export interface CommentForm {
  email: string;
  body: string;
}
