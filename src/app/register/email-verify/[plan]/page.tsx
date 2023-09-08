'use client';

import { useParams } from 'next/navigation';
import EmailVerify from 'components/EmailVerify';
import FormLayout from 'components/ui/FormLayout';
import Sticker from 'components/ui/Sticker';

export default function Page() {
  const { plan }: any = useParams();

  const CORP_TEXT =
    'Sua equipe está a um passo de ter acesso ao melhor conteúdo de negócios do mercado.';
  const INDIVIDUAL_TEXT =
    'Você está a um passo de ter acesso ao melhor conteúdo de negócios do mercado.';

  const textH2: any = {
    1: INDIVIDUAL_TEXT,
    2: INDIVIDUAL_TEXT,
    3: CORP_TEXT,
    4: CORP_TEXT
  };

  const title: any = {
    1: 'Plano individual',
    2: 'Plano individual',
    3: 'Plano corporativo',
    4: 'Plano corporativo'
  };

  return (
    <>
      <Sticker bottom="24.6rem">
        {plan ? <h1>{title[plan]}</h1> : <h1>Cadastro</h1>}
        <h2>{textH2[plan]}</h2>
      </Sticker>
      <FormLayout onRedirectPath="/">
        <EmailVerify>
          <h2>
            Confirme a criação da sua conta <br /> clicando no link enviado.
          </h2>
        </EmailVerify>
      </FormLayout>
    </>
  );
}
