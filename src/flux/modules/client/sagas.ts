/* eslint-disable import/no-anonymous-default-export */
import { AxiosError } from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';

import { assignNewsletter, clientInfo, createClient } from './actions';
import { getClientInfo, postAssignNewsletter, postClient } from './service';
import {
  AssignNewsletterResponse,
  ClientInfoResponse,
  ClientPersonalDataResponse
} from './types';

type ClientInfoResponseAPI = {
  data: ClientInfoResponse;
};

type ClientPersonalDataResponseAPI = {
  data: ClientPersonalDataResponse;
};

type AssignNewsletterResponseAPI = {
  data: AssignNewsletterResponse;
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

function* assignNewsletterSaga({
  payload
}: ReturnType<typeof assignNewsletter.request>): Generator {
  try {
    const response: AssignNewsletterResponseAPI = (yield call(
      postAssignNewsletter,
      payload
    )) as AssignNewsletterResponseAPI;
    yield put(assignNewsletter.success(response.data));
  } catch (err) {
    const errors = err as Error | AxiosError;
    yield put(assignNewsletter.failure(errors));
  }
}
export default [
  takeEvery(clientInfo.request, clientInfoSaga),
  takeEvery(assignNewsletter.request, assignNewsletterSaga),
  takeEvery(createClient.request, createClientSaga)
];
