import { type ChangeEvent, type FC, type FormEvent, useState } from 'react';

import { ALL_FILEDS_REQUIRED } from '@/constants/errors';

import type { EditUserType, User } from '../../types';
import styles from './styles.module.scss';

interface EditUserProps {
  initialUser: User;
  onSave: (user: EditUserType) => void;
}

export const EditUser: FC<EditUserProps> = ({ initialUser, onSave }) => {
  const [user, setUser] = useState<EditUserType>(initialUser);
  const [error, setError] = useState('');

  const handleChange =
    (field: keyof EditUserType) => (e: ChangeEvent<HTMLInputElement>) => {
      setUser((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!user.name.trim() || !user.email.trim()) {
      setError(ALL_FILEDS_REQUIRED);
      return;
    }

    onSave(user);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.heading}>Edit Profile</h2>

      <input
        className={styles.input}
        placeholder="Name"
        value={user.name}
        onChange={handleChange('name')}
      />

      <input
        className={styles.input}
        placeholder="Email"
        type="email"
        value={user.email}
        onChange={handleChange('email')}
      />

      <input
        className={styles.input}
        placeholder="Phone"
        type="tel"
        value={user.phone}
        onChange={handleChange('phone')}
      />

      <p className={styles.error}>{error}</p>

      <button type="submit" className={styles.button}>
        Save Changes
      </button>
    </form>
  );
};
