import type { FC } from 'react';

import type { Post } from '../../types';
import styles from './styles.module.scss';

interface AdminPostCardProps {
  post: Post;
  onIncreasePriority: (id: number) => void;
  onDecreasePriority: (id: number) => void;
}

export const AdminPostCard: FC<AdminPostCardProps> = ({
  post,
  onIncreasePriority,
  onDecreasePriority,
}) => {
  const { id, title, priority } = post;
  const handleIncreasePriority = () => onIncreasePriority(id);
  const handleDecreasePriority = () => onDecreasePriority(id);

  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.priority}>
          Priority: <span className={styles.priorityValue}>{priority}</span>
        </p>
      </div>

      <div className={styles.actions}>
        <button className={styles.increase} onClick={handleIncreasePriority}>
          ⬆️
        </button>
        <button className={styles.decrease} onClick={handleDecreasePriority}>
          ⬇️
        </button>
      </div>
    </div>
  );
};
