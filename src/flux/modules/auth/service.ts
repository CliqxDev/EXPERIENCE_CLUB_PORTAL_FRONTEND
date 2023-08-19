import { get, post, put } from 'apis/axios';

import { ChangePasswordRequest, SigInRequest } from './types';

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
