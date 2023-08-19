import { createAction, createAsyncAction } from 'typesafe-actions';

import { AxiosError } from 'axios';
import { Address, AddressViaCepResponse } from './types';

export const getAddressByCep = createAsyncAction(
  'GET_ADDRESS_BY_CEP_REQUEST',
  'GET_ADDRESS_BY_CEP_SUCCESS',
  'GET_ADDRESS_BY_CEP_ERROR'
)<string, AddressViaCepResponse, Error | AxiosError>();

export const updateClientAddress = createAsyncAction(
  'UPDATE_CLIENT_ADDRESS_REQUEST',
  'UPDATE_CLIENT_ADDRESS_SUCCESS',
  'UPDATE_CLIENT_ADDRESS_ERROR'
)<Address, Address, Error | AxiosError>();

export const createClientAddress = createAsyncAction(
  'CREATE_CLIENT_ADDRESS_REQUEST',
  'CREATE_CLIENT_ADDRESS_SUCCESS',
  'CREATE_CLIENT_ADDRESS_ERROR'
)<Address, Address, Error | AxiosError>();

export const clearCreateClientAddress = createAction(
  'CLEAR_CREATE_CLIENT_ADDRESS'
)();

export const clearUpdateClientAddress = createAction(
  'CLEAR_UPDATE_CLIENT_ADDRESS'
)();

export const clearAddress = createAction('CLEAR_ADDRESS')();
