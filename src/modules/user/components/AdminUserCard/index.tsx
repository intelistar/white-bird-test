import type { FC } from 'react';

import Modal from '@/components/Modal';
import { useModal } from '@/hooks/useModal';

import editIcon from '../../../../../public/edit.png';
import type { EditUserType, User } from '../../types';
import { EditUser } from '../EditUser';
import styles from './styles.module.scss';

interface AdminUserCardProps {
  user: User;
  onEdit: (user: EditUserType) => void;
}
export const AdminUserCard: FC<AdminUserCardProps> = ({ user, onEdit }) => {
  const { isModalOpen, onCloseModal, onOpenModal } = useModal();
  const { name, email, phone } = user;

  const handleOpenEdit = () => onOpenModal();

  const handleEdit = (newUser: EditUserType) => {
    onEdit(newUser);
    onCloseModal();
  };
  return (
    <>
      <div className={styles.card}>
        <div className={styles.info}>
          <h3 className={styles.name}>{name}</h3>
          <p className={styles.username}>{email}</p>
          <p className={styles.username}>{phone}</p>
        </div>
        <button className={styles.editButton} onClick={handleOpenEdit}>
          <img src={editIcon} alt="edit icon" className={styles.icon} />
        </button>
      </div>
      <Modal isOpen={isModalOpen} onClose={onCloseModal}>
        <EditUser initialUser={user} onSave={handleEdit} />
      </Modal>
    </>
  );
};
