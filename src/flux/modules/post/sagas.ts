import { put, takeEvery } from 'redux-saga/effects';
import { AxiosError } from 'axios';

import { api } from 'apis';
import {
  columnists,
  media,
  mediaById,
  postByCategories,
  postById,
  postSearch,
  posts
} from './actions';
import { ColumnistsResponse, MediaItem, PostItem, PostResponse } from './types';

function* postsSaga(): Generator {
  try {
    const response: any = yield api.get<PostResponse>(
      '/v2/posts?per_page=11',
      'https://expnew.com.br/wp-json/wp'
    );
    yield put(posts.success(response));
  } catch (err) {
    const errors = err as Error | AxiosError;
    yield put(posts.failure(errors));
  }
}

function* mediaSaga({ payload }: ReturnType<typeof media.request>): Generator {
  try {
    const response: any = yield api.get<MediaItem>(
      `/v2/media/${payload}`,
      'https://expnew.com.br/wp-json/wp'
    );

    yield put(media.success({ [payload]: response }));
  } catch (err) {
    const errors = err as Error;
    yield put(media.failure(errors));
  }
}

function* columnistsSaga(): Generator {
  try {
    const response = yield api.get<ColumnistsResponse>(
      '/v2/users?per_page=100',
      'https://expnew.com.br/wp-json/wp'
    ) as unknown as ColumnistsResponse;

    yield put(columnists.success(response as ColumnistsResponse));
  } catch (err) {
    const errors = err as Error;
    yield put(columnists.failure(errors));
  }
}

function* postByIdSaga({
  payload
}: ReturnType<typeof postById.request>): Generator {
  try {
    const response: any = yield api.get<PostItem>(
      `/v2/posts/${payload}`,
      'https://expnew.com.br/wp-json/wp'
    );

    yield put(postById.success(response));
  } catch (err) {
    const errors = err as Error;
    yield put(postById.failure(errors));
  }
}

function* mediaByIdSaga({
  payload
}: ReturnType<typeof mediaById.request>): Generator {
  try {
    const response: any = yield api.get<MediaItem>(
      `/v2/media/${payload}`,
      'https://expnew.com.br/wp-json/wp'
    );

    yield put(mediaById.success({ [payload]: response }));
  } catch (err) {
    const errors = err as Error;
    yield put(mediaById.failure(errors));
  }
}

function* postSearchSaga({
  payload
}: ReturnType<typeof postSearch.request>): Generator {
  try {
    const response: any = yield api.get<PostResponse>(
      `/v2/posts?search=${payload}&per_page=11`,
      'https://expnew.com.br/wp-json/wp'
    );
    yield put(postSearch.success(response));
  } catch (err) {
    const errors = err as Error | AxiosError;
    yield put(postSearch.failure(errors));
  }
}

function* postByCategoriesSaga({
  payload
}: ReturnType<typeof postByCategories.request>): Generator {
  try {
    const response: any = yield api.get<PostResponse>(
      `/v2/posts?categories=${payload}&per_page=11`,
      'https://expnew.com.br/wp-json/wp'
    );
    yield put(postByCategories.success(response));
  } catch (err) {
    const errors = err as Error | AxiosError;
    yield put(postByCategories.failure(errors));
  }
}

export default [
  takeEvery(posts.request, postsSaga),
  takeEvery(mediaById.request, mediaByIdSaga),
  takeEvery(columnists.request, columnistsSaga),
  takeEvery(media.request, mediaSaga),
  takeEvery(postByCategories.request, postByCategoriesSaga),
  takeEvery(postSearch.request, postSearchSaga),
  takeEvery(postById.request, postByIdSaga)
];
