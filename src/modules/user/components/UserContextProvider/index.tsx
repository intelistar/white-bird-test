import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';

import { getUsers } from '../../api';
import { UserContext } from '../../context/UserContext';
import type { User } from '../../types';

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const users = await getUsers();
        if (users.length > 0) {
          setUser({ ...users[0], isAdmin: true });
        }
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, loading }}>
      {children}
    </UserContext.Provider>
  );
};
