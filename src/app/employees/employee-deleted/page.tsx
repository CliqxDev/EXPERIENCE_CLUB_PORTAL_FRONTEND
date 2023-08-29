'use client';

import EmployeeConfirm from "pages-components/employees/EmployeeConfirm";
import ConfirmDeleted from "pages-components/employees/EmployeeConfirm/ConfirmDeleted";

export default function EmployeeDeleted() {
  return (
    <EmployeeConfirm>
      <ConfirmDeleted />
    </EmployeeConfirm>
  );
}
