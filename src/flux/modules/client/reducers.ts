/* eslint-disable import/order */
import { RequestStatus } from 'models/iRequest';
import { Action, createReducer } from 'typesafe-actions';

import {
  assignNewsletter,
  clearClientInfo,
  clearCreateClient,
  clientInfo,
  createClient
} from './actions';
import { Client } from './types';

const initialState: Client = {
  clientInfo: { data: null, message: null, status: RequestStatus.idle },
  newsLetter: { data: null, message: null, status: RequestStatus.idle },
  createClient: {
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
  }));

export default clientInfoReducer;
