/* eslint-disable import/no-anonymous-default-export */
import { AxiosError } from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';

import { clientInfo } from './actions';
import { getClientInfo } from './service';
import { ClientInfoResponse } from './types';

type Response = {
  data: ClientInfoResponse;
};

function* clientInfoSaga(): Generator {
  try {
    const response: Response = (yield call(getClientInfo)) as Response;
    yield put(clientInfo.success(response.data));
  } catch (err) {
    const errors = err as Error | AxiosError;
    yield put(clientInfo.failure(errors));
  }
}

export default [takeEvery(clientInfo.request, clientInfoSaga)];
