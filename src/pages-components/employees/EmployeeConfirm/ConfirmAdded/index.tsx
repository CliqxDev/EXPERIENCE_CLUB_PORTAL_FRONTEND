
import Button from 'components/ui/Button';
import * as S from './styles';

const ConfirmAdded = () => (
  <>
    <S.AddedCard>
      <S.TopCard>
        <S.TitleCard>Um novo colaborador foi adicionado</S.TitleCard>
      </S.TopCard>
      <S.SubTitleCard>Você pode gerenciar seus colaboradores adicionados e sua licenças adquiridas</S.SubTitleCard>
    </S.AddedCard>
    
    <S.CardVerify>
      <S.TitleCard>Enviamos um e-mail</S.TitleCard>
      <S.SubTitleCard>Foi enviado um link para o e-mail cadastrado. Seu colaborador necessita validar seu registo a partir de agora.</S.SubTitleCard>
      <Button fullwidth>
        Ok
      </Button>
    </S.CardVerify>
  </>
);

export default ConfirmAdded;