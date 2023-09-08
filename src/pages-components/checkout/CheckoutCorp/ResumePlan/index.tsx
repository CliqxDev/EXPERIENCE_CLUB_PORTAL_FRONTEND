import { useState } from 'react';
import * as S from './styles';

const ResumePlan = () => {
  const [counter, setCounter] = useState(1);

  return (
    <S.Wrapper>
      <S.Box>
        <S.HeaderWrapper>
          <h2>Plano Corporativo</h2>
          <h3>Quantos usuários sua empresa necessita?</h3>
          <S.Header>
            <S.CounterWrapper>
              <span>Qtd.</span>
              <S.CounterBox>
                <svg
                  onClick={() => counter > 1 && setCounter(counter - 1)}
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="40" height="40" rx="20" fill="white" />
                  <path
                    d="M24.7917 19.375H15.2083C15.0932 19.375 15 19.4682 15 19.5833V20.4167C15 20.5318 15.0932 20.625 15.2083 20.625H24.7917C24.9068 20.625 25 20.5318 25 20.4167V19.5833C25 19.4682 24.9068 19.375 24.7917 19.375Z"
                    fill="#1D1D1B"
                  />
                </svg>
                <div>{counter}</div>
                <svg
                  onClick={() => setCounter(counter + 1)}
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="40" height="40" rx="20" fill="white" />
                  <path
                    d="M24.7917 19.375H20.625V15.2083C20.625 15.0932 20.5318 15 20.4167 15H19.5833C19.4682 15 19.375 15.0932 19.375 15.2083V19.375H15.2083C15.0932 19.375 15 19.4682 15 19.5833V20.4167C15 20.5318 15.0932 20.625 15.2083 20.625H19.375V24.7917C19.375 24.9068 19.4682 25 19.5833 25H20.4167C20.5318 25 20.625 24.9068 20.625 24.7917V20.625H24.7917C24.9068 20.625 25 20.5318 25 20.4167V19.5833C25 19.4682 24.9068 19.375 24.7917 19.375Z"
                    fill="#1D1D1B"
                  />
                </svg>
              </S.CounterBox>
            </S.CounterWrapper>
            <S.HeaderDescription>
              <p>
                10x <span> de R$</span> <strong>438</strong>
              </p>
              <p>
                <span>ou R$</span> 399,00
              </p>
              <h5>Valor por usuário</h5>
            </S.HeaderDescription>
          </S.Header>
        </S.HeaderWrapper>

        <S.Content>
          <S.Row>
            <p>Tipo</p>
            <p>Corporativo</p>
          </S.Row>
          <S.Row>
            <p>Período</p>
            <p>Anual (12 meses)</p>
          </S.Row>
          <S.Row>
            <p>Valor por usuário</p>
            <p>
              399,00 <span id="off">478,80</span>
            </p>
          </S.Row>
          <S.Row>
            <p>Quantidade</p>
            <p>{counter}</p>
          </S.Row>

          <S.Total>
            <S.TotalLabel>Valor Total</S.TotalLabel>
            <S.TotalDescription>
              <p>
                10x de R$<strong> 49,90</strong>
              </p>
              <p>
                <span>ou R$ 499,00</span>
              </p>
            </S.TotalDescription>
          </S.Total>
        </S.Content>
      </S.Box>
    </S.Wrapper>
  );
};
export default ResumePlan;
