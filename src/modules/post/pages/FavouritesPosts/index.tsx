import Loader from '@/components/Loader';
import type { ReactionStatus } from '@/types/like';

import PostList from '../../components/PostList';
import { NO_FAVOURITES_POSTS_TEXT } from '../../constants';
import { useFavouritesPosts } from '../../hooks/useFavouritesPosts';
import styles from './styles.module.scss';

export const FavouritesPostsPage = () => {
  const { favourites, onPostsChange, loading } = useFavouritesPosts();

  const handleReaction = (id: number) => (reaction: ReactionStatus) => {
    const newPosts = favourites.map((post) => {
      if (id === post.id) {
        return {
          ...post,
          reaction,
        };
      } else return post;
    });
    onPostsChange(newPosts);
  };

  const handleDelete = (postId: number) => {
    onPostsChange((prev) => prev.filter(({ id }) => id !== postId));
  };

  if (loading) return <Loader />;

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Favourites posts</h1>
      <PostList
        posts={favourites}
        onReactionChange={handleReaction}
        noPostsText={NO_FAVOURITES_POSTS_TEXT}
        onDelete={handleDelete}
      />
    </section>
  );
};
