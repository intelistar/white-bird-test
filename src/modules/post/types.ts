import type { ReactionStatus } from '@/types/like';

export interface PostResponse {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface Post extends PostResponse {
  reaction: ReactionStatus;
  priority: number;
}
