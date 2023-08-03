import { post } from 'apis';

import { SigInRequest } from './types';

export const login = (data: SigInRequest) =>
  post({
    url: '/auth/token',
    data
  });
