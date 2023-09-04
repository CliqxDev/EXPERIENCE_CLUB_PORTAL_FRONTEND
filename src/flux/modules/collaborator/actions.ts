import { AxiosError } from "axios";
import { createAction, createAsyncAction } from "typesafe-actions";
import { AddEmployeeInRequest, AddEmployeeInResponse, EmployeeInfo } from "./types";

export const addEmployee = createAsyncAction(
  'ADD_EMPLOYEE_REQUEST',
  'ADD_EMPLOYEE_SUCCESS',
  'ADD_EMPLOYEE_ERROR'
)<AddEmployeeInRequest, AddEmployeeInResponse, Error | AxiosError>();

export const employeeInfo = createAsyncAction(
  'EMPLOYEE_INFO_REQUEST',
  'EMPLOYEE_INFO_SUCCESS',
  'EMPLOYEE_INFO_ERROR'
)<undefined, EmployeeInfo, Error | AxiosError>();

export const clearAddEmployee = createAction('CLEAR_ADD_EMPLOYEE')();
export const clearEmployeeInfo = createAction('CLEAR_EMPLOYEE_INFO')();