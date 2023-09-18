'use client';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'next/navigation';
import FormLayout from 'components/ui/FormLayout';
import SigIn from 'pages-components/sigin/SigInPage';
import { Spinner } from 'components/ui/Spinner';
import { useSigIn } from 'hook/selectors/authHooks';
import { RequestStatus } from 'models/iRequest';
import Sticker from 'components/ui/Sticker';
import { emailValidation } from 'flux/modules/auth/actions';

export default function SigInPage() {
  const { token }: any = useParams();
  const dispatch = useDispatch();
  const { status } = useSigIn();
  const isLoading = status === RequestStatus.fetching;

  useEffect(() => {
    dispatch(emailValidation.request(token));
  }, []);
  return (
    <>
      <Sticker bottom="51.6rem">
        <h2>Clique para entrar no portal</h2>
      </Sticker>
      <Spinner active={isLoading || false}>
        <FormLayout variant="bottom" onRedirectPath="/">
          <SigIn />
        </FormLayout>
      </Spinner>
    </>
  );
}
