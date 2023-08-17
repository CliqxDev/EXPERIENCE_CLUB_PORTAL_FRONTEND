import { AxiosError } from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
import { api } from 'apis';

import { getAddress } from './actions';
import { AddressViaCepResponse } from './types';

function* getAddressSaga({
  payload
}: ReturnType<typeof getAddress.request>): Generator {
  try {
    const response: any = yield api.get<AddressViaCepResponse>(
      `/${payload}/json`,
      'https://viacep.com.br/ws'
    );
    yield put(getAddress.success(response));
  } catch (err) {
    const errors = err as Error | AxiosError;
    yield put(getAddress.failure(errors));
  }
}

export default [takeEvery(getAddress.request, getAddressSaga)];
