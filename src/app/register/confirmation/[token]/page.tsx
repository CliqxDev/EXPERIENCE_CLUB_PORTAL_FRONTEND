'use client';

import FormLayout from 'components/ui/FormLayout';
import SigIn from 'pages-components/sigin/SigInPage';
import { Spinner } from 'components/ui/Spinner';
import { useSigIn } from 'hook/selectors/authHooks';
import { RequestStatus } from 'models/iRequest';
import Sticker from 'components/ui/Sticker';

export default function SigInPage() {
  const { status } = useSigIn();
  const isLoading = status === RequestStatus.fetching;
  return (
    <>
      <Sticker bottom="51.6rem">
        <h2>Você já faz parte da comunidade [EXP]</h2>
      </Sticker>
      <Spinner active={isLoading || false}>
        <FormLayout variant="bottom" onRedirectPath="/">
          <SigIn />
        </FormLayout>
      </Spinner>
    </>
  );
}
