import { Action, createReducer } from 'typesafe-actions';
import { RequestStatus } from 'models/iRequest';
import {
  assignNewsletter,
  changePassword,
  clearClientInfo,
  clearCreateClient,
  clientInfo,
  createClient,
  createClientAddress,
  updateClient,
  clearCreateClientAddress,
  updateClientAddress,
  updateClientState,
  clearChangePassword,
  clearUpdateClient,
  clearUpdateClientAddress
} from './actions';
import { Client } from './types';

const initialState: Client = {
  clientInfo: { data: null, message: null, status: RequestStatus.idle },
  updateClient: { data: null, message: null, status: RequestStatus.idle },
  newsLetter: { data: null, message: null, status: RequestStatus.idle },
  createClient: { data: null, message: null, status: RequestStatus.idle },
  changePassword: { data: null, message: null, status: RequestStatus.idle },
  updateClientAddress: {
    data: null,
    message: null,
    status: RequestStatus.idle
  },
  createClientAddress: {
    data: null,
    message: null,
    status: RequestStatus.idle
  }
};

const clientInfoReducer = createReducer<Client, Action>(initialState)
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
    clientInfo: { data: null, message: null, status: RequestStatus.idle }
  }))
  .handleAction(createClient.request, state => ({
    ...state,
    createClient: {
      data: null,
      message: null,
      status: RequestStatus.fetching
    }
  }))
  .handleAction(createClient.success, (state, action) => ({
    ...state,
    createClient: {
      data: action.payload,
      message: null,
      status: RequestStatus.success
    }
  }))
  .handleAction(createClient.failure, (state, action) => ({
    ...state,
    createClient: {
      data: null,
      message: action.payload.message,
      status: RequestStatus.error
    }
  }))
  .handleAction(clearCreateClient, state => ({
    ...state,
    createClient: {
      data: null,
      message: null,
      status: RequestStatus.idle
    }
  }))
  .handleAction(assignNewsletter.request, state => ({
    ...state,
    newsLetter: { data: null, message: null, status: RequestStatus.fetching }
  }))
  .handleAction(assignNewsletter.success, state => ({
    ...state,
    newsLetter: {
      data: null,
      message: null,
      status: RequestStatus.success
    }
  }))
  .handleAction(assignNewsletter.failure, (state, action) => ({
    ...state,
    newsLetter: {
      data: null,
      message: action.payload.message,
      status: RequestStatus.error
    }
  }))
  .handleAction(updateClient.request, state => ({
    ...state,
    updateClient: { data: null, message: null, status: RequestStatus.fetching }
  }))
  .handleAction(updateClient.success, state => ({
    ...state,
    updateClient: {
      data: null,
      message: null,
      status: RequestStatus.success
    }
  }))
  .handleAction(updateClient.failure, (state, action) => ({
    ...state,
    updateClient: {
      data: null,
      message: action.payload.message,
      status: RequestStatus.error
    }
  }))
  .handleAction(clearUpdateClient, state => ({
    ...state,
    updateClient: {
      data: null,
      message: null,
      status: RequestStatus.idle
    }
  }))
  .handleAction(createClientAddress.failure, (state, action) => ({
    ...state,
    createClientAddress: {
      data: null,
      message: action.payload.message,
      status: RequestStatus.error
    }
  }))
  .handleAction(createClientAddress.request, state => ({
    ...state,
    createClientAddress: {
      data: null,
      message: null,
      status: RequestStatus.fetching
    }
  }))
  .handleAction(createClientAddress.success, (state, action) => ({
    ...state,
    createClientAddress: {
      data: action.payload,
      message: null,
      status: RequestStatus.success
    }
  }))
  .handleAction(clearCreateClientAddress, state => ({
    ...state,
    createClientAddress: {
      data: null,
      message: null,
      status: RequestStatus.idle
    }
  }))
  .handleAction(updateClientAddress.request, state => ({
    ...state,
    updateClientAddress: {
      data: null,
      message: null,
      status: RequestStatus.fetching
    }
  }))
  .handleAction(updateClientAddress.success, (state, action) => ({
    ...state,
    updateClientAddress: {
      data: action.payload,
      message: null,
      status: RequestStatus.success
    }
  }))
  .handleAction(updateClientAddress.failure, (state, action) => ({
    ...state,
    updateClientAddress: {
      data: null,
      message: action.payload.message,
      status: RequestStatus.error
    }
  }))
  .handleAction(clearUpdateClientAddress, state => ({
    ...state,
    updateClientAddress: {
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
