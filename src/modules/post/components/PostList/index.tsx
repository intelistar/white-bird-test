import type { FC } from 'react';

import type { ReactionStatus } from '@/types/like';

import type { Post } from '../../types';
import PostComponent from '../PostCard';
import styles from './styles.module.scss';

const NO_POSTS_TEXT = 'No posts';

interface PostListProps {
  posts: Post[];
  onReactionChange: (id: number) => (reaction: ReactionStatus) => void;
  noPostsText?: string;
  onDelete: (id: number) => void;
}

const PostList: FC<PostListProps> = ({
  posts,
  onReactionChange,
  noPostsText,
  onDelete,
}) => {
  if (!posts.length) return <p>{noPostsText || NO_POSTS_TEXT}</p>;
  return (
    <ul className={styles.list}>
      {posts.map((post) => (
        <PostComponent
          key={post.id}
          post={post}
          onReactionChange={onReactionChange(post.id)}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default PostList;
