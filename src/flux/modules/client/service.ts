import { get, post } from 'apis';

import { ClientPersonalDataPayload } from './types';

export const getClientInfo = () =>
  get({
    url: '/auth/me'
  });

export const postClient = (data: ClientPersonalDataPayload) =>
  post({
    url: '/users',
    data
  });
