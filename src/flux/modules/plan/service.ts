import { get } from 'apis/axios';

export const getAllPlans = () =>
  get({
    url: '/subscription-plans/'
  });
