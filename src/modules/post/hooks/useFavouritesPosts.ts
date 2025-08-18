import { useEffect, useState } from 'react';

import { storage } from '@/utils/localeStorage';

import { usePosts } from './usePosts';

export const useFavouritesPosts = () => {
  const [favouritesIds, setFavouritesIds] = useState<number[]>([]);
  const { posts, onPostsChange, loading, error } = usePosts();

  useEffect(() => {
    const stored = storage.get<number[]>('posts') || [];
    setFavouritesIds(stored);
  }, []);

  const favouritePosts = posts.filter((p) => favouritesIds.includes(p.id));

  return { favourites: favouritePosts, onPostsChange, error, loading };
};
