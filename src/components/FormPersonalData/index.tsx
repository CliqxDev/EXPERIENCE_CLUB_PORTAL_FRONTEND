/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable simple-import-sort/imports */
/* eslint-disable @typescript-eslint/no-floating-promises */
import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { forEach, isEmpty } from 'lodash';
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

type Rule = 'done' | 'error' | 'default';

type PasswordRule = {
  length: Rule;
  letterAndNumber: Rule;
  upperCaseLetter: Rule;
  specialCharacter: Rule;
};

const FormPersonalData = () => {
  const dispatch = useAppDispatch();
  const { status, message, data } = useSigIn();

  const [errorMessage, setErrorMessage] = useState('');
  const [passwordRule, setPasswordRule] = useState<PasswordRule>({
    length: 'default',
    letterAndNumber: 'default',
    upperCaseLetter: 'default',
    specialCharacter: 'default'
  });

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

  useEffect(() => {
    const { password } = formik.values;
    const format = /[ `!@#$%^&*()_+\-=\\[\]{};':"\\|,.<>\\/?~]/;
    const newRules: PasswordRule = {
      length: 'error',
      letterAndNumber: 'error',
      upperCaseLetter: 'error',
      specialCharacter: 'error'
    };

    if (password.length >= 6) {
      newRules.length = 'done';
    }

    if (password.search(/[A-Z]/) !== -1) {
      newRules.upperCaseLetter = 'done';
    }

    if (password.search(/[0-9]/) !== -1 && password.search(/[a-z]/) !== -1) {
      newRules.letterAndNumber = 'done';
    }

    if (format.test(password)) {
      newRules.specialCharacter = 'done';
    }

    setPasswordRule(newRules);
  }, [formik.values.password]);

  const isValidPasswordRule = () => {
    let isValid = true;
    forEach(passwordRule, rule => {
      if (rule !== 'done') {
        isValid = false;
      }
    });
    return isValid;
  };

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
        type="password"
      />
      <S.PasswordRulesWrapper>
        <S.ItemRule variant={passwordRule.length}>
          • Ter 8 ou mais caracteres
        </S.ItemRule>
        <S.ItemRule variant={passwordRule.letterAndNumber}>
          • Letras e números
        </S.ItemRule>
        <S.ItemRule variant={passwordRule.upperCaseLetter}>
          • Letra maiúscula
        </S.ItemRule>
        <S.ItemRule variant={passwordRule.specialCharacter}>
          • Caracteres especiais (*,!.&%$#@)
        </S.ItemRule>
      </S.PasswordRulesWrapper>
      <Input
        required
        value={formik.values.confirmationPassword}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        label="Confirmação de senha"
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

      <S.TermsWrapper>
        Ao continuar, eu concordo que li e aceito os{' '}
        <span> Termos de uso </span>e a <span>Política de privacidade</span>.
      </S.TermsWrapper>

      <Button
        disabled={!(formik.isValid && formik.dirty) || !isValidPasswordRule()}
        type="submit"
      >
        Cadastrar
      </Button>
      {errorMessage && <FormError>{errorMessage}</FormError>}
    </S.Wrapper>
  );
};

export default FormPersonalData;
