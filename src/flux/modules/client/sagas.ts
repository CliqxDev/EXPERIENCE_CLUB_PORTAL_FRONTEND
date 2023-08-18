import { put, takeEvery } from 'redux-saga/effects';
import { api } from 'apis';

import {
  assignNewsletter,
  changePassword,
  clientInfo,
  createClient,
  updateClientAddress,
  updateClient,
  createClientAddress
} from './actions';
import {
  AssignNewsletterRequest,
  ClientInfoResponse,
  ClientPersonalDataResponse,
  ClientPersonalDataPayload,
  Address,
  ClientPersonalDataCompletePayload,
  ChangePasswordRequest
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

function* updateClientSaga({
  payload
}: ReturnType<typeof updateClient.request>): Generator {
  try {
    delete payload.address;
    const response: any = yield api.put<
      ClientPersonalDataCompletePayload,
      ClientPersonalDataResponseAPI
    >(`/users/${payload?.id}`, payload);

    yield put(updateClient.success(response));
    yield put(clientInfo.success(response));
  } catch (err) {
    const errors = err as Error;
    yield put(updateClient.failure(errors));
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

function* changePasswordSaga({
  payload
}: ReturnType<typeof changePassword.request>): Generator {
  try {
    yield api.put<ChangePasswordRequest, undefined>(
      '/auth/change-password',
      payload
    );

    yield put(changePassword.success());
  } catch (err: any) {
    const error = new Error();
    if (err.old_password.length > 0) {
      error.message = 'Senha incorreta';
    }
    yield put(changePassword.failure(error));
  }
}

function* createClientAddressSaga({
  payload
}: ReturnType<typeof createClientAddress.request>): Generator {
  try {
    const response: any = yield api.post<Address, Address>(
      '/addresses/',
      payload
    );

    yield put(createClientAddress.success(response));
    // yield put(clientInfo.success(response));
  } catch (err) {
    const errors = err as Error;
    yield put(createClientAddress.failure(errors));
  }
}

function* updateClientAddressSaga({
  payload
}: ReturnType<typeof updateClientAddress.request>): Generator {
  try {
    const response: any = yield api.put<Address, Address>(
      `/addresses/${payload?.id}`,
      payload
    );

    yield put(updateClientAddress.success(response));
  } catch (err) {
    const errors = err as Error;
    yield put(updateClientAddress.failure(errors));
  }
}

export default [
  takeEvery(clientInfo.request, clientInfoSaga),
  takeEvery(assignNewsletter.request, assignNewsletterSaga),
  takeEvery(createClient.request, createClientSaga),
  takeEvery(changePassword.request, changePasswordSaga),
  takeEvery(updateClientAddress.request, updateClientAddressSaga),
  takeEvery(createClientAddress.request, createClientAddressSaga),
  takeEvery(updateClient.request, updateClientSaga)
];
