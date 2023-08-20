import Link from 'next/link';

import { FC, ReactNode } from 'react';
import Button from 'components/ui/Button';

import * as S from './styles';

const EmailVerify: FC<{ children: ReactNode }> = ({ children }) => (
  <S.Wrapper>
    <h1>Verifique seu e-mail</h1>
    {children}
    <Link href="/" passHref>
      <Button>Ok</Button>
    </Link>
  </S.Wrapper>
);

export default EmailVerify;
