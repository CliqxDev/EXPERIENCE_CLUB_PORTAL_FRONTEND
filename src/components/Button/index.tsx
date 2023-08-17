import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

import * as S from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: 'default' | 'link' | 'secondary';
  fullWidth?: boolean;
};

const Button: FC<ButtonProps> = ({
  children,
  fullWidth,
  variant = 'default',
  ...others
}) => (
  <S.Wrapper fullWidth={fullWidth}>
    <S.Button {...others} variant={variant} fullWidth={fullWidth}>
      {children}
    </S.Button>
  </S.Wrapper>
);

export default Button;
