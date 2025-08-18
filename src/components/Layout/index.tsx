import { Outlet } from 'react-router';

import Header from '../Header';
import styles from './styles.module.scss';

const Layout = () => {
  return (
    <section>
      <Header />
      <div className={styles.wrapper}>
        <Outlet />
      </div>
    </section>
  );
};

export default Layout;
