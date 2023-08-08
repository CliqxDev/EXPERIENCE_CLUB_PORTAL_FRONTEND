import { FC } from 'react';

import * as S from './styles';
import { Props } from './types';

export const CardRegisterTitle: FC<Props> = ({
  children,
  variant = 'default',
  size = 'md'
}) => (
  <S.Title size={size} variant={variant}>
    {children}
  </S.Title>
);
