import { AxiosError } from 'axios';
import { createAsyncAction } from 'typesafe-actions';
import { PlanRequest, PlanResponse } from './types';

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
