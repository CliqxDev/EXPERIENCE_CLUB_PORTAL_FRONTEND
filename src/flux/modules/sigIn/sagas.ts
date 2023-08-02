/* eslint-disable import/no-anonymous-default-export */
import { AxiosError } from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';

import { sigIn } from './actions';
import { login } from './service';
import { SigInResponse } from './types';

type Response = {
  data: SigInResponse;
};

function* sigInSaga({ payload }: ReturnType<typeof sigIn.request>): Generator {
  try {
    const response: Response = (yield call(login, payload)) as Response;
    yield put(sigIn.success(response.data));
  } catch (err) {
    const errors = err as Error | AxiosError;
    yield put(sigIn.failure(errors));
  }
}

export default [takeEvery(sigIn.request, sigInSaga)];
