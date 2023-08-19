import { AxiosError } from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';

import { api } from 'apis';
import {
  createClientAddress,
  getAddressByCep,
  updateClientAddress
} from './actions';
import { Address, AddressViaCepResponse } from './types';
import { postAddress, putAddress } from './service';

type AddressResponseAPI = {
  data: Address;
};

function* getAddressByCepSaga({
  payload
}: ReturnType<typeof getAddressByCep.request>): Generator {
  try {
    const response: any = yield api.get<AddressViaCepResponse>(
      `/${payload}/json`,
      'https://viacep.com.br/ws'
    );

    yield put(getAddressByCep.success(response));
  } catch (err) {
    const errors = err as Error | AxiosError;
    yield put(getAddressByCep.failure(errors));
  }
}

function* createClientAddressSaga({
  payload
}: ReturnType<typeof createClientAddress.request>): Generator {
  try {
    const response: AddressResponseAPI = (yield call(
      postAddress,
      payload
    )) as AddressResponseAPI;
    yield put(createClientAddress.success(response.data));
  } catch (err) {
    const errors = err as Error;
    yield put(createClientAddress.failure(errors));
  }
}

function* updateClientAddressSaga({
  payload
}: ReturnType<typeof updateClientAddress.request>): Generator {
  try {
    const response: AddressResponseAPI = (yield call(
      putAddress,
      payload
    )) as AddressResponseAPI;
    yield put(updateClientAddress.success(response.data));
  } catch (err) {
    const errors = err as Error;
    yield put(updateClientAddress.failure(errors));
  }
}

export default [
  takeEvery(getAddressByCep.request, getAddressByCepSaga),
  takeEvery(updateClientAddress.request, updateClientAddressSaga),
  takeEvery(createClientAddress.request, createClientAddressSaga)
];
