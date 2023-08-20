import { Action, createReducer } from 'typesafe-actions';
import { RequestStatus } from 'models/iRequest';

import {
  clearAddress,
  clearCreateClientAddress,
  clearUpdateClientAddress,
  createClientAddress as createClientAddressAction,
  getAddressByCep,
  updateClientAddress as updateClientAddressAction
} from './actions';
import { AddressReducerType } from './types';

const initialState: AddressReducerType = {
  updateClientAddress: {
    data: null,
    message: null,
    status: RequestStatus.idle
  },
  createClientAddress: {
    data: null,
    message: null,
    status: RequestStatus.idle
  },
  viaCep: { data: null, message: null, status: RequestStatus.idle }
};

const addressReducer = createReducer<AddressReducerType, Action>(initialState)
  .handleAction(getAddressByCep.request, state => ({
    ...state,
    viaCep: { data: null, message: null, status: RequestStatus.fetching }
  }))
  .handleAction(getAddressByCep.success, (state, action) => ({
    ...state,
    viaCep: {
      data: action.payload,
      message: null,
      status: RequestStatus.success
    }
  }))
  .handleAction(getAddressByCep.failure, (state, action) => ({
    ...state,
    viaCep: {
      data: null,
      message: action.payload.message,
      status: RequestStatus.error
    }
  }))
  .handleAction(clearAddress, state => ({
    ...state,
    viaCep: { data: null, message: null, status: RequestStatus.idle }
  }))
  .handleAction(createClientAddressAction.failure, (state, action) => ({
    ...state,
    createClientAddress: {
      data: null,
      message: action.payload.message,
      status: RequestStatus.error
    }
  }))
  .handleAction(createClientAddressAction.request, state => ({
    ...state,
    createClientAddress: {
      data: null,
      message: null,
      status: RequestStatus.fetching
    }
  }))
  .handleAction(createClientAddressAction.success, (state, action) => ({
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
  .handleAction(updateClientAddressAction.request, state => ({
    ...state,
    updateClientAddress: {
      data: null,
      message: null,
      status: RequestStatus.fetching
    }
  }))
  .handleAction(updateClientAddressAction.success, (state, action) => ({
    ...state,
    updateClientAddress: {
      data: action.payload,
      message: null,
      status: RequestStatus.success
    }
  }))
  .handleAction(updateClientAddressAction.failure, (state, action) => ({
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
  }));

export default addressReducer;
