import { useState } from 'react';
import Button from 'components/ui/Button';
import DeleteAccount from 'pages-components/perfil/DeleteAccount';
import * as S from './styles';
import Header from "../../perfil/Header/index"

const EmployeeInfo = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <S.Wrapper>
      <Header />
      <S.ContainerData>
        <S.FormData>
          <S.Input
            value=""
            type="text"
            placeholder="(00) 0 0000-0000"
            name="cellphone"
            id="cellphone"
            disabled
          />
          <S.Input
            value=""
            type="text"
            placeholder="Administrador"
            name="role"
            id="role"
            disabled
          />
          <Button
            fullwidth
            type="submit"
            disabled
          >
            Salvar
          </Button>
        </ S.FormData>
      </S.ContainerData>
      <S.DeleteAccount onClick={() => setShowModal(true)}>
        Excluir conta
      </S.DeleteAccount>
      <DeleteAccount
        onSubmit={() => { }}
        onClose={() => setShowModal(false)}
        show={showModal}
      />
    </S.Wrapper>
  )
};

export default EmployeeInfo;