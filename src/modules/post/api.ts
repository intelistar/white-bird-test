import axios from 'axios';

import { BASE_API_URL } from '@/constants/api';

import type { Post } from './types';

export const getPosts = async () => {
  const response = await axios.get<Post[]>(`${BASE_API_URL}/posts`);
  return response.data;
};

export const getPost = async (id: string) => {
  const response = await axios.get<Post>(`${BASE_API_URL}/posts/${id}`);
  return response.data;
};
