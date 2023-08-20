'use client';

import ResetPasswordConfirmationPage from 'pages/reset-password-confirmation/ResetPasswordConfirmationPage';
import FormLayout from 'components/FormLayout';
import { Spinner } from 'components/Spinner';
import { useResetPassword } from 'hook/selectors/authHooks';
import { RequestStatus } from 'models/iRequest';

export default function Page() {
  const { status } = useResetPassword();
  const isLoading = status === RequestStatus.fetching;
  return (
    <Spinner active={isLoading || false}>
      <FormLayout onRedirectPath="/">
        <ResetPasswordConfirmationPage />
      </FormLayout>
    </Spinner>
  );
}
