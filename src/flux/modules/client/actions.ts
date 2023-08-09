/* eslint-disable @typescript-eslint/no-redundant-type-constituents */
import { AxiosError } from 'axios';
import { createAction, createAsyncAction } from 'typesafe-actions';

import {
  ClientInfoResponse,
  ClientPersonalDataPayload,
  ClientPersonalDataResponse
} from './types';

export const clientInfo = createAsyncAction(
  'CLIENT_INFO_REQUEST',
  'CLIENT_INFO_SUCCESS',
  'CLIENT_INFO_ERROR'
)<undefined, ClientInfoResponse, Error | AxiosError>();

export const clearClientInfo = createAction('CLEAR_CLIENT_INFO')();

export const createClient = createAsyncAction(
  'CREATE_CLIENT_REQUEST',
  'CREATE_CLIENT_SUCCESS',
  'CREATE_CLIENT_ERROR'
)<ClientPersonalDataPayload, ClientPersonalDataResponse, Error | AxiosError>();

export const clearCreateClient = createAction('CLEAR_CREATE_CLIENT')();
