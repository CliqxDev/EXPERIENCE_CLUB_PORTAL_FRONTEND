'use client';

import FormLayout from 'components/ui/FormLayout';
import ResetPasswordPage from 'pages-components/reset-password/ResetPasswordPage';
import { Spinner } from 'components/ui/Spinner';
import { useRecoveryPasswordSendEmail } from 'hook/selectors/authHooks';
import { RequestStatus } from 'models/iRequest';

export default function Page() {
  const { status } = useRecoveryPasswordSendEmail();
  const isLoading = status === RequestStatus.fetching;
  return (
    <Spinner active={isLoading || false}>
      <FormLayout variant="bottom" onRedirectPath="/sigin">
        <ResetPasswordPage />
      </FormLayout>
    </Spinner>
  );
}
