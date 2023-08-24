'use client';

import ResetPasswordConfirmationPage from 'pages-components/reset-password-confirmation/ResetPasswordConfirmationPage';
import FormLayout from 'components/ui/FormLayout';
import { Spinner } from 'components/ui/Spinner';
import { useResetPassword } from 'hook/selectors/authHooks';
import { RequestStatus } from 'models/iRequest';

export default function Page() {
  const { status } = useResetPassword();
  const isLoading = status === RequestStatus.fetching;
  return (
    <Spinner active={isLoading || false}>
      <FormLayout variant="bottom" onRedirectPath="/">
        <ResetPasswordConfirmationPage />
      </FormLayout>
    </Spinner>
  );
}
