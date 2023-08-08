import { FC } from 'react';

import * as S from './styles';
import { Props } from './types';

export const CardInspirationDate: FC<Props> = ({ children }) => (
  <S.InspirationDateWrapper>
    <S.InspirationDateWrapperColumn>
      <S.InspirationDateWrapperColumn>
        <h3>Acesso liberado</h3>
        <h3>
          até <strong>{children}</strong>
        </h3>
      </S.InspirationDateWrapperColumn>
    </S.InspirationDateWrapperColumn>
  </S.InspirationDateWrapper>
);
