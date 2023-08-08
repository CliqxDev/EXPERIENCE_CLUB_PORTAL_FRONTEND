import { get, post } from 'apis';

import { AssignNewsletterRequest } from './types';

export const getClientInfo = () =>
  get({
    url: '/auth/me'
  });

export const postAssignNewsletter = (data: AssignNewsletterRequest) =>
  post({
    url: '/newsletter',
    data
  });
