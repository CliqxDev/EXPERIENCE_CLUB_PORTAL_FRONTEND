import { useEffect, useState } from 'react';
import { useSelectedPlan } from 'hook/selectors/planHooks';
import { Plan } from 'flux/modules/plan/types';
import * as S from './styles';

const ResumePlan = () => {
  const { data } = useSelectedPlan();
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

  useEffect(() => {
    if (data) {
      if (data.length > 0) {
        setSelectedPlan(data[0]);
      }
    }
  }, [data]);

  const sanitizeInstallment = () => {
    if (selectedPlan) {
      if (selectedPlan.qtd_max_installments === 1) {
        return (
          <p>
            <span>R$</span> <strong>49,90</strong>
          </p>
        );
      }

      return (
        <p>
          10x <span> de R$</span> <strong>49,90</strong>
        </p>
      );
    }
    return null;
  };

  const sanitizeValue = () => {
    if (selectedPlan) {
      if (selectedPlan.qtd_max_installments === 1) {
        return null;
      }

      return (
        <p>
          <span>ou R$</span> 499,00
        </p>
      );
    }
    return null;
  };

  return (
    <S.Wrapper>
      {selectedPlan && (
        <S.Box>
          <S.Header>
            <h2>
              Plano <br />
              individual
            </h2>
            <S.HeaderDescription>
              {sanitizeInstallment()}
              {sanitizeValue()}
            </S.HeaderDescription>
          </S.Header>
          <S.Content>
            <S.Row>
              <p>Tipo</p>
              <p>Individual</p>
            </S.Row>
            <S.Row>
              <p>Período</p>
              <p>
                {selectedPlan.qtd_max_installments === 1
                  ? 'Mensal'
                  : 'Anual (12 meses)'}
              </p>
            </S.Row>
            <S.Row>
              <p>Valor</p>
              <p>{selectedPlan.price}</p>
            </S.Row>

            <S.Total>
              <S.TotalLabel>Valor Total</S.TotalLabel>
              <S.TotalDescription>
                {sanitizeInstallment()}
                {sanitizeValue()}
              </S.TotalDescription>
            </S.Total>
          </S.Content>
        </S.Box>
      )}
    </S.Wrapper>
  );
};

export default ResumePlan;
