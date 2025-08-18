import { Error } from '@/components/Error';
import Loader from '@/components/Loader';

import { useUsers } from '../../hooks/useUsers';
import type { EditUserType } from '../../types';
import { AdminUserCard } from '../AdminUserCard';
import styles from './styles.module.scss';

export const AdminUsersList = () => {
  const {
    users,
    loading: usersLoading,
    error: usersError,
    setUsers,
  } = useUsers();

  const handleEdit = (newUser: EditUserType) => {
    const newUsers = users.map((user) => {
      if (user.id !== newUser.id) return user;
      return { ...user, ...newUser };
    });
    setUsers(newUsers);
  };

  if (usersLoading) return <Loader />;
  if (usersError) return <Error text={usersError} />;
  return (
    <ul className={styles.list}>
      {users.map((user) => (
        <AdminUserCard key={user.id} user={user} onEdit={handleEdit} />
      ))}
    </ul>
  );
};
