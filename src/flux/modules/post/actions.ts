import { createAction, createAsyncAction } from 'typesafe-actions';

import { AxiosError } from 'axios';
import {
  ColumnistsResponse,
  MediaResponse,
  PostItem,
  PostResponse
} from './types';

export const posts = createAsyncAction(
  'POSTS_REQUEST',
  'POSTS_SUCCESS',
  'POSTS_ERROR'
)<undefined, PostResponse, Error | AxiosError>();

export const postById = createAsyncAction(
  'POST_BY_ID_REQUEST',
  'POST_BY_ID_SUCCESS',
  'POST_BY_ID_ERROR'
)<string, PostItem, Error | AxiosError>();

export const mediaById = createAsyncAction(
  'MEDIA_BY_ID_REQUEST',
  'MEDIA_BY_ID_SUCCESS',
  'MEDIA_BY_ID_ERROR'
)<number, MediaResponse, Error | AxiosError>();

export const media = createAsyncAction(
  'MEDIA_REQUEST',
  'MEDIA_SUCCESS',
  'MEDIA_ERROR'
)<number, MediaResponse, Error | AxiosError>();

export const columnists = createAsyncAction(
  'COLUMNISTS_REQUEST',
  'COLUMNISTS_SUCCESS',
  'COLUMNISTS_ERROR'
)<undefined, ColumnistsResponse, Error | AxiosError>();

export const postSearch = createAsyncAction(
  'POST_SEARCH_REQUEST',
  'POST_SEARCH_SUCCESS',
  'POST_SEARCH_ERROR'
)<string, PostResponse, Error | AxiosError>();

export const clearPostById = createAction('CLEAR_POST_BY_ID')();

export const setShowShare = createAction('SET_SHOW_SHARE')<boolean>();
