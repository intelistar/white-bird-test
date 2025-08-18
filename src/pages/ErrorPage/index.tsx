import { Link } from 'react-router';

import { ROUTES } from '@/constants/routes';

import styles from './styles.module.scss';

export const ErrorPage = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>404 | Page not found</h1>
      <Link to={ROUTES.ROOT} className={styles.link}>
        GO TO HOME
      </Link>
    </section>
  );
};
