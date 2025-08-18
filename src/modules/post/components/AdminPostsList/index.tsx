import { useMemo } from 'react';

import { Error } from '@/components/Error';
import Loader from '@/components/Loader';

import { usePosts } from '../../hooks/usePosts';
import { sortPostsByPriority } from '../../utils/sortPostsByPriority';
import { AdminPostCard } from '../AdminPostCard';
import styles from './styles.module.scss';

export const AdminPostsList = () => {
  const { posts, onPostsChange, loading, error } = usePosts();

  const increasePriority = (id: number) => {
    onPostsChange((prev) =>
      [...prev].map((post) =>
        post.id === id ? { ...post, priority: post?.priority + 1 } : post,
      ),
    );
  };

  const decreasePriority = (id: number) => {
    onPostsChange((prev) =>
      [...prev].map((post) =>
        post.id === id ? { ...post, priority: post.priority - 1 } : post,
      ),
    );
  };

  const sortedPosts = useMemo(() => sortPostsByPriority(posts), [posts]);

  if (loading) return <Loader />;
  if (error) return <Error text={error} />;

  return (
    <ul className={styles.list}>
      {sortedPosts.map((post) => (
        <AdminPostCard
          key={post.id}
          post={post}
          onDecreasePriority={decreasePriority}
          onIncreasePriority={increasePriority}
        />
      ))}
    </ul>
  );
};
