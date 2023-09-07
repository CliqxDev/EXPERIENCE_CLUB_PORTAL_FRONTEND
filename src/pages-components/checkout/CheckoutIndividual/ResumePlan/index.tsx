import * as S from './styles';

const ResumePlan = () => (
  <S.Wrapper>
    <S.Box>
      <S.Header>
        <h2>
          Plano <br />
          individual
        </h2>
        <S.HeaderDescription>
          <p>
            10x <span> de R$</span> <strong>49,90</strong>
          </p>
          <p>
            <span>ou R$</span> 499,00
          </p>
        </S.HeaderDescription>
      </S.Header>
      <S.Content>
        <S.Row>
          <p>Tipo</p>
          <p>Individual</p>
        </S.Row>
        <S.Row>
          <p>Período</p>
          <p>Anual (12 meses)</p>
        </S.Row>
        <S.Row>
          <p>Valor</p>
          <p>499,00</p>
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

export default ResumePlan;
