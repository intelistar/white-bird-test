import type { FC } from 'react';

import Modal from '@/components/Modal';
import { useModal } from '@/hooks/useModal';

import { AddPost } from '../AddPost';
import styles from './styles.module.scss';

interface AddPostButtonProps {
  onAdd: (title: string, body: string) => void;
}

const AddPostButton: FC<AddPostButtonProps> = ({ onAdd }) => {
  const { isModalOpen, onOpenModal, onCloseModal } = useModal();

  const handleAdd = (title: string, body: string) => {
    onAdd(title, body);
    onCloseModal();
  };

  return (
    <>
      <button className={styles.button} onClick={onOpenModal}>
        Add new post
      </button>
      <Modal isOpen={isModalOpen} onClose={onCloseModal}>
        <AddPost onAdd={handleAdd} />
      </Modal>
    </>
  );
};

export default AddPostButton;
