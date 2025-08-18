import axios from 'axios';

import { BASE_API_URL } from '@/constants/api';

import type { User } from './types';

export const getUsers = async () => {
  const response = await axios.get<User[]>(`${BASE_API_URL}/users`);
  return response.data;
};
