import Link from 'next/link';
import * as S from './styles';

const SubscriberPlan = () => (
  <S.PlanWrapper>
    <S.Text>
      <S.Title>Assine!</S.Title>
      <S.Description>
        Conheça nossos planos e tenha acesso ilimitado a todo nosso conteúdo.
      </S.Description>
    </S.Text>

    <Link href="/plan" passHref style={{ textDecoration: 'none' }}>
      <S.ButtonPlan type="button">
        Conheça <br />
        nossos planos
      </S.ButtonPlan>
    </Link>
  </S.PlanWrapper>
);

export default SubscriberPlan;
