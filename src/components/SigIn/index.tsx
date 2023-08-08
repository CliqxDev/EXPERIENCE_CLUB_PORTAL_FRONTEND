/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable simple-import-sort/imports */
/* eslint-disable @typescript-eslint/no-floating-promises */
import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { isEmpty } from 'lodash';
import { redirect } from 'next/navigation';
import { clearSigIn, sigIn } from 'flux/modules/sigIn/actions';
import { useAppDispatch } from 'hook/store';
import { sigInSchema } from 'utils/schemas';
import { useSigIn } from 'hook/selectors/sigInHooks';

import Button from 'components/Button';
import Checkbox from 'components/Checkbox';
import Input from 'components/Input';
import { RequestStatus } from 'models/iRequest';

import { login } from 'utils/services/auth';
import FormError from 'components/FormError';
import * as S from './styles';

type UserType = {
  email: string;
  password: string;
};

const SigIn = () => {
  const dispatch = useAppDispatch();
  const { status, message, data } = useSigIn();
  const [checkboxStatus, setCheckboxStatus] = useState<boolean | undefined>(
    false
  );

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

  useEffect(() => {
    const localStorageUser = localStorage.getItem('REMEMBER_SIGN');
    if (localStorageUser !== null) {
      const user: UserType = JSON.parse(localStorageUser);
      formik.setFieldValue('email', user.email, false);
      formik.setFieldValue('password', user.password, false);

      setCheckboxStatus(true);
    }
  }, []);

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
      password: ''
    },
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: handleSubmit,
    validationSchema: () => sigInSchema
  });
  
  return (
    <S.Wrapper onSubmit={formik.handleSubmit}>
      <h1>Entre no seu perfil</h1>
      <h2>e nunca mais perca um conteúdo</h2>
      <Input
        value={formik.values.email}
        onChange={(e: any) => {
          formik.handleChange(e);
          setCheckboxStatus(false);
          localStorage.removeItem('REMEMBER_SIGN');
        }}
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
        required
        value={formik.values.password}
        onChange={(e: any) => {
          formik.handleChange(e);
          setCheckboxStatus(false);
          localStorage.removeItem('REMEMBER_SIGN');
        }}
        onBlur={formik.handleBlur}
        label="Senha"
        id="password"
        name="password"
        placeholder=""
        errorMessage={(formik.touched.password && formik.errors.password) || ''}
        spacing="24"
        type="password"
      />
      <S.Row>
        <Checkbox
          defaultChecked={checkboxStatus}
          onChangeChecked={(checked: boolean) => {
            setCheckboxStatus(checked);
            if (checked) {
              localStorage.setItem(
                'REMEMBER_SIGN',
                JSON.stringify({
                  email: formik.values.email,
                  password: formik.values.password
                })
              );
            } else {
              localStorage.removeItem('REMEMBER_SIGN');
            }
          }}
        >
          Lembrar-me
        </Checkbox>
        <Button variant="link">Redefinir senha</Button>
      </S.Row>
      <Button disabled={!(formik.isValid && formik.dirty)} type="submit">
        Entrar
      </Button>
      <Button id="register-btn" variant="link">
        Ainda não possui uma conta? Clique aqui
      </Button>
      {errorMessage && <FormError>{errorMessage}</FormError>}
    </S.Wrapper>
  );
};

export default SigIn;
