import { useEffect, useState } from 'react';

import { LOAD_POSTS_ERROR } from '@/constants/errors';

import { getPosts } from '../api';
import type { Post } from '../types';
import { addNeedFieldsToArray } from '../utils/addNeedFields';

export const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const rawPosts = await getPosts();
        const posts = addNeedFieldsToArray(rawPosts);
        setPosts(posts);
      } catch (err) {
        setError(LOAD_POSTS_ERROR);
        console.error(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { posts, loading, error, onPostsChange: setPosts };
};
