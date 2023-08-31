import { FC, useEffect, useState } from 'react';
import Input from 'components/ui/Input';
import Button from 'components/ui/Button';
import Dialog from 'components/Dialog';
import * as S from './styles';

type Props = {
  onSubmit: () => void;
  onClose: () => void;
  show: boolean;
};

const DeleteAccount: FC<Props> = ({ onClose, onSubmit, show = false }) => {
  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setIsValid(value === 'DELETAR');
  }, [value]);

  return (
    <Dialog show={show} onClose={onClose}>
      <S.Form>
        <S.Title>Excluir conta</S.Title>
        <S.Subtitle>Você tem certeza que deseja excluir esta conta?</S.Subtitle>
        <Input
          fullwidth
          value={value}
          onBlur={() => {}}
          onChange={(e: any) => setValue(e.target.value)}
          label="Digite o texto"
          id="delete"
          name="delete"
          spacing="16"
        />
        <S.AlertMessage>
          É necessário confirmar sua ação escrevendo DELETAR no campo acima. Em
          seguida, clique em Excluir.
        </S.AlertMessage>
        <S.Action>
          <Button
            variant="outline"
            fullwidth
            type="button"
            id="cancel"
            onClick={onClose}
          >
            Cancelar
          </Button>
          <Button
            onClick={onSubmit}
            fullwidth
            type="button"
            variant="warning"
            disabled={!isValid}
          >
            Excluir
          </Button>
        </S.Action>
      </S.Form>
    </Dialog>
  );
};
export default DeleteAccount;
