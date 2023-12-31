/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, FC, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { forEach, isEmpty } from 'lodash';
import Title from 'components/ui/Title';
import { useAppDispatch } from 'hook/store';
import { employeeInfo } from 'flux/modules/employee/actions';
import { useEmployeeInfo } from 'hook/selectors/employeeHooks';
import { useClientInfo } from 'hook/selectors/authHooks';
import * as S from './styles';
import employeeImg from '../../../../public/img/employee.svg';
import employeeIconLightblue from '../../../../public/img/employee-icon-lightblue.svg';

type EmployeesDataCard = {
  id: number;
  email: string;
  name: string;
  subscription_user_plan_id: string;
  user: number;
  subscription_user_plan: number;
  company: number;
};

type TitleVariant = {
  variant?: 'default' | 'add';
};

type CardLicenseVariant = {
  variant?: 'default' | 'limit';
};

const EmployeeList: FC<TitleVariant> = ({ variant }) => {
  const dispatch = useAppDispatch();
  const { data: employeesInfo } = useEmployeeInfo();
  const { data } = useClientInfo();
  const [employeeData, setEmployeeData] = useState<EmployeesDataCard[]>([
    {
      id: 0,
      email: '',
      name: '',
      subscription_user_plan_id: '',
      user: 0,
      subscription_user_plan: 0,
      company: 0
    }
  ]);

  useEffect(() => {
    dispatch(employeeInfo.request());
  }, [dispatch, employeeInfo]);

  useEffect(() => {
    if (!isEmpty(employeesInfo)) {
      const newEmployeeData: EmployeesDataCard[] = [];
      forEach(employeesInfo.slice(0, 10), employee => {
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
  }, [employeesInfo, employeeInfo]);

  return (
    <S.Wrapper>
      <Title variant="black400">Colaboradores</Title>
      <S.CardGrid>
        {employeeData.map(employee => (
          <S.Card key={employee.id}>
            <Link
              href="employees/employee-info"
              style={{ textDecoration: 'none' }}
            >
              <Image src={employeeImg} alt={`Colaborador ${employee.name}`} />
              <S.EmployeeName>{employee.name}</S.EmployeeName>
            </Link>
          </S.Card>
        ))}
      </S.CardGrid>
      <S.WarningLicense>
        Você utilizou {employeeData.length} licenças de{' '}
        <strong style={{ color: '#1D1D1B' }}>
          {data?.remaining_vacancy_count} disponíveis
        </strong>
      </S.WarningLicense>

      {(data?.remaining_vacancy_count && data?.remaining_vacancy_count - employeeData.length === 0)
        ?
        <S.CardLicense>
          <S.AddEmployee>
            <S.LimitEmployee variant="limited">
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
              Limite de licença excedido, para aumento de licenças entre em contato com ExpClub.
            </S.TitleLimit>
            {/* <Link href="/plan" style={{ width: '100%' }}>
              <S.AddButton>Adquirir licença</S.AddButton>
            </Link> */}
          </S.CardAddEmployee>
        </S.CardLicense>
        :
        <S.CardLicense>
          <S.AddEmployee>
            <S.LimitEmployee variant="default">
              {data?.remaining_vacancy_count && data?.remaining_vacancy_count - employeeData.length}
            </S.LimitEmployee>
            <S.TitleLimit variant="default">
              Adicione seus colaboradores
            </S.TitleLimit>
          </S.AddEmployee>
          <S.CardAddEmployee variant="default">
            <S.TitleLimit variant="add">
              Você ainda tem licenças que pode compartilhar com seus
              colaboradores
            </S.TitleLimit>
            <Link
              href="employees/new-employee"
              passHref
              style={{ width: '100%' }}
            >
              <S.AddButton>Adicionar colaborador</S.AddButton>
            </Link>
          </S.CardAddEmployee>
        </S.CardLicense>
      }
    </S.Wrapper>
  );
};

export default EmployeeList;
