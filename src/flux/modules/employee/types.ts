import { IRequest } from "models/iRequest";

export type AddEmployeeInRequest = {
  email: string;
  name: string;
}

export type AddEmployeeInResponse = {
  id: number;
  email: string;
  name: string;
  subscription_user_plan_id: string;
  user: number;
  subscription_user_plan: number;
  company: number;
}

export type EmployeeInfo = {
  slice: any;
  id: number;
  email: string;
  name: string;
  subscription_user_plan_id: string;
  user: number;
  subscription_user_plan: number;
  company: number;
}

export type EmployeeInfoRequest = {
  phone?: string;
  role?: string;
}

export type AddEmployee = {
  addEmployee: IRequest<AddEmployeeInRequest>;
  employeeInfo: IRequest<EmployeeInfo>;
}