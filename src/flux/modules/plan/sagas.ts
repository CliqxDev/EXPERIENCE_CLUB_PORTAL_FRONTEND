import { call, put, takeEvery } from 'redux-saga/effects';
import { AxiosError } from 'axios';
import { getPlans, getSpecificPlan, postSubscriptionUserPlans } from './actions';
import { getAllPlans, getPlan, postSubscriptionUserPlan } from './service';
import { PlanResponse, SubscriptionUserRequest } from './types';

type PlanResponseAPI = {
  data: PlanResponse;
};

type SubscriptionUserAPI = {
  data: SubscriptionUserRequest;
}

function* getPlansSaga(): Generator {
  try {
    const response: PlanResponseAPI = (yield call(
      getAllPlans
    )) as PlanResponseAPI;
    yield put(getPlans.success(response.data));
  } catch (err) {
    const errors = err as Error | AxiosError;
    yield put(getPlans.failure(errors));
  }
}

function* getSpecificPlanSaga({
  payload
}: ReturnType<typeof getSpecificPlan.request>): Generator {
  try {
    const response: PlanResponseAPI = (yield call(
      getPlan,
      payload
    )) as PlanResponseAPI;
    yield put(getSpecificPlan.success(response.data));
  } catch (err) {
    const errors = err as Error;
    yield put(getSpecificPlan.failure(errors));
  }
}

function* postSubscriptionUserSaga({
  payload
}: ReturnType<typeof postSubscriptionUserPlans.request>): Generator {
  try {
    const response: SubscriptionUserAPI = (yield call(
      postSubscriptionUserPlan,
      payload
    )) as SubscriptionUserAPI;
    yield put(postSubscriptionUserPlans.success(response.data));
  } catch (err) {
    const errors = err as Error;
    yield put(postSubscriptionUserPlans.failure(errors));
  }
}

export default [
  takeEvery(getPlans.request, getPlansSaga),
  takeEvery(getSpecificPlan.request, getSpecificPlanSaga),
  takeEvery(postSubscriptionUserPlans.request, postSubscriptionUserSaga)
];
