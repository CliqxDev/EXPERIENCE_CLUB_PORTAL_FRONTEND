'use client';

import FormLayout from 'components/FormLayout';
import ResetPasswordPage from 'pages/reset-password/ResetPasswordPage';
import { Spinner } from 'components/Spinner';
import { useRecoveryPasswordSendEmail } from 'hook/selectors/authHooks';
import { RequestStatus } from 'models/iRequest';

export default function Page() {
  const { status } = useRecoveryPasswordSendEmail();
  const isLoading = status === RequestStatus.fetching;
  return (
    <Spinner active={isLoading || false}>
      <FormLayout onRedirectPath="/sigin">
        <ResetPasswordPage />
      </FormLayout>
    </Spinner>
  );
}
