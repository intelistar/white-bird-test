import { useEffect, useState } from 'react';

import { LOAD_POST_ERROR } from '@/constants/errors';

import { getPost } from '../api';
import type { PostResponse } from '../types';
import { addNeedFields } from '../utils/addNeedFields';

export const usePost = (id: string) => {
  const [post, setPost] = useState<PostResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const rawPost = await getPost(id);
        const post = addNeedFields(rawPost);
        setPost(post);
      } catch (err) {
        setError(LOAD_POST_ERROR);
        console.error(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  return { post, loading, error };
};
