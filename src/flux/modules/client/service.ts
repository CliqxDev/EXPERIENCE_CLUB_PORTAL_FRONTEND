import { get } from 'apis';

export const getClientInfo = () =>
  get({
    url: '/auth/me'
  });
