/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC } from 'react';

import { formatInstallmentsValor } from 'utils/formatString';
import * as S from './styles';
import { Props } from './types';

const sanitizeInstallment = (qtd_max_installments: number) => {
  if (qtd_max_installments > 1) {
    return (
      <>
        {qtd_max_installments}x <span>de R$ </span>
      </>
    );
  }
  return (
    <>
      <span> R$ </span>
    </>
  );
};

export const CardPriceYearly: FC<Props> = ({ style, data, forUserSpan }) => (
  <S.InspirationDateWrapper style={style}>
    {data && (
      <S.InspirationDateWrapperColumn>
        <S.InspirationDateWrapperColumn>
          <p>
            {sanitizeInstallment(data.qtd_max_installments)}
            <strong>
              {formatInstallmentsValor(data.price, data.qtd_max_installments)}
            </strong>
          </p>
          <p>
            <span>ou R$ </span>
            <strong style={{ fontSize: '1.6rem' }}>
              {data.price.replace('.', ',')}
            </strong>
          </p>
          <span
            style={{ width: '100%', textAlign: 'right', fontSize: '1.2rem' }}
          >
            {forUserSpan}
          </span>
        </S.InspirationDateWrapperColumn>
      </S.InspirationDateWrapperColumn>
    )}
  </S.InspirationDateWrapper>
);
