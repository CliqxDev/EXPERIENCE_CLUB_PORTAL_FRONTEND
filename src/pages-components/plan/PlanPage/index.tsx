import { Fragment, useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { findIndex, isEmpty, uniqueId, filter } from 'lodash';

import Button from 'components/ui/Button';
import { useClientInfo } from 'hook/selectors/authHooks';
import { Card } from 'pages-components/register/CardRegister';
import { PlanType } from 'models/plan';
import { useAppDispatch } from 'hook/store';
import { getPlans } from 'flux/modules/plan/actions';
import { usePlans } from 'hook/selectors/planHooks';
import { RequestStatus } from 'models/iRequest';
import { SkeletonPlan } from 'components/ui/Skeleton';
import { Plan } from 'flux/modules/plan/types';
import * as S from './styles';
import { SelectedTypePlan } from './types';

const priceForUsers = [
  {
    id: '50+',
    labelUsers: '+ 50 usuários',
    priceInstallments: '29',
    priceAll: '299'
  },
  {
    id: '11-50',
    labelUsers: '11 a 50 usuários',
    priceInstallments: '39',
    priceAll: '399'
  },
  {
    id: '10',
    labelUsers: 'até 10 usuários',
    priceInstallments: '49',
    priceAll: '499'
  }
];

const PlanPage = () => {
  const dispatch = useAppDispatch();
  const pathname = usePathname();
  const { data } = useClientInfo();
  const { status: planStatus, data: dataStatus } = usePlans();

  const isLoading = planStatus === RequestStatus.fetching;

  const [planType, setPlanType] = useState<SelectedTypePlan>('YEARLY');
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    if (!isEmpty(data)) {
      setIsLogged(true);
    }
  }, [data]);

  useEffect(() => {
    dispatch(getPlans.request());
  }, []);

  const filterIndividualDataStatus = (type: number) => {
    if (dataStatus) {
      const idx = findIndex(dataStatus, ['type', type]);
      return dataStatus[idx];
    }
    return null;
  };

  const filterCorpDataStatus = (type: number) => {
    if (dataStatus) {
      return filter(dataStatus, ['type', type]);
    }
    return [];
  };

  const handleChangeTypePlan = (planSelected: SelectedTypePlan) =>
    setPlanType(planSelected);

  const verifyVariantButton = (buttonSelected: SelectedTypePlan) =>
    (buttonSelected === planType && planType) || 'DEFAULT';

  const buttonsType = [
    {
      id: 'YEARLY',
      action: () => handleChangeTypePlan('YEARLY'),
      variant: verifyVariantButton('YEARLY'),
      label: 'Anual'
    },
    {
      id: 'MONTHLY',
      action: () => handleChangeTypePlan('MONTHLY'),
      variant: verifyVariantButton('MONTHLY'),
      label: 'Mensal'
    }
  ];

  const handleRedirectIndividual = () => {
    const plan =
      planType === 'YEARLY'
        ? PlanType.INDIVIDUAL_YEARLY
        : PlanType.INDIVIDUAL_MONTHLY;
    const path = pathname === '/register-plan' ? 'register' : 'sigin';

    if (isLogged) {
      return `/checkout/${plan}`;
    }
    return `/${path}/${plan}`;
  };

  const handleRedirectCorp = () => {
    const plan =
      planType === 'YEARLY' ? PlanType.CORP_YEARLY : PlanType.CORP_MONTHLY;
    const path = pathname === '/register-plan' ? 'register' : 'sigin';

    if (isLogged) {
      return `/checkout/${plan}`;
    }
    return `/${path}/${plan}`;
  };

  const sanitizeLabelUsersQtd = (item: Plan) => {
    if (item.qtd_max_members <= 10) {
      return `Até  ${item.qtd_max_members} usuários`;
    }
    return `de ${item.qtd_min_members} a ${item.qtd_max_members} usuários`;
  };

  return (
    <>
      {(isLoading && <SkeletonPlan />) ||
        (dataStatus && dataStatus?.length > 0 && (
          <S.Wrapper>
            <Card.Root>
              <Card.Title>Escolha seu plano</Card.Title>
              <Card.Subtitle>
                Temos planos individuais e corporativos. Aumente o conhecimento
                da sua equipe.
              </Card.Subtitle>
            </Card.Root>

            <S.ButtonWrapper>
              {buttonsType.map(button => (
                <S.ButtonSelect
                  key={uniqueId()}
                  onClick={button.action}
                  variant={button.variant}
                >
                  {button.label}
                </S.ButtonSelect>
              ))}
            </S.ButtonWrapper>

            <Card.Root variant="lightDark">
              <S.PlanPrice style={{ alignItems: 'end' }}>
                <Card.Title size="md" variant="lightDark">
                  Plano individual
                </Card.Title>

                {planType === 'YEARLY' ? (
                  <Card.PriceYearly data={filterIndividualDataStatus(1)} />
                ) : (
                  <Card.PriceMonthly data={filterIndividualDataStatus(2)} />
                )}
              </S.PlanPrice>
              <S.DescriptionPlan>
                Você terá acesso ao melhor conteúdo de negócios. Fique por
                dentro do que acontece no mercado
              </S.DescriptionPlan>

              <Link href={`${handleRedirectIndividual()}`} passHref>
                <Button onClick={() => {}} id="next-step">
                  Adquirir plano individual
                </Button>
              </Link>
              {planType === 'YEARLY' && (
                <S.EconomyPlan>
                  Economize 2 mensalidades no plano anual
                </S.EconomyPlan>
              )}
            </Card.Root>

            <Card.Root variant="dark">
              <Card.Title size="md" variant="lightDark">
                Plano corporativo
              </Card.Title>
              <S.DescriptionPlan>
                Sua equipe muito bem-informada. Entrevistas, reportagens,
                tendências, vídeos, modelos de negócios inovadores{' '}
              </S.DescriptionPlan>

              {planType === 'YEARLY' && (
                <div
                  style={{ display: 'flex', flexDirection: 'column-reverse' }}
                >
                  {filterCorpDataStatus(3).map((item, idx) => (
                    <Fragment key={uniqueId()}>
                      <S.PriceForUsers>
                        <h4>{sanitizeLabelUsersQtd(item)}</h4>
                        <Card.PriceYearly
                          data={item}
                          forUserSpan="Valor por usuário"
                        />
                      </S.PriceForUsers>
                      {idx < priceForUsers.length - 1 && <S.Line />}
                    </Fragment>
                  ))}
                </div>
              )}

              {planType === 'MONTHLY' && (
                <div
                  style={{ display: 'flex', flexDirection: 'column-reverse' }}
                >
                  {filterCorpDataStatus(4).map((item, idx) => (
                    <Fragment key={uniqueId()}>
                      <S.PriceForUsers>
                        <h4>{sanitizeLabelUsersQtd(item)}</h4>
                        <Card.PriceMonthly
                          data={item}
                          forUserSpan="Valor por usuário"
                        />
                      </S.PriceForUsers>
                      {idx < priceForUsers.length - 1 && <S.Line />}
                    </Fragment>
                  ))}
                </div>
              )}
              <Link href={`${handleRedirectCorp()}`} passHref>
                <Button onClick={() => {}} id="next-step">
                  Adquirir plano corporativo
                </Button>
              </Link>
              {planType === 'YEARLY' && (
                <S.EconomyPlan>
                  Economize 2 mensalidades por usuário
                </S.EconomyPlan>
              )}
            </Card.Root>
          </S.Wrapper>
        ))}
    </>
  );
};

export default PlanPage;
