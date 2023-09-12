import { Action, createReducer } from 'typesafe-actions';
import { RequestStatus } from 'models/iRequest';
import { Plans } from './types';
import { clearSubscriptionUserPlans, getPlans, getSpecificPlan, postSubscriptionUserPlans } from './actions';

const initialState: Plans = {
  plans: { data: null, message: null, status: RequestStatus.idle },
  selectedPlan: { data: null, message: null, status: RequestStatus.idle },
  subscriptionUserPlan: { data: null, message: null, status: RequestStatus.idle },
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
  }))
  .handleAction(getSpecificPlan.request, state => ({
    ...state,
    selectedPlan: { data: null, message: null, status: RequestStatus.fetching }
  }))
  .handleAction(getSpecificPlan.success, (state, action) => ({
    ...state,
    selectedPlan: {
      data: action.payload,
      message: null,
      status: RequestStatus.success
    }
  }))
  .handleAction(getSpecificPlan.failure, (state, action) => ({
    ...state,
    selectedPlan: {
      data: null,
      message: action.payload.message,
      status: RequestStatus.error
    }
  }))
  .handleAction(postSubscriptionUserPlans.request, state => ({
    ...state,
    subscriptionUserPlan: {
      data: null,
      message: null,
      status: RequestStatus.fetching
    }
  }))
  .handleAction(postSubscriptionUserPlans.success, (state, action) => ({
    ...state,
    subscriptionUserPlan: {
      data: action.payload,
      message: null,
      status: RequestStatus.success
    }
  }))
  .handleAction(postSubscriptionUserPlans.failure, (state, action) => ({
    ...state,
    subscriptionUserPlan: {
      data: null,
      message: action.payload.message,
      status: RequestStatus.error
    }
  }))
  .handleAction(clearSubscriptionUserPlans, state => ({
    ...state,
    subscriptionUserPlan: {
      data: null,
      message: null,
      status: RequestStatus.idle
    }
  }));

export default planReducer;
