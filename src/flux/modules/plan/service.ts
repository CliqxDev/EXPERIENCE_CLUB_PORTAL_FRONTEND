import { get, post } from 'apis/axios';
import { PlanRequest, SubscriptionUserRequest } from './types';

export const getAllPlans = () =>
  get({
    url: '/subscription-plans/'
  });

export const getPlan = (plan: PlanRequest) =>
  get({
    url: `/subscription-plans/?type=${plan.type}&qtd_members=${plan.qtd_members}`
  });

  export const postSubscriptionUserPlan = (data: SubscriptionUserRequest) => 
  post({
    url: `/subscription-user-plans/`,
    data
  })
