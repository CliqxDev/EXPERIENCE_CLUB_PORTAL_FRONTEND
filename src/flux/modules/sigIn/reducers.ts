/* eslint-disable import/order */
import { IRequest, RequestStatus } from 'models/iRequest';
import { Action, createReducer } from 'typesafe-actions';

import { clearSigIn, sigIn } from './actions';
import { SigInResponse } from './types';

const initialState: IRequest<SigInResponse> = {
  data: null,
  message: null,
  status: RequestStatus.idle
};

const sigInReducer = createReducer<IRequest<SigInResponse>, Action>(
  initialState
)
  .handleAction(sigIn.request, state => ({
    ...state,
    data: null,
    message: null,
    status: RequestStatus.fetching
  }))
  .handleAction(sigIn.success, (state, action) => ({
    ...state,
    data: action.payload,
    message: null,
    status: RequestStatus.success
  }))
  .handleAction(sigIn.failure, (state, action) => ({
    ...state,
    data: null,
    message: action.payload.message,
    status: RequestStatus.error
  }))
  .handleAction(clearSigIn, state => ({
    ...state,
    data: null,
    message: null,
    status: RequestStatus.idle
  }));

export default sigInReducer;
