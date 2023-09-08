import { AxiosError } from 'axios';
import { createAsyncAction } from 'typesafe-actions';
import { PlanResponse } from './types';

export const getPlans = createAsyncAction(
  'GET_PLANS_REQUEST',
  'GET_PLANS_SUCCESS',
  'GET_PLANS_ERROR'
)<undefined, PlanResponse, Error | AxiosError>();
