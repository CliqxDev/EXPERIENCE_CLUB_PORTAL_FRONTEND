/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Title from 'components/ui/Title';
import * as S from './styles';
import employeeIcon from '../../../../public/img/employee.svg'
import employeeIconLightblue from '../../../../public/img/employee-icon-lightblue.svg'

type Card = {
  id: string;
  name: string;
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
  const [cardData, setCardData] = useState<Card[]>([]);

  return (
    <S.Wrapper>
      <Title variant='black400'>Colaboradores</Title>
      <S.CardGrid>
        {listEmployee.map((employee) => (
          <S.Card key={employee.id}>
            <Link href="employees/employee-info" style={{ textDecoration: 'none' }}>
              <Image
                src={employeeIcon}
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