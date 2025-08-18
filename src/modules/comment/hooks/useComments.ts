import { useEffect, useState } from 'react';

import { LOAD_COMMENTS_ERROR } from '@/constants/errors';

import { getComments } from '../api';
import type { Comment, CommentForm } from '../types';

export const useComments = (postId: string) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const comments = await getComments(postId);
        setComments(comments);
      } catch (err) {
        setError(LOAD_COMMENTS_ERROR);
        console.error(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [postId]);

  const addComment = (comment: CommentForm) => {
    const newComment = {
      id: Date.now(),
      postId: Number(postId),
      ...comment,
    };
    setComments((prev) => [newComment, ...prev]);
  };

  return { comments, loading, error, addComment };
};
