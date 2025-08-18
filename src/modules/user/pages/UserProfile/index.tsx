import { useNavigate } from 'react-router';

import Modal from '@/components/Modal';
import { USER_NOT_FOUND } from '@/constants/errors';
import { ROUTES } from '@/constants/routes';
import { useModal } from '@/hooks/useModal';

import { EditUser } from '../../components/EditUser';
import { useCurrentUser } from '../../hooks/useCurrentUser';
import type { EditUserType } from '../../types';
import styles from './styles.module.scss';

export const UserProfile = () => {
  const { user, setUser } = useCurrentUser();
  const navigate = useNavigate();

  const { isModalOpen, onCloseModal, onOpenModal } = useModal();

  if (!user) {
    return <div className={styles.container}>{USER_NOT_FOUND}</div>;
  }

  const handleEdit = () => onOpenModal();

  const handleSave = (newUser: EditUserType) => {
    setUser({ ...user, ...newUser });
    onCloseModal();
  };

  const handleOpenAdminPanel = () => navigate(ROUTES.ADMIN_PANEL);

  return (
    <>
      <main className={styles.container}>
        <header className={styles.header}>
          <div className={styles.avatar}>
            <span>{user.name.charAt(0)}</span>
          </div>
          <div>
            <h1 className={styles.name}>{user.name}</h1>
            <p className={styles.username}>@{user.username}</p>
          </div>
        </header>

        <section className={styles.details}>
          <h2 className={styles.sectionTitle}>Profile Information</h2>
          <ul>
            <li>
              <strong>Email:</strong> {user.email}
            </li>
            <li>
              <strong>Phone:</strong> {user.phone}
            </li>
            <li>
              <strong>Website:</strong> {user.website}
            </li>
            <li>
              <strong>Company:</strong> {user.company.name}
            </li>
            <li>
              <strong>Address:</strong> {user.address.street},{' '}
              {user.address.city}
            </li>
            <li>
              <strong>Role:</strong> {user.isAdmin ? 'Admin' : 'User'}
            </li>
          </ul>
        </section>

        <footer className={styles.actions}>
          <button className={styles.editBtn} onClick={handleEdit}>
            Edit Profile
          </button>
          {user.isAdmin && (
            <button className={styles.adminBtn} onClick={handleOpenAdminPanel}>
              Admin Panel
            </button>
          )}
        </footer>
      </main>
      <Modal isOpen={isModalOpen} onClose={onCloseModal}>
        <EditUser initialUser={user} onSave={handleSave} />
      </Modal>
    </>
  );
};
