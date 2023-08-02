/* eslint-disable @typescript-eslint/no-redundant-type-constituents */
import { AxiosError } from 'axios';
import { createAction, createAsyncAction } from 'typesafe-actions';

import { SigInRequest, SigInResponse } from './types';

export const sigIn = createAsyncAction(
  'SIGN_INFO_REQUEST',
  'SIGN_INFO_SUCCESS',
  'SIGN_INFO_ERROR'
)<SigInRequest, SigInResponse, Error | AxiosError>();

export const clearSigIn = createAction('CLEAR_SIGN_IN')();
