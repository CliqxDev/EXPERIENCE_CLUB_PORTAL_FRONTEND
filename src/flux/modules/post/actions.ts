import { createAsyncAction } from 'typesafe-actions';

import { AxiosError } from 'axios';
import { CategoryStore, MediaResponse, PostResponse } from './types';

export const posts = createAsyncAction(
  'POSTS_REQUEST',
  'POSTS_SUCCESS',
  'POSTS_ERROR'
)<undefined, PostResponse, Error | AxiosError>();

export const media = createAsyncAction(
  'MEDIA_REQUEST',
  'MEDIA_SUCCESS',
  'MEDIA_ERROR'
)<number, MediaResponse, Error | AxiosError>();

export const category = createAsyncAction(
  'CATEGORY_REQUEST',
  'CATEGORY_SUCCESS',
  'CATEGORY_ERROR'
)<undefined, CategoryStore, Error | AxiosError>();
