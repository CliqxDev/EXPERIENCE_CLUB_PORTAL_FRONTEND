import { FC } from 'react';

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

export const CardPriceMonthly: FC<Props> = ({ style, forUserSpan, data }) => (
  <S.InspirationDateWrapper style={style}>
    {data && (
      <S.InspirationDateWrapperColumn>
        <S.InspirationDateWrapperColumn>
          <div>
            <p>
              {sanitizeInstallment(data.qtd_max_installments)}
              <strong>{data.price.replace('.', ',')}</strong>
            </p>
          </div>
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
