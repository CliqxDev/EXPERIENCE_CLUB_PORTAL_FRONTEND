/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, FC, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { forEach, isEmpty } from 'lodash';
import Title from 'components/ui/Title';
import { useAppDispatch } from 'hook/store';
import { employeeInfo } from 'flux/modules/collaborator/actions';
import { useEmployeeInfo } from 'hook/selectors/employeeHooks';
import * as S from './styles';
import employeeImg from '../../../../public/img/employee.svg'
import employeeIconLightblue from '../../../../public/img/employee-icon-lightblue.svg'

type EmployeesDataCard = {
  id: number;
  email: string;
  name: string;
  subscription_user_plan_id: string;
  user: number;
  subscription_user_plan: number;
  company: number;
}

type TitleVariant = {
  variant?: 'default' | 'add';
}

type CardLicenseVariant = {
  variant?: 'default' | 'limit';
}

const listEmployee = [
  {
    id: '0',
    name: 'Carlos Peixoto'
  },
  {
    id: '1',
    name: 'Carlos Peixoto'
  },
  {
    id: '2',
    name: 'Joana Martins'
  },
  {
    id: '3',
    name: 'Joana Martins'
  },
]

const licenseKeyQtd = 5;

const EmployeeList: FC<TitleVariant> = ({ variant }) => {
  const dispatch = useAppDispatch();
  const { data: employeesInfo } = useEmployeeInfo();
  const [employeeData, setEmployeeData] = useState<EmployeesDataCard[]>([{
    id: 0,
    email: '',
    name: '',
    subscription_user_plan_id: '',
    user: 0,
    subscription_user_plan: 0,
    company: 0
  }]);

  useEffect(() => {
    dispatch(employeeInfo.request())
  }, [dispatch, employeeInfo])

  useEffect(() => {
    if (!isEmpty(employeesInfo)) {
      const newEmployeeData: EmployeesDataCard[] = [];
      forEach(employeesInfo.slice(0, 9), employee => {
        newEmployeeData.push({
          id: employee.id,
          email: employee.email,
          name: employee.name,
          subscription_user_plan_id: employee.subscription_user_plan_id,
          user: employee.user,
          subscription_user_plan: employee.subscription_user_plan,
          company: employee.company
        });
      });
      setEmployeeData(newEmployeeData);
    }
  }, [employeesInfo, employeeInfo])

  return (
    <S.Wrapper>
      <Title variant='black400'>Colaboradores</Title>
      <S.CardGrid>
        {employeeData.map((employee) => (
          <S.Card key={employee.id}>
            <Link href="employees/employee-info" style={{ textDecoration: 'none' }}>
              <Image
                src={employeeImg}
                alt={`Colaborador ${employee.name}`}
              />
              <S.EmployeeName>{employee.name}</S.EmployeeName>
            </Link>
          </S.Card>
        ))}
      </S.CardGrid>
      <S.WarningLicense>
        Você utilizou {listEmployee.length} licenças de{' '}
        <strong style={{ color: '#1D1D1B' }}>{licenseKeyQtd} disponíveis</strong>
      </S.WarningLicense>

      {listEmployee.length >= licenseKeyQtd && (
        <S.CardLicense>
          <S.AddEmployee>
            <S.LimitEmployee>
              <Image
                src={employeeIconLightblue}
                alt="Adicionar mais colaboradores"
              />
            </S.LimitEmployee>
            <S.TitleLimit variant="default">
              Você pode adicionar mais colaboradores
            </S.TitleLimit>
          </S.AddEmployee>
          <S.CardAddEmployee variant="limit">
            <S.TitleLimit variant="add">
              Limite de licenças excedido, porém é possível adicionar mais pessoas.
            </S.TitleLimit>
            <S.AddButton>Adquirir licença</S.AddButton>
          </S.CardAddEmployee>
        </S.CardLicense>
      )}

      {listEmployee.length < licenseKeyQtd && (
        <S.CardLicense>
          <S.AddEmployee>
            <S.LimitEmployee>
              {licenseKeyQtd - listEmployee.length}
            </S.LimitEmployee>
            <S.TitleLimit variant="default">
              Adicione seus colaboradores
            </S.TitleLimit>
          </S.AddEmployee>
          <S.CardAddEmployee variant="default">
            <S.TitleLimit variant="add">
              Você ainda tem licenças que pode compartilhar com seus colaboradores
            </S.TitleLimit>
            <Link href="employees/new-employee" passHref style={{ width: '100%' }}>
              <S.AddButton>Adicionar colaborador</S.AddButton>
            </Link>
          </S.CardAddEmployee>
        </S.CardLicense>
      )}
    </S.Wrapper>
  );
}

export default EmployeeList;