export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    city: string;
  };
  phone: string;

  website: string;
  company: {
    name: string;
  };

  isAdmin?: boolean;
}

export interface UserContext {
  user: User | null;
  setUser: (user: User | null) => void;
  loading: boolean;
}

export interface EditUserType {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export enum AdminTabs {
  USERS = 'users',
  POSTS = 'posts',
}
