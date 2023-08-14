/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-shadow */
import { useEffect, useState } from 'react';
import { useFormik } from 'formik'
import { forEach } from 'lodash';
import { securityProfileSchema } from 'utils/schemas';

import Input from 'components/Input';

import * as S from './styles';

type Rule = 'done' | 'error' | 'default';

type PasswordRule = {
  length: Rule;
  letterAndNumber: Rule;
  upperCaseLetter: Rule;
  specialCharacter: Rule;
};

export function SecurityForm() {
  const [passwordRule, setPasswordRule] = useState<PasswordRule>({
    length: 'default',
    letterAndNumber: 'default',
    upperCaseLetter: 'default',
    specialCharacter: 'default'
  });

  const handleSubmit = () => {
    console.log('asd')
  }

  const formik = useFormik({
    initialValues: {
      currentPassword: '',
      password: '',
      confirmPassword: ''
    },
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: handleSubmit,
    validationSchema: () => securityProfileSchema
  });

  
  useEffect(() => {
    const { password } = formik.values;

    let newRules: PasswordRule = {
      length: 'error',
      letterAndNumber: 'error',
      upperCaseLetter: 'error',
      specialCharacter: 'error'
    };

    if (password) {
      const format = /[ `!@#$%^&*()_+\-=\\[\]{};':"\\|,.<>\\/?~]/;

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
    } else {
      newRules = {
        length: 'default',
        letterAndNumber: 'default',
        upperCaseLetter: 'default',
        specialCharacter: 'default'
      };
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
    <S.ContentSecurity>
      <S.Title>Trocar senha</S.Title>

      {/* SENHA ATUAL  */}
      <S.FormContent>
        <Input
          required
          value={formik.values.currentPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          style={{ width: '95%' }}
          label="Senha atual"
          id="currentPassword"
          name="currentPassword"
          placeholder=""
          errorMessage={(formik.touched.currentPassword && formik.errors.currentPassword) || ''}
          type="password"
        />

        {/* SENHA  */}
        <Input
          required
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          style={{ width: '95%', marginTop: '2rem' }}
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

        {/* CONFIRMAÇÃO DE SENHA  */}
        <Input
          required
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          style={{ width: '95%', marginTop: '2rem' }}
          label="Confirmação de senha"
          id="confirmPassword"
          name="confirmPassword"
          placeholder=""
          errorMessage={(formik.touched.confirmPassword && formik.errors.confirmPassword) || ''}
          type="password"
        />
        <S.SaveButton
          disabled={!(formik.isValid && formik.dirty) || !isValidPasswordRule()}
          type="submit">
          Salvar
        </S.SaveButton>
      </S.FormContent>
    </S.ContentSecurity>
  );
}
