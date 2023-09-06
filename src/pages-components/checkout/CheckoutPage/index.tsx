/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-floating-promises */
import Link from 'next/link';
import { useFormik } from 'formik';
import { isEmpty } from 'lodash';
import { useEffect } from 'react';
import { redirect } from 'next/navigation';
import Button from 'components/ui/Button';
import { checkoutSchema } from 'utils/schemas';
import { useClientInfo } from 'hook/selectors/authHooks';
import { useAppDispatch } from 'hook/store';
import Input from 'components/ui/Input';
import { masks } from 'utils';
import { clearClientCheckoutIndividual, clientCheckoutIndividual } from 'flux/modules/client/actions';
import { useCheckoutIndividualClient } from 'hook/selectors/clientHooks';
import { RequestStatus } from 'models/iRequest';
import ResumePlan from '../ResumePlan';
import * as S from './styles';

const CheckoutPage = () => {
  const dispatch = useAppDispatch();
  const { data } = useClientInfo();
  const { status, data: checkoutData } = useCheckoutIndividualClient();
  
  const handleSubmit = () => {
    dispatch(clientCheckoutIndividual.request())
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
    if (!isEmpty(data)) {
      formik.setFieldValue('name', data.name, false);
      formik.setFieldValue('email', data.email, false);
    }
  }, [data]);

  useEffect(() => {
    if (!isEmpty(checkoutData)) {
      redirect('/register')
    }
  }, [checkoutData, status])

  return (
    <S.Wrapper>
      <S.Header>
        <Link passHref href="/register">
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
      <S.Form onSubmit={formik.handleSubmit}>
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
        <S.Action>
          <Link passHref href="/">
            <Button type="button" variant="warning-outline">
              Cancelar
            </Button>
          </Link>
          <Button type="submit" id="next">Próximo</Button>
        </S.Action>
      </S.Form>
    </S.Wrapper>
  );
};

export default CheckoutPage;
