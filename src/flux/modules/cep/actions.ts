import { createAction, createAsyncAction } from 'typesafe-actions';

import { AddressViaCepResponse } from './types';

export const getAddress = createAsyncAction(
  'GET_ADDRESS_BY_CEP_REQUEST',
  'GET_ADDRESS_BY_CEP_SUCCESS',
  'GET_ADDRESS_BY_CEP_ERROR'
)<string, AddressViaCepResponse, Error>();

export const clearAddress = createAction('CLEAR_ADDRESS')();
