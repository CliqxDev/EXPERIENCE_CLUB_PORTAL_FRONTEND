import { FC } from 'react';

import * as S from './styles';
import { Props } from './types';

export const CardPriceMonthly: FC<Props> = ({
  style,
  priceInstallments,
  forUserSpan
}) => (
  <S.InspirationDateWrapper style={style}>
    <S.InspirationDateWrapperColumn>
      <S.InspirationDateWrapperColumn>
        <div>
          <p>
            10x <span>de R$ </span>
            <strong>{priceInstallments},</strong>90
          </p>
        </div>
        <span style={{ width: '100%', textAlign: 'right', fontSize: '1.2rem' }}>
          {forUserSpan}
        </span>
      </S.InspirationDateWrapperColumn>
    </S.InspirationDateWrapperColumn>
  </S.InspirationDateWrapper>
);
