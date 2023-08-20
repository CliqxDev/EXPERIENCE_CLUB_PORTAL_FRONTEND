import { createAsyncAction } from 'typesafe-actions';

import { AxiosError } from 'axios';
import { PostResponse } from './types';

export const posts = createAsyncAction(
  'CLIENT_INFO_REQUEST',
  'CLIENT_INFO_SUCCESS',
  'CLIENT_INFO_ERROR'
)<undefined, PostResponse, Error | AxiosError>();
