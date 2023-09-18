'use client';

import ReactLoading from 'react-loading';
import FormLayout from 'components/ui/FormLayout';
import Sticker from 'components/ui/Sticker';

import * as S from './styles';

export default function Page() {
  return (
    <FormLayout onRedirectPath="/">
      <Sticker padding="0">
        <S.Header>
          <h1>Processo de compra em andamento</h1>
          <h2>
            Após a conclusão você receberá um e-mail de confirmação e será
            liberado seu acesso
          </h2>
        </S.Header>
      </Sticker>
      <S.Action>
        <h1>Você será redirecionado</h1>
        <h2>Estamos processando as informações, aguarde um segundo.</h2>

        <ReactLoading
          type="spinningBubbles"
          color="rgba(41, 84, 252, 1)"
          height={76}
          width={72}
        />
      </S.Action>
    </FormLayout>
  );
}
