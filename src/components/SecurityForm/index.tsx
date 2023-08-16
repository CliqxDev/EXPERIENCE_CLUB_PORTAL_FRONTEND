/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-shadow */
import { useState } from 'react';
import { useFormik } from 'formik'
import { forEach } from 'lodash';
import { securityProfileSchema } from 'utils/schemas';

import Button from 'components/Button';
import Input from 'components/Input';
import PasswordRules from 'components/PasswordRules';
import { PasswordRule } from 'components/PasswordRules/types';

import * as S from './styles';

const SecurityForm = () => {
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

        <PasswordRules password={formik.values.password} onChangePassword={(param) => setPasswordRule(param)} />

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
        <Button
          style={{ width: '96%', marginTop: '2rem' }}
          disabled={!(formik.isValid && formik.dirty) || !isValidPasswordRule()}
          type="submit"
        >
          Salvar
        </Button>
      </S.FormContent>
    </S.ContentSecurity>
  );
}

export default SecurityForm;
