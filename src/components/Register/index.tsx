/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import Link from 'next/link';

import Button from 'components/Button';
import { Card } from 'components/CardRegister';

import * as S from './styles';

const Register = () => {
  const [buttonYearly, setButtonYearly] = useState(true);
  const [buttonMonthly, setButtonMonthly] = useState(false);

  const activeYearlyPlan = () => {
    setButtonYearly(true);
    setButtonMonthly(false);
  }

  const activeMonthlyPlan = () => {
    setButtonYearly(false);
    setButtonMonthly(true);
  }

  return (
    <S.Wrapper>
      <Card.Root>
        <Card.Title>Escolha seu plano</Card.Title>
        <Card.Subtitle>
          Temos planos que podem atender do individual ao corporativo.
        </Card.Subtitle>
      </Card.Root>

      <S.ButtonWrapper>
        <S.ButtonSelect onClick={activeYearlyPlan} yearly={buttonYearly}>Anual</S.ButtonSelect>
        <S.ButtonSelect onClick={activeMonthlyPlan} monthly={buttonMonthly}>Mensal</S.ButtonSelect>
      </S.ButtonWrapper>

      <Card.Root variant="lightDark">
        <S.PlanPrice>
          <Card.Title size="md" variant="lightDark">
            Plano individual
          </Card.Title>

          <Card.PriceYearly />
        </S.PlanPrice>
        <S.DescriptionPlan>Você terá acesso a toda a plataforma, muito mais conteúdos e personalização.</S.DescriptionPlan>
        <Link href="/register/personal-data" passHref>
          <Button onClick={() => { }} id="next-step">
            Adquirir plano individual
          </Button>
        </Link>
        <S.EconomyPlan>Economize <span style={{ textDecoration: 'underline' }}>2 mensalidades</span></S.EconomyPlan>
      </Card.Root>

      <Card.Root variant="dark">
        <Card.Title size="md" variant="lightDark">
          Plano corporativo
        </Card.Title>
        <Card.Subtitle size="md" variant="white">
          Possibilita a organização trazer seus líderes para nosso ecossistema.
        </Card.Subtitle>
      </Card.Root>
    </S.Wrapper >
  );
};

export default Register;
