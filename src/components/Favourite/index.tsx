import { type FC, type MouseEvent, useEffect, useState } from 'react';

import { storage } from '@/utils/localeStorage';

import bookMarkIcon from '../../../public/bookmark.png';
import bookMarkFilledIcon from '../../../public/bookmark-filled.png';
import styles from './styles.module.scss';

interface FavouriteProps {
  storageKey: string;
  id: number;
}

const Favourite: FC<FavouriteProps> = ({ storageKey, id }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const stored = storage.get<number[]>(storageKey) || [];
    setIsFavorite(stored.includes(id));
  }, [storageKey, id]);

  const toggleFavorite = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const stored = storage.get<Array<number>>(storageKey) || [];

    if (stored.includes(id)) {
      storage.removeFromArray(storageKey, id);
    } else {
      storage.addToArray(storageKey, id);
    }

    setIsFavorite((prev) => !prev);
  };

  return (
    <div onClick={toggleFavorite}>
      {isFavorite ? (
        <img src={bookMarkFilledIcon} className={styles.icon} />
      ) : (
        <img src={bookMarkIcon} className={styles.icon} />
      )}
    </div>
  );
};

export default Favourite;
