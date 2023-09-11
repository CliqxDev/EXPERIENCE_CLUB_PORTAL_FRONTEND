import { get } from 'apis/axios';
import { PlanRequest } from './types';

export const getAllPlans = () =>
  get({
    url: '/subscription-plans/'
  });

export const getPlan = (plan: PlanRequest) =>
  get({
    url: `/subscription-plans/?type=${plan.type}&qtd_members=${plan.qtd_members}`
  });
