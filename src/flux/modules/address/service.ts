import { post, put } from 'apis/axios';
import { Address } from './types';

export const postAddress = (data: Address) =>
  post({
    url: '/addresses/',
    data
  });

export const putAddress = (data: Address) =>
  put({
    url: `/addresses/${data?.id}`,
    data
  });
