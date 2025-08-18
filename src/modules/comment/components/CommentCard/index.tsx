import type { FC } from 'react';

import { UNKNOWN_USER_TEXT } from '../../constants';
import type { Comment } from '../../types';
import styles from './styles.module.scss';
interface CommentCardProps {
  comment: Comment;
}
export const CommentCard: FC<CommentCardProps> = ({ comment }) => {
  const { body, email } = comment;
  return (
    <div className={styles.card}>
      {<p className={styles.email}>{email || UNKNOWN_USER_TEXT}</p>}
      <p className={styles.body}>{body}</p>
    </div>
  );
};
