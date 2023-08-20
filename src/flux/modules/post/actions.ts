import { createAsyncAction } from 'typesafe-actions';

import { AxiosError } from 'axios';
import { PostResponse } from './types';

export const posts = createAsyncAction(
  'POSTS_REQUEST',
  'POSTS_SUCCESS',
  'POSTS_ERROR'
)<undefined, PostResponse, Error | AxiosError>();
