import { type ChangeEvent, type FC, useState } from 'react';

import { BODY_REQUIRED } from '@/constants/errors';

import type { CommentForm } from '../../types';
import styles from './styles.module.scss';

const DEFAULT_COMMENT_FORM = {
  email: '',
  body: '',
};

interface AddCommentFormProps {
  onSubmit: (comment: CommentForm) => void;
}

export const AddCommentForm: FC<AddCommentFormProps> = ({ onSubmit }) => {
  const [comment, setComment] = useState<CommentForm>(DEFAULT_COMMENT_FORM);
  const [error, setError] = useState('');

  const handleChange =
    (key: keyof CommentForm) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setComment((prev) => ({ ...prev, [key]: e.target.value }));
    };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment.body.trim()) {
      setError(BODY_REQUIRED);
      return;
    }

    onSubmit(comment);
    setComment(DEFAULT_COMMENT_FORM);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="email"
        placeholder="Your email"
        value={comment.email}
        onChange={handleChange('email')}
      />
      <textarea
        className={styles.textarea}
        placeholder="Your comment"
        value={comment.body}
        onChange={handleChange('body')}
      />
      <div className={styles.bottom}>
        <p className={styles.error}>{error}</p>
        <button type="submit" className={styles.button}>
          Send
        </button>
      </div>
    </form>
  );
};
