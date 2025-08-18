import type { Post } from '../types';

export const sortPostsByPriority = (posts: Post[]) =>
  posts.sort((a, b) => b.priority - a.priority);
