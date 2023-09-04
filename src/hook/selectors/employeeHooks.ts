import { AddEmployeeInRequest, EmployeeInfo } from "flux/modules/collaborator/types";
import { useSelector } from "flux/selector";
import { RootState } from "flux/store";
import { IRequest } from "models/iRequest";

export const useAddEmployee = (): IRequest<AddEmployeeInRequest> =>
  useSelector((state: RootState) => state.employee.addEmployee);

  export const useEmployeeInfo = (): IRequest<EmployeeInfo> =>
  useSelector((state: RootState) => state.employee.employeeInfo);