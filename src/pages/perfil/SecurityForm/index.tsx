import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { forEach } from 'lodash';
import toast from 'react-hot-toast';
import { securityProfileSchema } from 'utils/schemas';
import { useAppDispatch } from 'hook/store';

import Button from 'components/Button';
import Input from 'components/Input';
import PasswordRules from 'components/PasswordRules';
import { PasswordRule } from 'components/PasswordRules/types';

import Toaster from 'components/Toaster';
import { RequestStatus } from 'models/iRequest';
import { useChangePassword } from 'hook/selectors/authHooks';
import { changePassword, clearChangePassword } from 'flux/modules/auth/actions';
import * as S from './styles';

const ProfileSecurityForm = () => {
  const dispatch = useAppDispatch();

  const { status, message } = useChangePassword();

  const [passwordRule, setPasswordRule] = useState<PasswordRule>({
    length: 'default',
    letterAndNumber: 'default',
    upperCaseLetter: 'default',
    specialCharacter: 'default'
  });

  const handleSubmit = () => {
    dispatch(
      changePassword.request({
        old_password: formik.values.currentPassword,
        new_password: formik.values.password
      })
    );
  };

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

  useEffect(() => {
    if (status === RequestStatus.success) {
      toast('Informações atualizadas.');
      dispatch(clearChangePassword());
    }
    if (status === RequestStatus.error) {
      if (message === 'Senha incorreta') {
        formik.setFieldError('currentPassword', message);
      }
    }
  }, [status]);

  return (
    <S.ContentSecurity>
      <S.Title>Trocar senha</S.Title>
      <S.FormContent onSubmit={formik.handleSubmit}>
        <Input
          required
          value={formik.values.currentPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          label="Senha atual"
          id="currentPassword"
          name="currentPassword"
          placeholder=""
          errorMessage={
            (formik.touched.currentPassword && formik.errors.currentPassword) ||
            ''
          }
          type="password"
          spacing="24"
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
          errorMessage={
            (formik.touched.password && formik.errors.password) || ''
          }
          type="password"
        />

        <PasswordRules
          password={formik.values.password}
          onChangePassword={param => setPasswordRule(param)}
        />
        <Input
          required
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          label="Confirmação de senha"
          id="confirmPassword"
          name="confirmPassword"
          placeholder=""
          errorMessage={
            (formik.touched.confirmPassword && formik.errors.confirmPassword) ||
            ''
          }
          type="password"
          spacing="24"
        />
        <Button
          fullWidth
          disabled={!(formik.isValid && formik.dirty) || !isValidPasswordRule()}
          type="submit"
        >
          Salvar
        </Button>
      </S.FormContent>
      <Toaster variant="success" />
    </S.ContentSecurity>
  );
};

export default ProfileSecurityForm;
