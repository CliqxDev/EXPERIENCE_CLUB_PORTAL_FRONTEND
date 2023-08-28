'use client';

import AddNewEmployee from "pages-components/employees/AddNewEmployee";
import EmployeesPage from "pages-components/employees/EmployeesPage";

export default function NewEmployee() {
  return (
    <EmployeesPage>
      <AddNewEmployee />
    </EmployeesPage>
  );
}
