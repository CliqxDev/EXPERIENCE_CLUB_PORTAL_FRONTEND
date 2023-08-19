import { call, put, takeEvery } from 'redux-saga/effects';

import { assignNewsletter, createClient, updateClient } from './actions';
import { ClientInfo } from './types';
import { postAssignNewsletter, postClient, putClient } from './service';
import { clientInfo } from '../auth/actions';

type ClientPersonalDataResponseAPI = {
  data: ClientInfo;
};

function* createClientSaga({
  payload
}: ReturnType<typeof createClient.request>): Generator {
  try {
    const response: ClientPersonalDataResponseAPI = (yield call(
      postClient,
      payload
    )) as ClientPersonalDataResponseAPI;
    yield put(createClient.success(response.data));
  } catch (err) {
    const errors = err as Error;
    yield put(createClient.failure(errors));
  }
}

function* updateClientSaga({
  payload
}: ReturnType<typeof updateClient.request>): Generator {
  try {
    delete payload.address;

    const response: ClientPersonalDataResponseAPI = (yield call(
      putClient,
      payload
    )) as ClientPersonalDataResponseAPI;

    yield put(updateClient.success(response.data));
    yield put(clientInfo.success(response.data));
  } catch (err) {
    const errors = err as Error;
    yield put(updateClient.failure(errors));
  }
}

function* assignNewsletterSaga({
  payload
}: ReturnType<typeof assignNewsletter.request>): Generator {
  try {
    yield call(postAssignNewsletter, payload);
    yield put(assignNewsletter.success());
  } catch (err) {
    const errors = err as Error;
    yield put(updateClient.failure(errors));
  }
}

export default [
  takeEvery(assignNewsletter.request, assignNewsletterSaga),
  takeEvery(createClient.request, createClientSaga),
  takeEvery(updateClient.request, updateClientSaga)
];
