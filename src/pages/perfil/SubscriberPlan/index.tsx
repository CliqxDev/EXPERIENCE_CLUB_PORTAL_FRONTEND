import Button from 'components/ui/Button';
import * as S from './styles';

const SubscriberPlan = () => (
  <S.PlanWrapper>
    <S.Title>Seja nosso assinante!</S.Title>
    <S.Row>
      <S.Description>
        Conheça nossos planos e tenha muito mais conteúdo.
      </S.Description>
      <Button type="button">Nossos planos</Button>
    </S.Row>
  </S.PlanWrapper>
);

export default SubscriberPlan;
