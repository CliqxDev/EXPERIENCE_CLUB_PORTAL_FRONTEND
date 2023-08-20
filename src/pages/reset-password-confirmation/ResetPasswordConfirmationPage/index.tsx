import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { redirect } from 'next/navigation';
import { toast } from 'react-hot-toast';

import { forEach } from 'lodash';
import { useAppDispatch } from 'hook/store';
import { resetPasswordSchema } from 'utils/schemas';
import Button from 'components/ui/Button';
import Input from 'components/ui/Input';
import { RequestStatus } from 'models/iRequest';
import {
  clearRecoveryPasswordSendEmail,
  resetPassword
} from 'flux/modules/auth/actions';
import { useResetPassword } from 'hook/selectors/authHooks';
import Toaster from 'components/ui/Toaster';
import { ErrorMessage } from 'models/errors';
import PasswordRules from 'components/PasswordRules';
import { PasswordRule } from 'components/PasswordRules/types';
import * as S from './styles';

const ResetPasswordConfirmationPage = () => {
  const dispatch = useAppDispatch();
  // const {token} = useParams();
  const { status, message } = useResetPassword();

  const [passwordRule, setPasswordRule] = useState<PasswordRule>({
    length: 'default',
    letterAndNumber: 'default',
    upperCaseLetter: 'default',
    specialCharacter: 'default'
  });

  useEffect(() => {
    if (status === RequestStatus.error) {
      toast(ErrorMessage.generic);
    }

    if (status === RequestStatus.success) {
      dispatch(clearRecoveryPasswordSendEmail());

      redirect('/reset-password/email-verify');
    }
  }, [status, message]);

  const handleSubmit = () => {
    dispatch(
      resetPassword.request({
        password: formik.values.password
      })
    );
  };

  const formik = useFormik({
    initialValues: {
      password: '',
      confirmationPassword: ''
    },
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: handleSubmit,
    validationSchema: () => resetPasswordSchema
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
    <S.Wrapper onSubmit={formik.handleSubmit}>
      <h1>Redefinir senha</h1>
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
      <PasswordRules
        password={formik.values.password}
        onChangePassword={param => setPasswordRule(param)}
      />

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

      <Button
        fullWidth
        disabled={!(formik.isValid && formik.dirty) || !isValidPasswordRule()}
        type="submit"
      >
        Enviar
      </Button>
      <Toaster variant="error" />
    </S.Wrapper>
  );
};

export default ResetPasswordConfirmationPage;
