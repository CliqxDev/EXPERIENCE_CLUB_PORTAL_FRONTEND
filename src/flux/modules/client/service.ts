import { del, get, post, put } from 'apis/axios';

import {
  AssignNewsletterRequest,
  ClientInfo,
  ClientInfoRequest
} from './types';

export const postClient = (data: ClientInfoRequest) =>
  post({
    url: '/users/',
    data
  });

export const putClient = (data: ClientInfo) =>
  put({
    url: `/users/${data?.id}`,
    data
  });

export const deleteAccount = (id: number) =>
  del({
    url: `/users/${id}`
  });

export const postAssignNewsletter = (data: AssignNewsletterRequest) =>
  post({
    url: '/newsletter/',
    data
  });

  export const getCheckoutIndividual = () =>
  get({
    url: `/subscription-plans/?type=1&qtd_members=1`,
  });
