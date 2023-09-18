import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

import * as S from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?:
    | 'default'
    | 'link'
    | 'secondary'
    | 'outline'
    | 'warning'
    | 'warning-outline';
  fullwidth?: boolean;
};

const Button: FC<ButtonProps> = ({
  children,
  fullwidth,
  variant = 'default',
  ...others
}) => (
  <S.Wrapper id="wrapper-button" fullwidth={fullwidth}>
    <S.Button {...others} variant={variant} fullwidth={fullwidth}>
      {children}
    </S.Button>
  </S.Wrapper>
);

export default Button;
