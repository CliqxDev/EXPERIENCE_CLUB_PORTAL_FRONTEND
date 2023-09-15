'use client';

import FormLayout from 'components/ui/FormLayout';
import SigIn from 'pages-components/sigin/SigInPage';
import { Spinner } from 'components/ui/Spinner';
import { useSigIn } from 'hook/selectors/authHooks';
import { RequestStatus } from 'models/iRequest';

export default function SigInPage() {
  const { status } = useSigIn();
  const isLoading = status === RequestStatus.fetching;
  return (
    <Spinner active={isLoading || false}>
      <FormLayout variant='bottom' onRedirectPath="/">
        <SigIn />
      </FormLayout>
    </Spinner>
  );
}
