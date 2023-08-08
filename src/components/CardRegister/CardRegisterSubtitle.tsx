import { FC } from 'react';

import * as S from './styles';
import { Props } from './types';

export const CardRegisterSubtitle: FC<Props> = ({
  children,
  variant = 'default'
}) => <S.Subtitle variant={variant}>{children}</S.Subtitle>;
