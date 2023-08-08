/* eslint-disable import/order */
import { IRequest, RequestStatus } from 'models/iRequest';
import { Action, createReducer } from 'typesafe-actions';

import { clearClientInfo, clientInfo } from './actions';
import { ClientInfoResponse } from './types';

const initialState: IRequest<ClientInfoResponse> = {
  data: null,
  message: null,
  status: RequestStatus.idle
};

const clientInfoReducer = createReducer<IRequest<ClientInfoResponse>, Action>(
  initialState
)
  .handleAction(clientInfo.request, state => ({
    ...state,
    data: null,
    message: null,
    status: RequestStatus.fetching
  }))
  .handleAction(clientInfo.success, (state, action) => ({
    ...state,
    data: action.payload,
    message: null,
    status: RequestStatus.success
  }))
  .handleAction(clientInfo.failure, (state, action) => ({
    ...state,
    data: null,
    message: action.payload.message,
    status: RequestStatus.error
  }))
  .handleAction(clearClientInfo, state => ({
    ...state,
    data: null,
    message: null,
    status: RequestStatus.idle
  }));

export default clientInfoReducer;
