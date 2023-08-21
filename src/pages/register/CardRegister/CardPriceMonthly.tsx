/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC } from 'react';

import * as S from './styles';
import { Props } from './types';

export const CardPriceMonthly: FC<Props> = ({ children, priceAll, priceInstallments, forUserSpan }) => (
  <S.InspirationDateWrapper>
    <S.InspirationDateWrapperColumn>
      <S.InspirationDateWrapperColumn>
        <p><span>R$ </span><strong>{priceAll},</strong>90</p>
        <span style={{ width: '100%', textAlign: 'right', fontSize: '1.2rem' }}>{forUserSpan}</span>
      </S.InspirationDateWrapperColumn>
    </S.InspirationDateWrapperColumn>
  </S.InspirationDateWrapper>
);
