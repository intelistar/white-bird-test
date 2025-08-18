import { useEffect, useState } from 'react';

import { LOAD_USERS_ERROR } from '@/constants/errors';

import { getUsers } from '../api';
import type { User } from '../types';

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const users = await getUsers();
        setUsers(users);
      } catch (err) {
        setError(LOAD_USERS_ERROR);
        console.error(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { users, loading, error, setUsers };
};
