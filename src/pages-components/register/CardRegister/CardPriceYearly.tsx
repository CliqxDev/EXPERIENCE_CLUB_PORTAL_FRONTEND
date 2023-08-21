/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC } from 'react';

import * as S from './styles';
import { Props } from './types';

export const CardPriceYearly: FC<Props> = ({ children, style, priceAll, priceInstallments, forUserSpan }) => (
  <S.InspirationDateWrapper style={style}>
    <S.InspirationDateWrapperColumn>
      <S.InspirationDateWrapperColumn>
        <p>10x <span>de R$ </span><strong>{priceInstallments},</strong>90</p>
        <p><span>ou R$ </span><strong style={{ fontSize: '1.6rem'}}>{priceAll},</strong>00</p>
        <span style={{ width: '100%', textAlign: 'right', fontSize: '1.2rem' }}>{forUserSpan}</span>
      </S.InspirationDateWrapperColumn>
    </S.InspirationDateWrapperColumn>
  </S.InspirationDateWrapper>
);
