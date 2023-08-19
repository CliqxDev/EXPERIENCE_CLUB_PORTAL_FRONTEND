import { Action, createReducer } from 'typesafe-actions';
import { RequestStatus } from 'models/iRequest';
import {
  assignNewsletter,
  clearCreateClient,
  createClient,
  updateClient,
  clearUpdateClient
} from './actions';
import { Client } from './types';

const initialState: Client = {
  updateClient: { data: null, message: null, status: RequestStatus.idle },
  newsLetter: { data: null, message: null, status: RequestStatus.idle },
  createClient: { data: null, message: null, status: RequestStatus.idle }
};

const clientInfoReducer = createReducer<Client, Action>(initialState)
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
  }));

export default clientInfoReducer;
