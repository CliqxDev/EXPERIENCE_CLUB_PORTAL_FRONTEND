/* eslint-disable @typescript-eslint/no-floating-promises */
import Link from 'next/link';
import { useFormik } from 'formik';
import { isEmpty } from 'lodash';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

import Button from 'components/ui/Button';
import { checkoutSchema } from 'utils/schemas';
import { useClientInfo } from 'hook/selectors/authHooks';
import Input from 'components/ui/Input';
import { masks } from 'utils';
import { useAppDispatch } from 'hook/store';
import { getSpecificPlan } from 'flux/modules/plan/actions';
import { useSelectedPlan } from 'hook/selectors/planHooks';
import { Plan } from 'flux/modules/plan/types';
import ResumePlan from './ResumePlan';
import * as S from './styles';

const CheckoutIndividual = () => {
  const { data: dataClient } = useClientInfo();
  const { data: dataSelectedPlan } = useSelectedPlan();
  const dispatch = useAppDispatch();
  const { plan }: any = useParams();

  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

  const handleSubmit = () => {
    if (selectedPlan) {
      if (selectedPlan.link) {
        window.location.href = `${selectedPlan.link}?email=${dataClient?.email}&doc=${formik.values.cpf}`;
      }
    }
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      cpf: '',
      email: ''
    },
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: handleSubmit,
    validationSchema: () => checkoutSchema
  });

  useEffect(() => {
    if (dataSelectedPlan) {
      if (dataSelectedPlan.length > 0) {
        setSelectedPlan(dataSelectedPlan[0]);
      }
    }
  }, [dataSelectedPlan]);

  useEffect(() => {
    if (!isEmpty(dataClient)) {
      formik.setFieldValue('name', dataClient.name, false);
      formik.setFieldValue('email', dataClient.email, false);
    }
  }, [dataClient]);

  useEffect(() => {
    dispatch(
      getSpecificPlan.request({
        type: plan,
        qtd_members: 1
      })
    );
  }, []);

  return (
    <S.Wrapper onSubmit={formik.handleSubmit}>
      <S.Header>
        <Link passHref href="/plan">
          <Button variant="outline">Planos</Button>
        </Link>
        <Link passHref href="/">
          <img
            src="/img/icon-logo-preto-exp.svg"
            alt="ícone do logo da expclub"
          />
        </Link>
      </S.Header>
      <ResumePlan />
      <S.Form>
        <S.Title>Dados do comprador</S.Title>
        <Input
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          label=""
          disabled
          id="name"
          name="name"
          placeholder=""
          fullwidth
          errorMessage={(formik.touched.name && formik.errors.name) || ''}
          spacing="24"
        />
        <Input
          value={formik.values.cpf}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          label="CPF"
          required
          id="cpf"
          name="cpf"
          placeholder=""
          fullwidth
          errorMessage={(formik.touched.cpf && formik.errors.cpf) || ''}
          inputMode="numeric"
          mask={{ mask: masks.cpf.mask, maskPlaceholder: '' }}
          spacing="24"
        />
        <Input
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          label=""
          disabled
          id="email"
          name="email"
          placeholder=""
          fullwidth
          errorMessage={(formik.touched.email && formik.errors.email) || ''}
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
    </S.Wrapper>
  );
};

export default CheckoutIndividual;