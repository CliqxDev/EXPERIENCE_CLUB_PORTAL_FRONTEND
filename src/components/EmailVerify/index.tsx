import Link from 'next/link';

import Button from 'components/Button';

import * as S from './styles';

const EmailVerify = () => (
  <S.Wrapper>
    <h1>Verifique seu e-mail</h1>
    <h2>
      Enviamos o link para seu e-mail, <br />
      confirme a criação de sua conta.
    </h2>
    <Link href="/register" passHref>
      <Button>Ok</Button>
    </Link>
  </S.Wrapper>
);

export default EmailVerify;
