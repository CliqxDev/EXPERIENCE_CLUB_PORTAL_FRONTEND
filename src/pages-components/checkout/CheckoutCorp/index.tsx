/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-floating-promises */
import Link from 'next/link';
import { useFormik } from 'formik';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import Button from 'components/ui/Button';
import { checkoutCorpSchema } from 'utils/schemas';
import Input from 'components/ui/Input';
import { masks } from 'utils';
import { useAppDispatch } from 'hook/store';
import { getSpecificPlan } from 'flux/modules/plan/actions';
import { Plan } from 'flux/modules/plan/types';
import { useClientInfo } from 'hook/selectors/authHooks';
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
  const [radio, setRadio] = useState('estadual');
  const dispatch = useAppDispatch();
  const { plan }: any = useParams();
  const { data: dataClient } = useClientInfo();

  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

  const handleSubmit = () => {
    if (selectedPlan) {
      if (selectedPlan.link) {
        window.location.href = `${selectedPlan.link}?email=${dataClient?.email}&doc=${formik.values.cnpj}`;
      }
    }
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
          <Button variant="outline">Planos</Button>
        </Link>
        <Link passHref href="/">
          <img
            src="/img/icon-logo-preto-exp.svg"
            alt="ícone do logo da expclub"
          />
        </Link>
      </S.Header>
      <ResumePlan onCounter={handleCounter} />
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
