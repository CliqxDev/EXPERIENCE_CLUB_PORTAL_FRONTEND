import { call, put, takeEvery } from 'redux-saga/effects';
import { AxiosError } from 'axios';

import { isEmpty } from 'lodash';
import {
  changePassword,
  clientInfo,
  sigIn,
  recoveryPasswordSendEmail
} from './actions';
import { RecoveryPasswordSendEmailResponse, SigInResponse } from './types';
import {
  getClientInfo,
  postChangePassword,
  postEmailRecovery,
  postSigIn
} from './service';
import { ClientInfo } from '../client/types';

type ClientInfoResponseAPI = {
  data: ClientInfo;
};

type SigInResponseAPI = {
  data: SigInResponse;
};

type RecoveryPasswordSendEmailResponseAPI = {
  data: RecoveryPasswordSendEmailResponse;
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

function* changePasswordSaga({
  payload
}: ReturnType<typeof changePassword.request>): Generator {
  try {
    yield call(postChangePassword, payload);
    yield put(changePassword.success());
  } catch (err: any) {
    if (!isEmpty(err.response.data)) {
      if (err.response.data.old_password) {
        err.message = 'Senha incorreta';
      }
    }
    yield put(changePassword.failure(err as Error | AxiosError));
  }
}

function* sigInSaga({ payload }: ReturnType<typeof sigIn.request>): Generator {
  try {
    const response: SigInResponseAPI = (yield call(
      postSigIn,
      payload
    )) as SigInResponseAPI;
    yield put(sigIn.success(response.data));
  } catch (err) {
    const errors = err as Error | AxiosError;
    yield put(sigIn.failure(errors));
  }
}

function* recoveryPasswordSendEmailSaga({
  payload
}: ReturnType<typeof recoveryPasswordSendEmail.request>): Generator {
  try {
    const response: RecoveryPasswordSendEmailResponseAPI = (yield call(
      postEmailRecovery,
      payload
    )) as RecoveryPasswordSendEmailResponseAPI;
    yield put(recoveryPasswordSendEmail.success(response.data));
  } catch (err) {
    const errors = err as Error | AxiosError;
    yield put(recoveryPasswordSendEmail.failure(errors));
  }
}

export default [
  takeEvery(clientInfo.request, clientInfoSaga),
  takeEvery(changePassword.request, changePasswordSaga),
  takeEvery(recoveryPasswordSendEmail.request, recoveryPasswordSendEmailSaga),
  takeEvery(sigIn.request, sigInSaga)
];
