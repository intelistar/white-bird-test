import type { FC, MouseEvent } from 'react';

import { ReactionStatus } from '@/types/like';

import dislike from './../../../public/dislike.png';
import dislikeFilled from './../../../public/dislike-filled.png';
import like from './../../../public/like.png';
import likeFilled from './../../../public/like-filled.png';
import styles from './styles.module.scss';

interface ReactionProps {
  reaction: ReactionStatus;
  onChange: (reaction: ReactionStatus) => void;
}

const Reaction: FC<ReactionProps> = ({ reaction, onChange }) => {
  const handleChange =
    (reaction: ReactionStatus) => (e: MouseEvent<HTMLImageElement>) => {
      e.stopPropagation();
      onChange(reaction);
    };

  return (
    <div className={styles.container}>
      {reaction === ReactionStatus.LIKE ? (
        <img
          src={likeFilled}
          alt="filled like icon"
          className={styles.icon}
          onClick={handleChange(ReactionStatus.NONE)}
        />
      ) : (
        <img
          src={like}
          alt="like icon"
          className={styles.icon}
          onClick={handleChange(ReactionStatus.LIKE)}
        />
      )}
      {reaction === ReactionStatus.DISLIKE ? (
        <img
          src={dislikeFilled}
          alt="filled dislike icon"
          className={styles.icon}
          onClick={handleChange(ReactionStatus.NONE)}
        />
      ) : (
        <img
          src={dislike}
          alt="dislike icon"
          className={styles.icon}
          onClick={handleChange(ReactionStatus.DISLIKE)}
        />
      )}
    </div>
  );
};

export default Reaction;
