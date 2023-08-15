import { get, post } from 'apis';

import { AssignNewsletterRequest, ClientPersonalDataPayload } from './types';

export const getClientInfo = () =>
  get({
    url: '/auth/me'
  });

export const postClient = (data: ClientPersonalDataPayload) =>
  post({
    url: '/users',
    data
  });

export const postAssignNewsletter = (data: AssignNewsletterRequest) =>
  post({
    url: '/newsletter',
    data
  });
