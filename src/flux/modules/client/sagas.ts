/* eslint-disable import/no-anonymous-default-export */
import { AxiosError } from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';

import { clientInfo, createClient } from './actions';
import { getClientInfo, postClient } from './service';
import { ClientInfoResponse, ClientPersonalDataResponse } from './types';

type ClientInfoResponseAPI = {
  data: ClientInfoResponse;
};

type ClientPersonalDataResponseAPI = {
  data: ClientPersonalDataResponse;
};

function* clientInfoSaga(): Generator {
  try {
    const response: ClientInfoResponseAPI = (yield call(
      getClientInfo
    )) as ClientInfoResponseAPI;
    yield put(clientInfo.success(response.data));
  } catch (err) {
    const errors = err as Error | AxiosError;
    yield put(clientInfo.failure(errors));
  }
}

function* createClientSaga({
  payload
}: ReturnType<typeof createClient.request>): Generator {
  try {
    const response: ClientPersonalDataResponseAPI = (yield call(
      postClient,
      payload
    )) as ClientPersonalDataResponseAPI;
    debugger;
    yield put(createClient.success(response.data));
  } catch (err) {
    const errors = err as Error | AxiosError;
    yield put(createClient.failure(errors));
  }
}
export default [
  takeEvery(clientInfo.request, clientInfoSaga),
  takeEvery(createClient.request, createClientSaga)
];
