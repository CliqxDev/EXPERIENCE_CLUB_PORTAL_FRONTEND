import { get, post, put } from 'apis/axios';

import {
  ChangePasswordRequest,
  ResetPasswordRequest,
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

export const postResetPassword = (data: ResetPasswordRequest) =>
  post({
    url: `/auth/recovery-password/?token=${data.token}`,
    data
  });

export const postEmailRecovery = (data: RecoveryPasswordSendEmailRequest) =>
  post({
    url: '/email/email-recovery',
    data
  });

export const postEmailValidation = (token: string) =>
  get({
    url: `/email/email-verify?token=${token}`
  });
