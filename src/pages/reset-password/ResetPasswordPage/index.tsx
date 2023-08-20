import { useEffect } from 'react';
import { useFormik } from 'formik';
import { redirect } from 'next/navigation';
import { toast } from 'react-hot-toast';

import { useAppDispatch } from 'hook/store';
import { recoveryPasswordSchema } from 'utils/schemas';
import Button from 'components/Button';
import Input from 'components/Input';
import { RequestStatus } from 'models/iRequest';
import {
  clearRecoveryPasswordSendEmail,
  recoveryPasswordSendEmail
} from 'flux/modules/auth/actions';
import { useRecoveryPasswordSendEmail } from 'hook/selectors/authHooks';
import Toaster from 'components/Toaster';
import { ErrorMessage } from 'models/errors';
import * as S from './styles';

const ResetPasswordPage = () => {
  const dispatch = useAppDispatch();
  const { status, message } = useRecoveryPasswordSendEmail();

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
      recoveryPasswordSendEmail.request({
        email: formik.values.email
      })
    );
  };

  const formik = useFormik({
    initialValues: {
      email: ''
    },
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: handleSubmit,
    validationSchema: () => recoveryPasswordSchema
  });

  return (
    <S.Wrapper onSubmit={formik.handleSubmit}>
      <h1>Redefinir senha</h1>
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
      <Button
        fullWidth
        disabled={!(formik.isValid && formik.dirty)}
        type="submit"
      >
        Enviar
      </Button>
      <Toaster variant="error" />
    </S.Wrapper>
  );
};

export default ResetPasswordPage;
