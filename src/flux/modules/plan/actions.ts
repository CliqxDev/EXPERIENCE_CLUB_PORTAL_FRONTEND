import { AxiosError } from 'axios';
import { createAction, createAsyncAction } from 'typesafe-actions';
import { PlanRequest, PlanResponse, SubscriptionUser, SubscriptionUserRequest } from './types';

export const getPlans = createAsyncAction(
  'GET_PLANS_REQUEST',
  'GET_PLANS_SUCCESS',
  'GET_PLANS_ERROR'
)<undefined, PlanResponse, Error | AxiosError>();

export const getSpecificPlan = createAsyncAction(
  'GET_SPECIFIC_PLAN_REQUEST',
  'GET_SPECIFIC_PLAN_SUCCESS',
  'GET_SPECIFIC_PLAN_ERROR'
)<PlanRequest, PlanResponse, Error | AxiosError>();

export const postSubscriptionUserPlans = createAsyncAction(
  'POST_SUBSCRIPTION_USER_PLANS_REQUEST',
  'POST_SUBSCRIPTION_USER_PLANS_SUCCESS',
  'POST_SUBSCRIPTION_USER_PLANS_ERROR'
)<SubscriptionUserRequest, SubscriptionUser, Error | AxiosError>();

export const clearSubscriptionUserPlans = createAction('CLEAR_POST_SUBSCRIPTION_USER_PLANS')();
