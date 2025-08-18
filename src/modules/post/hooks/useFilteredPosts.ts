import { useMemo } from 'react';

import type { Post } from '../types';

export const useFilteredPosts = (posts: Post[], userId: number | null) => {
  return useMemo(() => {
    if (!userId) return posts;
    return posts.filter((post) => post.userId === userId);
  }, [posts, userId]);
};
