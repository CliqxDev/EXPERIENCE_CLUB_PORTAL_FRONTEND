import Link from 'next/link';

import Button from 'components/Button';
import { Card } from 'components/CardRegister';

import * as S from './styles';

const Register = () => (
  <S.Wrapper>
    <Card.Root>
      <Card.Title>Cadastrar-se</Card.Title>
      <Card.Subtitle>
        Venha compartilhar essa jornada de conhecimento.
      </Card.Subtitle>
    </Card.Root>
    <Card.Root variant="dark">
      <Card.Title size="lg" variant="dark">
        Plano promocional
      </Card.Title>
      <Card.InspirationDate>00/00/0000</Card.InspirationDate>
      <S.SubtitleWrapper>
        <Card.Title variant="dark">Acesso liberado</Card.Title>
        <Card.Subtitle variant="dark">
          Quer saber como a <strong>tecnologia + conteúdo </strong>podem
          potencializar a aprendizagem corporativa? Acesse nossa plataforma e
          descubra como queremos transformar a educação empresarial.
        </Card.Subtitle>
      </S.SubtitleWrapper>
      <Link href="/register/step1" passHref>
        <Button onClick={() => {}} id="next-step">
          Acesse por tempo limitado
        </Button>
      </Link>
    </Card.Root>
  </S.Wrapper>
);

export default Register;
