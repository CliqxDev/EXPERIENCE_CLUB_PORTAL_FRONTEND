import { createAction, createAsyncAction } from 'typesafe-actions';

import { AxiosError } from 'axios';
import {
  ChangePasswordRequest,
  RecoveryPasswordSendEmailRequest,
  RecoveryPasswordSendEmailResponse,
  ResetPasswordRequest,
  ResetPasswordResponse,
  SigInRequest,
  SigInResponse
} from './types';
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

export const recoveryPasswordSendEmail = createAsyncAction(
  'RECOVERY_PASSWORD_SEND_EMAIL_REQUEST',
  'RECOVERY_PASSWORD_SEND_EMAIL_SUCCESS',
  'RECOVERY_PASSWORD_SEND_EMAIL_ERROR'
)<
  RecoveryPasswordSendEmailRequest,
  RecoveryPasswordSendEmailResponse,
  Error | AxiosError
>();

export const resetPassword = createAsyncAction(
  'RESET_PASSWORD_REQUEST',
  'RESET_PASSWORD_SUCCESS',
  'RESET_PASSWORD_ERROR'
)<ResetPasswordRequest, ResetPasswordResponse, Error | AxiosError>();

export const emailValidation = createAsyncAction(
  'EMAIL_VALIDATION_REQUEST',
  'EMAIL_VALIDATION_SUCCESS',
  'EMAIL_VALIDATION_ERROR'
)<string, undefined, Error | AxiosError>();

export const clearEmailValidation = createAction('CLEAR_EMAIL_VALIDATION')();

export const clearResetPassword = createAction('CLEAR_RESET_PASSWORD')();

export const clearRecoveryPasswordSendEmail = createAction(
  'CLEAR_RECOVERY_PASSWORD_SEND_EMAIL'
)();

export const clearSigIn = createAction('CLEAR_SIGN_IN')();

export const clearChangePassword = createAction('CLEAR_CHANGE_PASSWORD')();

export const updateClientState = createAction(
  'UPDATE_CLIENT_STATE'
)<ClientInfo>();

export const clearClientInfo = createAction('CLEAR_CLIENT_INFO')();
