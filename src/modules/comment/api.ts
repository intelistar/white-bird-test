import axios from 'axios';

import { BASE_API_URL } from '@/constants/api';

import type { Comment } from './types';

export const getComments = async (postId: string) => {
  const response = await axios.get<Comment[]>(
    `${BASE_API_URL}/posts/${postId}/comments`,
  );
  return response.data;
};
