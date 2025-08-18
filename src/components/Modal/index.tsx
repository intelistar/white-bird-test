import { type FC, type MouseEvent, type ReactNode } from 'react';
import { createPortal } from 'react-dom';

import styles from './styles.module.scss';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: FC<Props> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const handleClose = (e: MouseEvent) => {
    if (e.target == e.currentTarget) onClose();
  };

  return createPortal(
    <article className={styles.container} onClick={handleClose}>
      <section className={styles.content}>
        {children}
        <button className={styles.close} onClick={onClose}>
          &times;
        </button>
      </section>
    </article>,
    document.getElementById('modal-root')!,
  );
};

export default Modal;
