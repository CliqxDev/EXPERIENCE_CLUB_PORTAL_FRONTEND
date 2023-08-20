import { put, takeEvery } from 'redux-saga/effects';
import { AxiosError } from 'axios';

import { api } from 'apis';
import { posts } from './actions';
import { PostResponse } from './types';

function* postsSaga(): Generator {
  try {
    const response: any = yield api.get<PostResponse>(
      '/v2/posts',
      'https://expnew.net/wp-json/wp'
    );

    yield put(posts.success(response));
  } catch (err) {
    const errors = err as Error | AxiosError;
    yield put(posts.failure(errors));
  }
}

export default [takeEvery(posts.request, postsSaga)];
