import type { FC } from 'react';

import { DEFAULT_ERROR_TEXT } from '@/constants/errors';

import styles from './styles.module.scss';

interface ErrorProps {
  text?: string | null;
}

export const Error: FC<ErrorProps> = ({ text }) => {
  return <p className={styles.error}>{text || DEFAULT_ERROR_TEXT}</p>;
};
