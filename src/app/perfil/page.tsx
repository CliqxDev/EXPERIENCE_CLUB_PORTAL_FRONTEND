'use client';

import { Spinner } from 'components/ui/Spinner';
import {
  useCreateClientAddress,
  useUpdateClientAddress
} from 'hook/selectors/addressHooks';
import { useChangePassword } from 'hook/selectors/authHooks';
import { useUpdateClient } from 'hook/selectors/clientHooks';
import { RequestStatus } from 'models/iRequest';
import Perfil from 'pages/perfil/PerfilPage';

export default function PerfilPage() {
  const { status: statusUpdateClientAuth } = useUpdateClient();
  const { status: statusUpdateClientAddress } = useUpdateClientAddress();
  const { status: statusCreateClientAddress } = useCreateClientAddress();
  const { status: statusChangePassword } = useChangePassword();
  const fetch = RequestStatus.fetching;

  const isLoading =
    statusUpdateClientAuth === fetch ||
    statusUpdateClientAddress === fetch ||
    statusChangePassword === fetch ||
    statusCreateClientAddress === fetch;

  return (
    <Spinner active={isLoading || false}>
      <Perfil />
    </Spinner>
  );
}
