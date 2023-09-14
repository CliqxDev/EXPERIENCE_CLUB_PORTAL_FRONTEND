import { call, put, takeEvery } from 'redux-saga/effects';
import { AxiosError } from 'axios';
import { getPlans, getSpecificPlan, postCompaniesUser, postSubscriptionUserPlans } from './actions';
import { getAllPlans, getPlan, postCompaniesUserPlan, postSubscriptionUserPlan } from './service';
import { CompaniesResponse, PlanResponse, SubscriptionUserRequest } from './types';

type PlanResponseAPI = {
  data: PlanResponse;
};

type SubscriptionUserAPI = {
  data: SubscriptionUserRequest;
}

type CompaniesUserAPI = {
  data: CompaniesResponse;
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


function* postCompaniesUserSaga({
  payload
}: ReturnType<typeof postCompaniesUser.request>): Generator {
  try {
    const response: CompaniesUserAPI = (yield call(
      postCompaniesUserPlan,
      payload
    )) as CompaniesUserAPI;
    yield put(postCompaniesUser.success(response.data));
  } catch (err) {
    const errors = err as Error;
    yield put(postCompaniesUser.failure(errors));
  }
}

export default [
  takeEvery(getPlans.request, getPlansSaga),
  takeEvery(getSpecificPlan.request, getSpecificPlanSaga),
  takeEvery(postSubscriptionUserPlans.request, postSubscriptionUserSaga),
  takeEvery(postCompaniesUser.request, postCompaniesUserSaga)
];
