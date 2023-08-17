/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import Link from 'next/link';

import Button from 'components/Button';
import { Card } from 'components/CardRegister';

import * as S from './styles';
import { SelectedTypePlan } from './types';

const Register = () => {
  const [planType, setPlanType] = useState<SelectedTypePlan>('YEARLY')

  const handleChangeTypePlan = (planSelected: SelectedTypePlan) => setPlanType(planSelected)

  const verifyVariantButton = (buttonSelected: SelectedTypePlan) =>
    (buttonSelected === planType && planType) || 'DEFAULT'

  const buttonsType = [
    {
      id: 'YEARLY',
      action: () => handleChangeTypePlan('YEARLY'),
      variant: verifyVariantButton('YEARLY'),
      label: 'Anual'
    },
    {
      id: 'MONTHLY',
      action: () => handleChangeTypePlan('MONTHLY'),
      variant: verifyVariantButton('MONTHLY'),
      label: 'Mensal'
    },
  ]

  const priceForUsers = [
    {
      id: '50+',
      labelUsers: '+ 50 usuários',
      priceInstallments: '29',
      priceAll: '299',
    },
    {
      id: '11-50',
      labelUsers: '11 a 50 usuários',
      priceInstallments: '39',
      priceAll: '399',
    },
    {
      id: '10',
      labelUsers: 'até 10 usuários',
      priceInstallments: '49',
      priceAll: '499',
    },
  ]

  return (
    <S.Wrapper>
      <Card.Root>
        <Card.Title>Escolha seu plano</Card.Title>
        <Card.Subtitle>Temos planos que podem atender do individual ao corporativo.</Card.Subtitle>
      </Card.Root>

      <S.ButtonWrapper>
        {buttonsType.map((button) => (
          <S.ButtonSelect key={button.id} onClick={button.action} variant={button.variant}>
            {button.label}
          </S.ButtonSelect>
        ))}
      </S.ButtonWrapper>

      <Card.Root variant="lightDark">
        <S.PlanPrice>
          <Card.Title size={planType === 'YEARLY' ? "md" : "sm"} variant="lightDark">
            Plano individual
          </Card.Title>

          {planType === 'YEARLY'
            ? <Card.PriceYearly priceInstallments="49" priceAll="499" />
            : <Card.PriceMonthly priceAll="49" />
          }
        </S.PlanPrice>
        <S.DescriptionPlan>Você terá acesso a toda a plataforma, muito mais conteúdos e personalização.</S.DescriptionPlan>

        <Link href="/register/personal-data" passHref>
          <Button onClick={() => { }} id="next-step">
            Adquirir plano individual
          </Button>
        </Link>
        {planType === 'YEARLY' && <S.EconomyPlan>Economize <span>2 mensalidades</span></S.EconomyPlan>}
      </Card.Root>

      <Card.Root variant="dark">
        <Card.Title size="md" variant="lightDark">
          Plano corporativo
        </Card.Title>
        <Card.Subtitle size="md" variant="white">
          Possibilita a organização trazer seus líderes para nosso ecossistema.
        </Card.Subtitle>

        {priceForUsers.map((priceUsers) => (
          <>
            <S.PriceForUsers key={priceUsers.id}>
              <h4>{priceUsers.labelUsers}</h4>
              {planType === 'YEARLY' ?
                <Card.PriceYearly priceInstallments={priceUsers.priceInstallments} priceAll={priceUsers.priceAll} forUserSpan="Valor por usuário" />
                :
                <Card.PriceMonthly priceAll={priceUsers.priceInstallments} forUserSpan="Valor por usuário" />
              }
            </S.PriceForUsers>
            <S.Line />
          </>
        ))}

        <Link href="/register/personal-data" passHref>
          <Button onClick={() => { }} id="next-step">
            Adiquirir plano corporativo
          </Button>
        </Link>
        {planType === 'YEARLY' && <S.EconomyPlan>Economize <span>2 mensalidades</span> por usuário</S.EconomyPlan>}
      </Card.Root>

      <S.RegisterFreePlan>
        <p>Cadastre-se gratuitamente para ter mais acesso aos nossos conteúdos.&nbsp;
          <span>Clique aqui para cadastrar-se no plano gratuito.</span></p>
      </S.RegisterFreePlan>
    </S.Wrapper>
  );
};

export default Register;
