import { type ChangeEvent, type FC, type FormEvent, useState } from 'react';

import { ALL_FILEDS_REQUIRED } from '@/constants/errors';

import styles from './styles.module.scss';

const DEFAULT_POST = {
  title: '',
  body: '',
};

interface AddPostProps {
  onAdd: (title: string, body: string) => void;
}

export const AddPost: FC<AddPostProps> = ({ onAdd }) => {
  const [post, setPost] = useState(DEFAULT_POST);

  const [error, setError] = useState('');

  const handleChangePost =
    (field: keyof typeof post) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setPost((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!post.title.trim() || !post.body.trim()) {
      setError(ALL_FILEDS_REQUIRED);
      return;
    }

    onAdd(post.title, post.body);
    setPost(DEFAULT_POST);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.heading}>Create post</h2>

      <input
        className={styles.input}
        placeholder="Title"
        value={post.title}
        onChange={handleChangePost('title')}
      />

      <textarea
        className={styles.textarea}
        placeholder="Text"
        value={post.body}
        onChange={handleChangePost('body')}
      />

      <p className={styles.error}>{error}</p>

      <button type="submit" className={styles.button}>
        Add
      </button>
    </form>
  );
};
