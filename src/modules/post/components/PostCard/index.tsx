import type { FC, MouseEvent } from 'react';
import { useNavigate } from 'react-router';

import Favourite from '@/components/Favourite';
import Reaction from '@/components/Reaction';
import type { ReactionStatus } from '@/types/like';

import deleteIcon from '../../../../../public/delete.png';
import type { Post } from '../../types';
import styles from './styles.module.scss';

interface PostComponentProps {
  post: Post;
  onReactionChange: (reaction: ReactionStatus) => void;
  onDelete: (id: number) => void;
}

const PostComponent: FC<PostComponentProps> = ({
  post,
  onReactionChange,
  onDelete,
}) => {
  const { title, body, id, reaction } = post;
  const navigate = useNavigate();

  const handleNavigate = () => navigate(`/posts/${id}`);
  const handleDelete = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onDelete(id);
  };

  return (
    <div className={styles.container} onClick={handleNavigate}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.body}>{body}</p>

      <button onClick={handleDelete} className={styles.delete}>
        <img src={deleteIcon} alt="delete icon" className={styles.deleteIcon} />
      </button>

      <div className={styles.reaction}>
        <Reaction reaction={reaction} onChange={onReactionChange} />
      </div>
      <div className={styles.favourite}>
        <Favourite storageKey="posts" id={id} />
      </div>
    </div>
  );
};

export default PostComponent;
