/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable simple-import-sort/imports */
/* eslint-disable @typescript-eslint/no-floating-promises */
import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { isEmpty } from 'lodash';
import { redirect } from 'next/navigation';
import { clearSigIn, sigIn } from 'flux/modules/sigIn/actions';
import { useAppDispatch } from 'hook/store';
import { personalDataSchema } from 'utils/schemas';
import { useSigIn } from 'hook/selectors/sigInHooks';

import Button from 'components/Button';
import Input from 'components/Input';
import { RequestStatus } from 'models/iRequest';

import { login } from 'utils/services/auth';
import FormError from 'components/FormError';
import { masks } from 'utils/masks';
import * as S from './styles';

const FormPersonalData = () => {
  const dispatch = useAppDispatch();
  const { status, message, data } = useSigIn();

  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (status === RequestStatus.error) {
      if (message === 'Request failed with status code 401') {
        setErrorMessage(
          'E-mail ou senha incorretos. Confirme suas informações ou crie uma conta.'
        );
      } else {
        setErrorMessage('Falha ao tentar efetuar o login');
      }
    }

    if (status === RequestStatus.success && !isEmpty(data)) {
      login(data);
      dispatch(clearSigIn());
      redirect('/');
    }
  }, [status, message, data]);

  const handleSubmit = () => {
    dispatch(
      sigIn.request({
        email: formik.values.email,
        password: formik.values.password
      })
    );
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      cellphone: '',
      birthDate: '',
      role: '',
      name: '',
      password: '',
      confirmationPassword: ''
    },
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: handleSubmit,
    validationSchema: () => personalDataSchema
  });

  return (
    <S.Wrapper onSubmit={formik.handleSubmit}>
      <h1>Plano gratuito</h1>
      <h2>Informe seus dados abaixo</h2>
      <Input
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        label="Nome Completo"
        required
        id="name"
        name="name"
        placeholder=""
        errorMessage={(formik.touched.name && formik.errors.name) || ''}
        spacing="24"
      />
      <Input
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        label="E-mail"
        required
        id="email"
        name="email"
        placeholder=""
        errorMessage={(formik.touched.email && formik.errors.email) || ''}
        spacing="24"
      />
      <Input
        value={formik.values.role}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        label="Telefone"
        id="role"
        name="role"
        placeholder=""
        errorMessage={(formik.touched.role && formik.errors.role) || ''}
        spacing="24"
        inputMode="numeric"
        mask={{ mask: masks.cel.mask, maskPlaceholder: '' }}
      />
      <Input
        value={formik.values.birthDate}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        label="Data de  nascimento"
        id="birthDate"
        name="birthDate"
        placeholder=""
        errorMessage={
          (formik.touched.birthDate && formik.errors.birthDate) || ''
        }
        spacing="24"
        inputMode="numeric"
        mask={{ mask: masks.data.mask, maskPlaceholder: '' }}
      />
      <Input
        required
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        label="Senha"
        id="password"
        name="password"
        placeholder=""
        errorMessage={(formik.touched.password && formik.errors.password) || ''}
        spacing="24"
        type="password"
      />
      <Input
        required
        value={formik.values.confirmationPassword}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        label="Senha"
        id="confirmationPassword"
        name="confirmationPassword"
        placeholder=""
        errorMessage={
          (formik.touched.confirmationPassword &&
            formik.errors.confirmationPassword) ||
          ''
        }
        spacing="24"
        type="password"
      />
      <Button disabled={!(formik.isValid && formik.dirty)} type="submit">
        Cadastrar
      </Button>
      {errorMessage && <FormError>{errorMessage}</FormError>}
    </S.Wrapper>
  );
};

export default FormPersonalData;
