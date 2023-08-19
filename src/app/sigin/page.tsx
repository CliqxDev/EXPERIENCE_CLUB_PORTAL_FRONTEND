'use client';

import FormLayout from 'components/FormLayout';
import SigIn from 'pages/sigin/SigInPage';
import { Spinner } from 'components/Spinner';
import { useSigIn } from 'hook/selectors/authHooks';
import { RequestStatus } from 'models/iRequest';

export default function SigInPage() {
  const { status } = useSigIn();
  const isLoading = status === RequestStatus.fetching;
  return (
    <Spinner active={isLoading || false}>
      <FormLayout onRedirectPath="/">
        <SigIn />
      </FormLayout>
    </Spinner>
  );
}
