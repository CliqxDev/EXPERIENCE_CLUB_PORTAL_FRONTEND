'use client';

import { Spinner } from 'components/ui/Spinner';
import { usePostSearch } from 'hook/selectors/postHooks';
import { RequestStatus } from 'models/iRequest';
import Category from 'pages-components/post/Category';

export default function Page() {
  const { status } = usePostSearch();
  const isLoading = status === RequestStatus.fetching;
  return (
    <Spinner active={isLoading || false}>
      <Category />
    </Spinner>
  );
}
