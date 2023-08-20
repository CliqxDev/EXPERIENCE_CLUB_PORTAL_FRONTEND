'use client';

import FormLayout from 'components/ui/FormLayout';
import { Spinner } from 'components/ui/Spinner';
import { useCreateClient } from 'hook/selectors/clientHooks';
import { RequestStatus } from 'models/iRequest';
import FormPersonalData from 'pages/register/FormPersonalData';

export default function Page() {
  const { status } = useCreateClient();
  const isLoading = status === RequestStatus.fetching;

  return (
    <Spinner active={isLoading || false}>
      <FormLayout onRedirectPath="/register" variant="simple">
        <FormPersonalData />
      </FormLayout>
    </Spinner>
  );
}
