import Link from 'next/link';

import Button from 'components/ui/Button';

import * as S from './styles';

const BoxSignDesktop = () => (
  <S.WrapperDesktop>
    <Link href="/sigin" passHref>
      <Button onClick={() => {}} id="sign">
        Entrar
      </Button>
    </Link>
  </S.WrapperDesktop>
);

export default BoxSignDesktop;
