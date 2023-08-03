import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

import * as S from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: 'default' | 'link';
};

const Button: FC<ButtonProps> = ({
  children,
  variant = 'default',
  ...others
}) => (
  <S.Wrapper>
    <S.Button {...others} variant={variant}>
      {children}
    </S.Button>
  </S.Wrapper>
);

export default Button;
