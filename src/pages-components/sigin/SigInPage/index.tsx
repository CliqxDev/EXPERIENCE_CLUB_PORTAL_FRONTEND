/* eslint-disable @typescript-eslint/no-floating-promises */
import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { isEmpty } from 'lodash';
import { redirect, useParams } from 'next/navigation';
import Link from 'next/link';
import { toast } from 'react-hot-toast';

import Toaster from 'components/ui/Toaster';
import { useAppDispatch } from 'hook/store';
import { sigInSchema } from 'utils/schemas';
import Button from 'components/ui/Button';
import Checkbox from 'components/ui/Checkbox';
import Input from 'components/ui/Input';
import { RequestStatus } from 'models/iRequest';
import { login } from 'utils/services/auth';
import { clearSigIn, sigIn } from 'flux/modules/auth/actions';
import { useSigIn } from 'hook/selectors/authHooks';
import { clearAssignNewsletter } from 'flux/modules/client/actions';
import * as S from './styles';

type UserType = {
  email: string;
  password: string;
};

const SigIn = () => {
  const { plan }: any = useParams();
  const dispatch = useAppDispatch();
  const { status, message, data } = useSigIn();
  const [checkboxStatus, setCheckboxStatus] = useState<boolean | undefined>(
    false
  );

  useEffect(() => {
    if (status === RequestStatus.error) {
      if (message === 'Request failed with status code 401') {
        toast(
          'E-mail ou senha incorretos. Confirme suas informações ou crie uma conta.'
        );
        formik.setFieldError('email', ' ');
        formik.setFieldError('password', ' ');
      } else {
        toast('Falha ao tentar efetuar o login');
      }
    }

    if (status === RequestStatus.success && !isEmpty(data)) {
      login(data);
      dispatch(clearSigIn());
      dispatch(clearAssignNewsletter());
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

    return () => {
      dispatch(clearSigIn());
    };
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

  const handleRedirect = () => {
    if (plan) {
      return `/register/${plan}`;
    }
    return '/register-plan';
  };

  return (
    <S.Wrapper onSubmit={formik.handleSubmit}>
      <h1>Entre no seu perfil</h1>
      <h2>Para ter acesso a todo o conteúdo.</h2>
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
        <Link
          href="/reset-password"
          passHref
          style={{ textDecoration: 'none' }}
        >
          <Button type="button" variant="link">
            Redefinir senha
          </Button>
        </Link>
      </S.Row>
      <Button disabled={!(formik.isValid && formik.dirty)} type="submit">
        Entrar
      </Button>
      <Link
        href={`${handleRedirect()}`}
        passHref
        style={{ textDecoration: 'none' }}
      >
        <Button id="register-btn" variant="link" type="button">
          Ainda não possui uma conta? Clique aqui
        </Button>
      </Link>
      <Toaster variant="error" />
    </S.Wrapper>
  );
};

export default SigIn;
