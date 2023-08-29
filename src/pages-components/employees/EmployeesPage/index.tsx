import { FC, ReactNode } from 'react';
import * as S from './styles';
import HeaderEmployees from '../HeaderEmployees';

type EmployeesProps = {
  children?: ReactNode;
}

const EmployeesPage: FC<EmployeesProps> = ({ children }) => (
  <S.Wrapper>
    <HeaderEmployees />
    {children}
  </S.Wrapper>
);

export default EmployeesPage;