import type { FC } from 'react';

import type { User } from '@/modules/user';

import styles from './styles.module.scss';

interface PostsFilterProps {
  users: User[];
  selectedUserId: number | null;
  onChange: (id: number | null) => void;
}

export const PostsFilter: FC<PostsFilterProps> = ({
  users,
  selectedUserId,
  onChange,
}) => {
  return (
    <div className={styles.filter}>
      <label htmlFor="userFilter" className={styles.label}>
        Users:
      </label>
      <select
        id="userFilter"
        className={styles.select}
        value={selectedUserId ?? ''}
        onChange={(e) =>
          onChange(e.target.value ? Number(e.target.value) : null)
        }
      >
        <option value="">All</option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </div>
  );
};
