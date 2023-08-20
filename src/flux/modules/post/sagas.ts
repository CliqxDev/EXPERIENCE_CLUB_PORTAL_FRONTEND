import { put, takeEvery } from 'redux-saga/effects';
import { AxiosError } from 'axios';

import { api } from 'apis';
import { media, posts } from './actions';
import { MediaItem, PostResponse } from './types';

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

function* mediaSaga({ payload }: ReturnType<typeof media.request>): Generator {
  try {
    const response: any = yield api.get<MediaItem>(
      `/v2/media/${payload}`,
      'https://expnew.net/wp-json/wp'
    );

    yield put(media.success({ [payload]: response }));
  } catch (err) {
    const errors = err as Error;
    yield put(media.failure(errors));
  }
}

export default [
  takeEvery(posts.request, postsSaga),
  takeEvery(media.request, mediaSaga)
];
