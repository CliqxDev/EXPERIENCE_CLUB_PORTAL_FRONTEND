import Link from 'next/link';
import * as S from './styles';

const SubscriberPlan = () => (
  <S.PlanWrapper>
    <S.Title>Assine!</S.Title>
    <S.Row>
      <S.Description>
        Conheça nossos planos e tenha acesso ilimitado a todo nosso conteúdo.
      </S.Description>
      <Link href="/plan" passHref style={{ textDecoration: 'none' }}>
        <S.ButtonPlan type="button">
          Conheça <br />
          nossos planos
        </S.ButtonPlan>
      </Link>
    </S.Row>
  </S.PlanWrapper>
);

export default SubscriberPlan;
