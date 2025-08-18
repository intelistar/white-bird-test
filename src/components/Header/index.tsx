import { NavLink } from 'react-router';

import { HEADER_LINKS } from '@/constants/headerLinks';
import { ROUTES } from '@/constants/routes';

import bookMarkIcon from '../../../public/bookmark-filled.png';
import styles from './styles.module.scss';

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.wrapper}>
        <ul className={styles.list}>
          {HEADER_LINKS.map(({ title, route }) => (
            <NavLink
              key={title}
              to={route}
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
            >
              {title}
            </NavLink>
          ))}
        </ul>
        <NavLink to={ROUTES.FAVOURITES}>
          <img
            src={bookMarkIcon}
            alt="favourites icon"
            className={styles.icon}
          />
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
