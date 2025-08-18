import { ReactionStatus } from '@/types/like';

import type { Post, PostResponse } from '../types';

export const addNeedFields = (post: PostResponse): Post => {
  return {
    ...post,
    priority: 0,
    reaction: ReactionStatus.NONE,
  };
};

export const addNeedFieldsToArray = (posts: PostResponse[]) => {
  return posts.map(addNeedFields);
};
