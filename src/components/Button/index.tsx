import { FC, ReactNode } from 'react';

import * as S from './styles';

type ButtonProps = {
  children: ReactNode;
  id?: string;
  onClick: () => void;
};

const Button: FC<ButtonProps> = ({ children, id, onClick }) => (
  <S.Wrapper>
    <S.Button onClick={onClick} id={id}>
      {children}
    </S.Button>
  </S.Wrapper>
);

export default Button;
