import { get, post } from "apis/axios";
import { AddEmployeeInRequest } from "./types";

export const postAddEmployee = (data: AddEmployeeInRequest) =>
  post({
    url: '/companies/collaborators',
    data
  });


  export const getEmployees = () =>
  get({
    url: '/companies/collaborators',
  });