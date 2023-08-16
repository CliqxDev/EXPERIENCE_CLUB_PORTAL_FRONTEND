import { AxiosError } from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
import { api } from 'apis';

import { sigIn } from './actions';
import { SigInRequest, SigInResponse } from './types';

function* sigInSaga({ payload }: ReturnType<typeof sigIn.request>): Generator {
  try {
    const response: any = yield api.post<SigInRequest, SigInResponse>(
      '/auth/token',
      payload
    );
    yield put(sigIn.success(response));
  } catch (err) {
    const errors = err as Error | AxiosError;
    yield put(sigIn.failure(errors));
  }
}

export default [takeEvery(sigIn.request, sigInSaga)];
