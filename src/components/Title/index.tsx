import { FC } from 'react';

import * as S from './styles';

type TitleProps = {
  children: string;
  variant?: 'black50' | 'black400' | 'light' | 'lightCenter';
};

const Title: FC<TitleProps> = ({
  children,
  variant = 'black400',
}) => (
  <S.Wrapper>
    <S.Title variant={variant}>
      {children}
    </S.Title>
  </S.Wrapper>
);

export default Title;