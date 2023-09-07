'use client';

import Link from 'next/link';
import FormLayout from 'components/ui/FormLayout';
import Sticker from 'components/ui/Sticker';
import Button from 'components/ui/Button';

import * as S from './styles';

export default function Page() {
  return (
    <>
      <Sticker bottom="24.3rem" padding="0">
        <S.Header>
          <h1>Houve um problema</h1>
          <h2>
            Alguma instabilidade no serviço ou conexão que impossibilitaram o
            envio das informações
          </h2>
        </S.Header>
      </Sticker>
      <FormLayout onRedirectPath="/">
        <S.Action>
          <h1>Tente novamente</h1>
          <h2>Confirme os dados e sua conexão e refaça seu pedido.</h2>

          <Link href="/" passHref>
            <Button fullwidth>Ok</Button>
          </Link>
        </S.Action>
      </FormLayout>
    </>
  );
}
