'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import FormLayout from 'components/ui/FormLayout';
import Sticker from 'components/ui/Sticker';
import Button from 'components/ui/Button';
import { useAppDispatch } from 'hook/store';
import { clearClientInfo, clearSigIn } from 'flux/modules/auth/actions';
import {
  clearAssignNewsletter,
  clearDeleteClient
} from 'flux/modules/client/actions';
import { logout } from 'utils/services/auth';
import * as S from './styles';

export default function Page() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(clearClientInfo());
    dispatch(clearSigIn());
    dispatch(clearAssignNewsletter());
    dispatch(clearDeleteClient());
    logout();
  }, []);

  return (
    <>
      <Sticker bottom="14rem" padding="0">
        <S.Header>
          <h1>Conta excluída</h1>
          <h2>Você não faz mais parte da nossa plataforma</h2>
        </S.Header>
        <S.Footer>
          Suas informações foram excluídas do nosso banco de dados.
        </S.Footer>
      </Sticker>
      <FormLayout onRedirectPath="/perfil">
        <S.Action>
          <Link href="/" passHref>
            <Button fullwidth>Ok</Button>
          </Link>
        </S.Action>
      </FormLayout>
    </>
  );
}
