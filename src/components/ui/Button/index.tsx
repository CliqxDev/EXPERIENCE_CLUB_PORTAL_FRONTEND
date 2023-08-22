import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

import * as S from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: 'default' | 'link' | 'secondary';
  fullwidth?: boolean;
};

const Button: FC<ButtonProps> = ({
  children,
  fullwidth,
  variant = 'default',
  ...others
}) => (
  <S.Wrapper fullwidth={fullwidth}>
    <S.Button {...others} variant={variant} fullwidth={fullwidth}>
      {children}
    </S.Button>
  </S.Wrapper>
);

export default Button;