import { createContext } from 'react';

import type { UserContext as UserContextType } from '../types';

export const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
  loading: true,
});
