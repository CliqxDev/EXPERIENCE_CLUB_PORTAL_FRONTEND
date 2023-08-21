import { FC } from 'react';

import * as S from './styles';
import { Props } from './types';

export const CardRegisterRoot: FC<Props> = ({
  children,
  variant = 'default'
}) => <S.Root variant={variant}>{children}</S.Root>;
