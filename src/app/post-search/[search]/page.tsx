'use client';

import { Spinner } from 'components/ui/Spinner';
import { usePostSearch } from 'hook/selectors/postHooks';
import { RequestStatus } from 'models/iRequest';
import PostSearch from 'pages-components/post/PostSearch';

export default function Page() {
  const { status } = usePostSearch();
  const isLoading = status === RequestStatus.fetching;
  return (
    <Spinner active={isLoading || false}>
      <PostSearch />
    </Spinner>
  );
}
