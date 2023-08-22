/* eslint-disable @typescript-eslint/no-unused-vars */
import { Fragment, useState } from 'react';
import Link from 'next/link';

import { uniqueId } from 'lodash';
import Button from 'components/ui/Button';
import * as S from './styles';
import { SelectedTypePlan } from './types';
import { Card } from '../CardRegister';

const Register = () => {
  const [planType, setPlanType] = useState<SelectedTypePlan>('YEARLY');

  const handleChangeTypePlan = (planSelected: SelectedTypePlan) =>
    setPlanType(planSelected);

  const verifyVariantButton = (buttonSelected: SelectedTypePlan) =>
    (buttonSelected === planType && planType) || 'DEFAULT';

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
    }
  ];

  const priceForUsers = [
    {
      id: '50+',
      labelUsers: '+ 50 usuários',
      priceInstallments: '29',
      priceAll: '299'
    },
    {
      id: '11-50',
      labelUsers: '11 a 50 usuários',
      priceInstallments: '39',
      priceAll: '399'
    },
    {
      id: '10',
      labelUsers: 'até 10 usuários',
      priceInstallments: '49',
      priceAll: '499'
    }
  ];

  return (
    <S.Wrapper>
      <Card.Root>
        <Card.Title>Escolha seu plano</Card.Title>
        <Card.Subtitle>
          Temos planos individuais e corporativos. Aumente o conhecimento da sua equipe.
        </Card.Subtitle>
      </Card.Root>

      <S.ButtonWrapper>
        {buttonsType.map(button => (
          <S.ButtonSelect
            key={uniqueId()}
            onClick={button.action}
            variant={button.variant}
          >
            {button.label}
          </S.ButtonSelect>
        ))}
      </S.ButtonWrapper>

      <Card.Root variant="lightDark">
        <S.PlanPrice>
          <Card.Title
            size={planType === 'YEARLY' ? 'md' : 'sm'}
            variant="lightDark"
          >
            Plano individual
          </Card.Title>

          {planType === 'YEARLY' ? (
            <Card.PriceYearly priceInstallments="49" priceAll="499" />
          ) : (
            <Card.PriceMonthly priceAll="49" />
          )}
        </S.PlanPrice>
        <S.DescriptionPlan>
          Você terá acesso ao melhor conteúdo de negócios.
          Fique por dentro do que acontece no mercado
        </S.DescriptionPlan>

        <Link href="/register/personal-data/individual" passHref>
          <Button onClick={() => { }} id="next-step">
            Adquirir plano individual
          </Button>
        </Link>
        {planType === 'YEARLY' && (
          <S.EconomyPlan>
            Economize{' '}<span>2 mensalidades</span>{' '}no plano anual
          </S.EconomyPlan>
        )}
      </Card.Root>

      <Card.Root variant="dark">
        <Card.Title size="md" variant="lightDark">
          Plano corporativo
        </Card.Title>
        <Card.Subtitle size="md" variant="gray">
          Sua equipe muito bem-informada. 
          Entrevistas, reportagens, tendências, vídeos, modelos de negócios inovadores
        </Card.Subtitle>

        {priceForUsers.map((priceUsers, idx) => (
          <Fragment key={uniqueId()}>
            <S.PriceForUsers>
              <h4>{priceUsers.labelUsers}</h4>
              {planType === 'YEARLY' ? (
                <Card.PriceYearly
                  priceInstallments={priceUsers.priceInstallments}
                  priceAll={priceUsers.priceAll}
                  forUserSpan="Valor por usuário"
                />
              ) : (
                <Card.PriceMonthly
                  priceAll={priceUsers.priceInstallments}
                  forUserSpan="Valor por usuário"
                />
              )}
            </S.PriceForUsers>
            {idx < priceForUsers.length - 1 && <S.Line />}
          </Fragment>
        ))}

        <Link href="/register/personal-data/corp" passHref>
          <Button onClick={() => { }} id="next-step">
          Adquirir planos corporativos
          </Button>
        </Link>
        {planType === 'YEARLY' && (
          <S.EconomyPlan>
            Economize <span>2 mensalidades</span> por usuário
          </S.EconomyPlan>
        )}
      </Card.Root>
    </S.Wrapper>
  );
};

export default Register;
