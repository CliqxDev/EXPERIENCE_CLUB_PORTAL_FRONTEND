/* eslint-disable import/no-anonymous-default-export */
import { AxiosError } from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';

import { assignNewsletter, clientInfo } from './actions';
import { getClientInfo, postAssignNewsletter } from './service';
import { AssignNewsletterResponse, ClientInfoResponse } from './types';

type ClientInfoApiResponse = {
  data: ClientInfoResponse;
};

type AssignNewsletterApiResponse = {
  data: AssignNewsletterResponse;
};

function* clientInfoSaga(): Generator {
  try {
    const response: ClientInfoApiResponse = (yield call(getClientInfo)) as ClientInfoApiResponse;
    yield put(clientInfo.success(response.data));
  } catch (err) {
    const errors = err as Error | AxiosError;
    yield put(clientInfo.failure(errors));
  }
}

function* assignNewsletterSaga({ payload }: ReturnType<typeof assignNewsletter.request>): Generator {
  try {
    const response: AssignNewsletterApiResponse = (yield call(postAssignNewsletter, payload)) as AssignNewsletterApiResponse;
    yield put(assignNewsletter.success(response.data));
  } catch (err) {
    const errors = err as Error | AxiosError;
    yield put(assignNewsletter.failure(errors));
  }
}

export default [takeEvery(clientInfo.request, clientInfoSaga), takeEvery(assignNewsletter.request, assignNewsletterSaga)];
