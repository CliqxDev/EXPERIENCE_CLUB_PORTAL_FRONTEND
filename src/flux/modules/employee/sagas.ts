/* eslint-disable @typescript-eslint/no-unused-vars */
import { call, put, takeEvery } from "redux-saga/effects";
import { AxiosError } from "axios";
import { addEmployee, employeeInfo } from "./actions";
import { AddEmployeeInResponse, EmployeeInfo } from "./types";
import { getEmployees, postAddEmployee } from "./service";

type AddEmployeeResponseAPI = {
  data: AddEmployeeInResponse;
}

type EmployeeInfoAPI = {
  data: EmployeeInfo;
}

function* addEmployeeSaga({ payload }:
  ReturnType<typeof addEmployee.request>): Generator {
  try {
    const response: AddEmployeeResponseAPI = (yield call(
      postAddEmployee,
      payload
    )) as AddEmployeeResponseAPI;
    yield put(addEmployee.success(response.data));
  } catch (err) {
    const errors = err as Error | AxiosError;
    yield put(addEmployee.failure(errors));
  }
}

function* employeeInfoSaga(): Generator {
  try {
    const response: EmployeeInfoAPI = (yield call(
      getEmployees
    )) as EmployeeInfoAPI;
    yield put(employeeInfo.success(response.data));
  } catch (err) {
    const errors = err as Error | AxiosError;
    yield put(employeeInfo.failure(errors));
  }
}

export default [
  takeEvery(addEmployee.request, addEmployeeSaga),
  takeEvery(employeeInfo.request, employeeInfoSaga),
];