import { useState } from 'react';

import { Error } from '@/components/Error';
import Loader from '@/components/Loader';
import { useUsers } from '@/modules/user';
import { ReactionStatus } from '@/types/like';

import AddPostButton from '../../components/AddPostButton';
import PostList from '../../components/PostList';
import { PostsFilter } from '../../components/PostsFilter';
import { useFilteredPosts } from '../../hooks/useFilteredPosts';
import { usePosts } from '../../hooks/usePosts';
import type { Post } from '../../types';
import styles from './styles.module.scss';

export const PostsPage = () => {
  const {
    loading: postsLoading,
    posts,
    onPostsChange,
    error: postsError,
  } = usePosts();
  const { loading: usersLoading, users, error: usersError } = useUsers();

  const [selectedUser, setSelectedUser] = useState<number | null>(null);

  const handleReaction = (id: number) => (reaction: ReactionStatus) => {
    const newPosts = posts.map((post) => {
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

  const handleAddPost = (title: string, body: string) => {
    const newPost: Post = {
      title,
      body,
      id: Date.now(),
      reaction: ReactionStatus.NONE,
      priority: 0,
      userId: 0,
    };
    onPostsChange((prev) => [newPost, ...prev]);
  };

  const filteredPosts = useFilteredPosts(posts, selectedUser);

  if (postsLoading || usersLoading) return <Loader />;
  if (postsError || usersError)
    return <Error text={postsError || usersError} />;

  return (
    <>
      <h1 className={styles.title}>Posts</h1>

      <div className={styles.tools}>
        <PostsFilter
          selectedUserId={selectedUser}
          onChange={setSelectedUser}
          users={users}
        />
        <AddPostButton onAdd={handleAddPost} />
      </div>

      <PostList
        posts={filteredPosts}
        onReactionChange={handleReaction}
        onDelete={handleDelete}
      />
    </>
  );
};
