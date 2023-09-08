/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-floating-promises */
import Link from 'next/link';
import { useFormik } from 'formik';
import { useState } from 'react';
import axios from 'axios';
import Button from 'components/ui/Button';
import { checkoutCorpSchema } from 'utils/schemas';
import Input from 'components/ui/Input';
import { masks } from 'utils';
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
  const [dataCheckout, setDataCheckout] = useState<CheckoutData[]>([]);
  const [radio, setRadio] = useState('estadual');

  const handleSubmit = () => {
    handleGetCheckout();
  };

  const handleGetCheckout = () => {
    axios
      .get(
        'https://devexpclubplatform.cliqx.com.br/api/subscription-plans/?type=1&qtd_members=1'
      )
      .then(response => {
        setDataCheckout(response.data);
        if (response.data && dataCheckout) {
          window.location.href = `https://checkout.experienceclub.com.br/subscribe/9a07e5c5-d7ab-4a5a-879e-dd34a5adf6df?email=${data?.email}&doc=${formik.values.cpf}`;
        }
      })
      .then(error => {});
  };

  const formik = useFormik({
    initialValues: {
      cnpj: '',
      role: '',
      company: ''
    },
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: handleSubmit,
    validationSchema: () => checkoutCorpSchema
  });

  return (
    <S.Wrapper>
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
      <S.Form onSubmit={formik.handleSubmit}>
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
        <S.RadioGroup>
          <input
            type="radio"
            checked={radio === 'estadual'}
            value="estadual"
            name="choose"
            onChange={() => setRadio('estadual')}
          />
          <label htmlFor="estadual" onClick={() => setRadio('estadual')}>
            Insc. estadual
          </label>
          <input
            type="radio"
            value="municipal"
            name="choose"
            checked={radio === 'municipal'}
            onChange={() => setRadio('municipal')}
          />
          <label htmlFor="municipal" onClick={() => setRadio('municipal')}>
            Insc. municipal
          </label>
        </S.RadioGroup>
        <Input
          value={formik.values.role}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          label={`Inscrição ${radio}`}
          required
          id="role"
          name="role"
          placeholder=""
          fullwidth
          errorMessage={(formik.touched.role && formik.errors.role) || ''}
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
