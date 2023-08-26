'use client';

import { Spinner } from 'components/ui/Spinner';
import { useSigIn } from 'hook/selectors/authHooks';
import { RequestStatus } from 'models/iRequest';
import Post from 'pages-components/post/PostPage';

export default function Pade() {
  const { status } = useSigIn();
  const isLoading = status === RequestStatus.fetching;
  return (
    <Spinner active={isLoading || false}>
      <Post />
    </Spinner>
  );
}
