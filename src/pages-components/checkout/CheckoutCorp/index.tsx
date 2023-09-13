/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-floating-promises */
import Link from 'next/link';
import { useFormik } from 'formik';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

import Toaster from 'components/ui/Toaster';

import Button from 'components/ui/Button';
import { checkoutCorpSchema } from 'utils/schemas';
import Input from 'components/ui/Input';
import { masks } from 'utils';
import { useAppDispatch } from 'hook/store';
import { clearSubscriptionUserPlans, getSpecificPlan, postSubscriptionUserPlans } from 'flux/modules/plan/actions';
import { Plan } from 'flux/modules/plan/types';
import { useClientInfo } from 'hook/selectors/authHooks';
import { useSelectedPlan, useSubscriptionUserPlan } from 'hook/selectors/planHooks';
import { RequestStatus } from 'models/iRequest';
import ResumePlan from './ResumePlan';
import * as S from './styles';

type CheckoutData = {
  id: number;
  link: string;
  name: string;
  price: string;
  type: number;
  period: number;
  description: string;
  is_active: boolean;
  qtd_gifts: number;
  qtd_min_members: number;
  qtd_max_members: number;
  qtd_max_installments: number;
  created_at: string;
  updated_at: string;
};

const CheckoutIndividual = () => {
  const [counter, setCounter] = useState(2);
  const dispatch = useAppDispatch();
  const { plan }: any = useParams();
  const { data: dataSelectedPlan } = useSelectedPlan();
  const { data: dataClient } = useClientInfo();
  const { message, status, data: subscriptionUser } = useSubscriptionUserPlan();

  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

  const handleSubmit = () => {
    dispatch(
      postSubscriptionUserPlans.request({
        subscription_plan: plan,
        qtd_members: counter
      }) 
    );
  };

  const handleCounterQtdMembers = (counterMembers: number) => {
    setCounter(counterMembers);
  }

  const formik = useFormik({
    initialValues: {
      cnpj: '',
      company: ''
    },
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: handleSubmit,
    validationSchema: () => checkoutCorpSchema
  });

  useEffect(() => {
    if (dataSelectedPlan) {
      if (dataSelectedPlan.length > 0) {
        setSelectedPlan(dataSelectedPlan[0]);
      }
    }
  }, [dataSelectedPlan]);

  useEffect(() => {
    if (status === RequestStatus.error) {
      if (message === "Request failed with status code 400") {
        toast(
          'O usuário já tem uma assinatura.'
        );
      }
    }
    
    if (selectedPlan && status === RequestStatus.success) {
      if (selectedPlan.link) {
        window.location.href = `${selectedPlan.link}?email=${dataClient?.email}&doc=${formik.values.cnpj}`;
        dispatch(clearSubscriptionUserPlans());
      }
    }
  }, [status, message, selectedPlan, subscriptionUser]);

  const getPlan = (qtd_members: number) => {
    dispatch(
      getSpecificPlan.request({
        type: plan,
        qtd_members
      })
    );
  };

  useEffect(() => {
    getPlan(2);
  }, []);

  const handleCounter = (newCounter: number) => {
    getPlan(newCounter);
  };

  return (
    <S.Wrapper onSubmit={formik.handleSubmit}>
      <S.Header>
        <Link passHref href="/plan">
          <Button variant="outline">Assine</Button>
        </Link>
        <Link passHref href="/">
          <img
            src="/img/icon-logo-preto-exp.svg"
            alt="ícone do logo da expclub"
          />
        </Link>
      </S.Header>
      <ResumePlan onCounter={handleCounter} counterQtdMembers={handleCounterQtdMembers} />
      <S.Form>
        <S.Title>Dados da empresa</S.Title>
        <Input
          value={formik.values.cnpj}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          label="CNPJ"
          required
          id="cnpj"
          name="cnpj"
          placeholder=""
          fullwidth
          errorMessage={(formik.touched.cnpj && formik.errors.cnpj) || ''}
          inputMode="numeric"
          mask={{ mask: masks.cnpj.mask, maskPlaceholder: '' }}
          spacing="24"
        />
        <Input
          value={formik.values.company}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          label="Razão social"
          required
          id="company"
          name="company"
          placeholder=""
          fullwidth
          errorMessage={(formik.touched.company && formik.errors.company) || ''}
          spacing="24"
        />
      </S.Form>
      <S.Action>
        <Link passHref href="/">
          <Button type="button" variant="warning-outline">
            Cancelar
          </Button>
        </Link>
        <Button type="submit" id="next">
          Próximo
        </Button>
      </S.Action>
      <Toaster variant="error" />
    </S.Wrapper>
  );
};

export default CheckoutIndividual;
