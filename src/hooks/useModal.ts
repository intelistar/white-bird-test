import { useState } from 'react';

export const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onClose = () => setIsModalOpen(false);
  const onOpen = () => setIsModalOpen(true);

  return { isModalOpen, onCloseModal: onClose, onOpenModal: onOpen };
};
