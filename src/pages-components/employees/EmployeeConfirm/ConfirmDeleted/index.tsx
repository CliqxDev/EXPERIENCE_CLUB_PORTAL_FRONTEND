
import Button from 'components/ui/Button';
import * as S from './styles';
import { SubTitleCard, TitleCard } from '../ConfirmAdded/styles';

const ConfirmDeleted = () => (
  <>
    <S.DeletedCard>
      <S.TopCard>
        <TitleCard>Conta excluída</TitleCard>
        <S.TileDeleted>Você excluiu um colaborador das suas licenças</S.TileDeleted>
      </S.TopCard>
      <SubTitleCard style={{ padding: '16px' }}>Os dados foram excluídos do nosso banco de informações.</SubTitleCard>
    </S.DeletedCard>
    <S.BottomCard>
      <Button fullwidth>
        Ok
      </Button>
    </S.BottomCard>
  </>
);

export default ConfirmDeleted;