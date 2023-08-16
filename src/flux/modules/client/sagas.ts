import { put, takeEvery } from 'redux-saga/effects';
import { api } from 'apis';

import { assignNewsletter, clientInfo, createClient } from './actions';
import {
  AssignNewsletterRequest,
  ClientInfoResponse,
  ClientPersonalDataResponse,
  ClientPersonalDataPayload
} from './types';

type ClientInfoResponseAPI = {
  data: ClientInfoResponse;
};

type ClientPersonalDataResponseAPI = {
  data: ClientPersonalDataResponse;
};

function* clientInfoSaga(): Generator {
  try {
    const response: any = yield api.get<ClientInfoResponseAPI>('/auth/me');

    yield put(clientInfo.success(response));
  } catch (err) {
    const errors = err as Error;
    yield put(clientInfo.failure(errors));
  }
}

function* createClientSaga({
  payload
}: ReturnType<typeof createClient.request>): Generator {
  try {
    const response: any = yield api.post<
      ClientPersonalDataPayload,
      ClientPersonalDataResponseAPI
    >('/users/', payload);

    yield put(createClient.success(response));
  } catch (err) {
    const errors = err as Error;
    yield put(createClient.failure(errors));
  }
}

function* assignNewsletterSaga({
  payload
}: ReturnType<typeof assignNewsletter.request>): Generator {
  try {
    yield api.post<AssignNewsletterRequest, undefined>('/newsletter/', payload);
    yield put(assignNewsletter.success());
  } catch (err: any) {
    const error = new Error(err);
    yield put(assignNewsletter.failure(error));
  }
}
export default [
  takeEvery(clientInfo.request, clientInfoSaga),
  takeEvery(assignNewsletter.request, assignNewsletterSaga),
  takeEvery(createClient.request, createClientSaga)
];
