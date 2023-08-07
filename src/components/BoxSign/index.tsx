import Link from 'next/link';

import Button from 'components/Button';

import * as S from './styles';

const BoxSign = () => (
  <S.Wrapper>
    <span>
      Embarque agora na <br />
      transformação.
    </span>
    <Link href="/sigin" passHref>
      <Button onClick={() => {}} id="sign">
        Entrar
      </Button>
    </Link>
  </S.Wrapper>
);

export default BoxSign;
