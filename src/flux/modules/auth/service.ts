import { get, post, put } from 'apis/axios';

import {
  ChangePasswordRequest,
  RecoveryPasswordRequest,
  SigInRequest
} from './types';

export const getClientInfo = () =>
  get({
    url: '/auth/me'
  });

export const postChangePassword = (data: ChangePasswordRequest) =>
  put({
    url: '/auth/change-password',
    data
  });

export const postSigIn = (data: SigInRequest) =>
  post({
    url: '/auth/token',
    data
  });

export const postRecoveryPassword = (data: RecoveryPasswordRequest) =>
  put({
    url: '/auth/recovery-password/',
    data
  });

export const postEmailRecovery = (data: RecoveryPasswordRequest) =>
  put({
    url: '/email/email-recovery',
    data
  });
