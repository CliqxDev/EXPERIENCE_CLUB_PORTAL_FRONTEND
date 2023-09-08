import { Action, createReducer } from 'typesafe-actions';
import { RequestStatus } from 'models/iRequest';
import { Plans } from './types';
import { getPlans } from './actions';

const initialState: Plans = {
  plans: { data: null, message: null, status: RequestStatus.idle }
};

const planReducer = createReducer<Plans, Action>(initialState)
  .handleAction(getPlans.request, state => ({
    ...state,
    plans: { data: null, message: null, status: RequestStatus.fetching }
  }))
  .handleAction(getPlans.success, (state, action) => ({
    ...state,
    plans: {
      data: action.payload,
      message: null,
      status: RequestStatus.success
    }
  }))
  .handleAction(getPlans.failure, (state, action) => ({
    ...state,
    plans: {
      data: null,
      message: action.payload.message,
      status: RequestStatus.error
    }
  }));

export default planReducer;
