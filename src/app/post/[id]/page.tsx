'use client';

import { Spinner } from 'components/ui/Spinner';
import { useSigIn } from 'hook/selectors/authHooks';
import { RequestStatus } from 'models/iRequest';
import Post from 'pages-components/Post';

export default function Pade() {
  const { status } = useSigIn();
  const isLoading = status === RequestStatus.fetching;
  return (
    <Spinner active={isLoading || false}>
      <Post />
    </Spinner>
  );
}
