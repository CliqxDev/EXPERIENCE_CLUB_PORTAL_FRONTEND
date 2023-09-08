import { call, put, takeEvery } from 'redux-saga/effects';
import { AxiosError } from 'axios';
import { getPlans } from './actions';
import { getAllPlans } from './service';
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

export default [takeEvery(getPlans.request, getPlansSaga)];
