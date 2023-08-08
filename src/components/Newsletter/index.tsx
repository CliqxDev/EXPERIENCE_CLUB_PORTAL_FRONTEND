/* eslint-disable arrow-body-style */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Button from 'components/Button';
import Title from 'components/Title';

import * as S from './styles';

const Newsletter = () => (
  <S.NewsletterWrapper>
    <Title variant='lightCenter'>Inscreva-se na nossa Newsletter!</Title>
    <Button
      style={{ width: '36.4rem', height: '4rem', margin: '2rem auto' }}
      variant='link'
    >
      Cadastrar
    </Button>
  </S.NewsletterWrapper>
);

export default Newsletter;