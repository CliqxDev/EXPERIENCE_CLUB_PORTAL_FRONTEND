import { Action, createReducer } from 'typesafe-actions';
import { RequestStatus } from 'models/iRequest';
import {
  addEmployee as addEmployeeAction, clearAddEmployee, clearEmployeeInfo, employeeInfo,
} from './actions';
import { AddEmployee } from './types';

const initialState: AddEmployee = {
  addEmployee: { data: null, message: null, status: RequestStatus.idle },
  employeeInfo: { data: null, message: null, status: RequestStatus.idle }
};

const authReducer = createReducer<AddEmployee, Action>(initialState)
  .handleAction(addEmployeeAction.request, state => ({
    ...state,
    addEmployee: { data: null, message: null, status: RequestStatus.fetching }
  }))
  .handleAction(addEmployeeAction.success, (state, action) => ({
    ...state,
    addEmployee: {
      data: action.payload,
      message: null,
      status: RequestStatus.success
    }
  }))
  .handleAction(addEmployeeAction.failure, (state, action) => ({
    ...state,
    addEmployee: {
      data: null,
      message: action.payload.message,
      status: RequestStatus.error
    }
  }))
  .handleAction(clearAddEmployee, state => ({
    ...state,
    addEmployee: {
      data: null,
      message: null,
      status: RequestStatus.idle
    }
  }))
  .handleAction(employeeInfo.request, state => ({
    ...state,
    employeeInfo: { data: null, message: null, status: RequestStatus.fetching }
  }))
  .handleAction(employeeInfo.success, (state, action) => ({
    ...state,
    employeeInfo: {
      data: action.payload,
      message: null,
      status: RequestStatus.success
    }
  }))
  .handleAction(employeeInfo.failure, (state, action) => ({
    ...state,
    employeeInfo: {
      data: null,
      message: action.payload.message,
      status: RequestStatus.error
    }
  }))
  .handleAction(clearEmployeeInfo, state => ({
    ...state,
    clientInfo: {
      data: null,
      message: null,
      status: RequestStatus.idle
    }
  }))

  export default authReducer;