import { createAction, createAsyncAction } from 'typesafe-actions';

import { AxiosError } from 'axios';
import { ChangePasswordRequest, SigInRequest, SigInResponse } from './types';
import { ClientInfo } from '../client/types';

export const clientInfo = createAsyncAction(
  'CLIENT_INFO_REQUEST',
  'CLIENT_INFO_SUCCESS',
  'CLIENT_INFO_ERROR'
)<undefined, ClientInfo, Error | AxiosError>();

export const changePassword = createAsyncAction(
  'CHANGE_PASSWORD_REQUEST',
  'CHANGE_PASSWORD_SUCCESS',
  'CHANGE_PASSWORD_ERROR'
)<ChangePasswordRequest, undefined, Error | AxiosError>();

export const sigIn = createAsyncAction(
  'SIGN_INFO_REQUEST',
  'SIGN_INFO_SUCCESS',
  'SIGN_INFO_ERROR'
)<SigInRequest, SigInResponse, Error | AxiosError>();

export const clearSigIn = createAction('CLEAR_SIGN_IN')();

export const clearChangePassword = createAction('CLEAR_CHANGE_PASSWORD')();

export const updateClientState = createAction(
  'UPDATE_CLIENT_STATE'
)<ClientInfo>();
