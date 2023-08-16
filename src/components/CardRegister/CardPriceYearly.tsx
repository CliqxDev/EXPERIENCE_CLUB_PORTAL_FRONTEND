/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC } from 'react';

import * as S from './styles';
import { Props } from './types';

export const CardPriceYearly: FC<Props> = ({ children }) => (
  <S.InspirationDateWrapper>
    <S.InspirationDateWrapperColumn>
      <S.InspirationDateWrapperColumn>
        <p>10x <span>de R$ </span><strong>49,</strong>90</p>
        <p><span>ou R$ </span><strong style={{ fontSize: '1.6rem'}}>499,</strong>00</p>
      </S.InspirationDateWrapperColumn>
    </S.InspirationDateWrapperColumn>
  </S.InspirationDateWrapper>
);
