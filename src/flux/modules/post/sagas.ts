import { put, takeEvery } from 'redux-saga/effects';
import { AxiosError } from 'axios';

import { forEach } from 'lodash';
import { api } from 'apis';
import { category, media, posts } from './actions';
import {
  Category,
  CategoryResponse,
  CategoryStore,
  MediaItem,
  PostResponse
} from './types';

function* postsSaga(): Generator {
  try {
    const response: any = yield api.get<PostResponse>(
      '/v2/posts?per_page=11',
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

function* categorySaga(): Generator {
  try {
    const response: CategoryResponse = yield api.get<CategoryResponse>(
      '/v2/Categories?per_page=100',
      'https://expnew.net/wp-json/wp'
    ) as CategoryResponse;

    const sanitizedResponse: CategoryStore = {};
    if (response) {
      forEach(response, (item: Category) => {
        sanitizedResponse[item.id] = item.name;
      });
    }

    yield put(category.success(sanitizedResponse));
  } catch (err) {
    const errors = err as Error;
    yield put(category.failure(errors));
  }
}

export default [
  takeEvery(posts.request, postsSaga),
  takeEvery(category.request, categorySaga),
  takeEvery(media.request, mediaSaga)
];
