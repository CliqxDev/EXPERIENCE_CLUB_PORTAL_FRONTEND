import { Action, createReducer } from 'typesafe-actions';
import { RequestStatus } from 'models/iRequest';
import {
  changePassword,
  clientInfo,
  clearChangePassword,
  updateClientState,
  sigIn as sigInAction
} from './actions';
import { Auth } from './types';

const initialState: Auth = {
  clientInfo: { data: null, message: null, status: RequestStatus.idle },
  sigIn: { data: null, message: null, status: RequestStatus.idle },
  changePassword: { data: null, message: null, status: RequestStatus.idle }
};

const clientInfoReducer = createReducer<Auth, Action>(initialState)
  .handleAction(sigInAction.request, state => ({
    ...state,
    sigIn: { data: null, message: null, status: RequestStatus.fetching }
  }))
  .handleAction(sigInAction.success, (state, action) => ({
    ...state,
    sigIn: {
      data: action.payload,
      message: null,
      status: RequestStatus.success
    }
  }))
  .handleAction(sigInAction.failure, (state, action) => ({
    ...state,
    sigIn: {
      data: null,
      message: action.payload.message,
      status: RequestStatus.error
    }
  }))
  .handleAction(clientInfo.request, state => ({
    ...state,
    clientInfo: { data: null, message: null, status: RequestStatus.fetching }
  }))
  .handleAction(clientInfo.success, (state, action) => ({
    ...state,
    clientInfo: {
      data: action.payload,
      message: null,
      status: RequestStatus.success
    }
  }))
  .handleAction(clientInfo.failure, (state, action) => ({
    ...state,
    clientInfo: {
      data: null,
      message: action.payload.message,
      status: RequestStatus.error
    }
  }))
  .handleAction(changePassword.request, state => ({
    ...state,
    changePassword: {
      data: null,
      message: null,
      status: RequestStatus.fetching
    }
  }))
  .handleAction(changePassword.success, state => ({
    ...state,
    changePassword: {
      data: null,
      message: null,
      status: RequestStatus.success
    }
  }))
  .handleAction(changePassword.failure, (state, action) => ({
    ...state,
    changePassword: {
      data: null,
      message: action.payload.message,
      status: RequestStatus.error
    }
  }))
  .handleAction(clearChangePassword, state => ({
    ...state,
    changePassword: {
      data: null,
      message: null,
      status: RequestStatus.idle
    }
  }))
  .handleAction(updateClientState, (state, action) => ({
    ...state,
    clientInfo: {
      ...state.clientInfo,
      data: action.payload
    }
  }));
export default clientInfoReducer;
