'use client';

import { useParams } from 'next/navigation';
import EmailVerify from 'components/EmailVerify';
import FormLayout from 'components/ui/FormLayout';
import Sticker from 'components/ui/Sticker';

export default function Page() {
  const { plan }: any = useParams();

  return (
    <>
      <Sticker bottom="24.6rem">
        <h1>{`Plano ${plan === 'corp' ? 'corporativo' : 'individual'}`}</h1>
        <h2>
          Você está a um passo de ter acesso ao melhor conteúdo de negócios do
          mercado.
        </h2>
      </Sticker>
      <FormLayout onRedirectPath="/">
        <EmailVerify>
          <h2>
            Enviamos o link para seu e-mail, <br />
            confirme a criação de sua conta.
          </h2>
        </EmailVerify>
      </FormLayout>
    </>
  );
}
