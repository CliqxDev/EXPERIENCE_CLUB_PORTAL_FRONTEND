import { get, post, put } from 'apis/axios';

import {
  ChangePasswordRequest,
  RecoveryPasswordRequest,
  RecoveryPasswordSendEmailRequest,
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
  post({
    url: '/auth/recovery-password/',
    data
  });

export const postEmailRecovery = (data: RecoveryPasswordSendEmailRequest) =>
  post({
    url: '/email/email-recovery',
    data
  });
