'use client';

import FormLayout from 'components/ui/FormLayout';
import { Spinner } from 'components/ui/Spinner';
import { useCreateClient } from 'hook/selectors/clientHooks';
import { RequestStatus } from 'models/iRequest';
import FormPersonalData from 'pages-components/register/FormPersonalData';

export default function User() {
  const { status } = useCreateClient();
  const isLoading = status === RequestStatus.fetching;

  return (
    <Spinner active={isLoading || false}>
      <FormLayout onRedirectPath="/" variant="simple">
        <FormPersonalData />
      </FormLayout>
    </Spinner>
  );
}
