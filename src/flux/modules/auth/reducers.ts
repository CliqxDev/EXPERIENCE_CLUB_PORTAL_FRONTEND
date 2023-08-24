import { Action, createReducer } from 'typesafe-actions';
import { RequestStatus } from 'models/iRequest';
import {
  changePassword,
  clientInfo,
  clearChangePassword,
  clearRecoveryPasswordSendEmail,
  updateClientState,
  clearClientInfo,
  recoveryPasswordSendEmail as recoveryPasswordSendEmailAction,
  sigIn as sigInAction,
  resetPassword as resetPasswordAction,
  clearResetPassword,
  clearSigIn
} from './actions';
import { Auth } from './types';

const initialState: Auth = {
  clientInfo: { data: null, message: null, status: RequestStatus.idle },
  sigIn: { data: null, message: null, status: RequestStatus.idle },
  resetPassword: { data: null, message: null, status: RequestStatus.idle },
  recoveryPasswordSendEmail: {
    data: null,
    message: null,
    status: RequestStatus.idle
  },
  changePassword: { data: null, message: null, status: RequestStatus.idle }
};

const authReducer = createReducer<Auth, Action>(initialState)
  .handleAction(resetPasswordAction.request, state => ({
    ...state,
    resetPassword: {
      data: null,
      message: null,
      status: RequestStatus.fetching
    }
  }))
  .handleAction(resetPasswordAction.success, state => ({
    ...state,
    resetPassword: {
      data: null,
      message: null,
      status: RequestStatus.success
    }
  }))
  .handleAction(resetPasswordAction.failure, (state, action) => ({
    ...state,
    resetPassword: {
      data: null,
      message: action.payload.message,
      status: RequestStatus.error
    }
  }))
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
  .handleAction(clearSigIn, state => ({
    ...state,
    sigIn: {
      data: null,
      message: null,
      status: RequestStatus.idle
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
  .handleAction(clearClientInfo, state => ({
    ...state,
    clientInfo: {
      data: null,
      message: null,
      status: RequestStatus.idle
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
  .handleAction(recoveryPasswordSendEmailAction.request, state => ({
    ...state,
    recoveryPasswordSendEmail: {
      data: null,
      message: null,
      status: RequestStatus.fetching
    }
  }))
  .handleAction(recoveryPasswordSendEmailAction.success, state => ({
    ...state,
    recoveryPasswordSendEmail: {
      data: null,
      message: null,
      status: RequestStatus.success
    }
  }))
  .handleAction(recoveryPasswordSendEmailAction.failure, (state, action) => ({
    ...state,
    recoveryPasswordSendEmail: {
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
  .handleAction(clearRecoveryPasswordSendEmail, state => ({
    ...state,
    recoveryPasswordSendEmail: {
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
  }))
  .handleAction(clearResetPassword, state => ({
    ...state,
    resetPassword: {
      data: null,
      message: null,
      status: RequestStatus.idle
    }
  }));
export default authReducer;
