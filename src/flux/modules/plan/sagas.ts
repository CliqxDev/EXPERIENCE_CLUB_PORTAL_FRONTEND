import { call, put, takeEvery } from 'redux-saga/effects';
import { AxiosError } from 'axios';
import { getPlans, getSpecificPlan } from './actions';
import { getAllPlans, getPlan } from './service';
import { PlanResponse } from './types';

type PlanResponseAPI = {
  data: PlanResponse;
};

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

export default [
  takeEvery(getPlans.request, getPlansSaga),
  takeEvery(getSpecificPlan.request, getSpecificPlanSaga)
];
