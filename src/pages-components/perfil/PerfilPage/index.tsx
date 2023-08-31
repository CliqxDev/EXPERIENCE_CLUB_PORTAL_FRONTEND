'use-client';

import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { redirect } from 'next/navigation';
import DeleteAccount from 'pages-components/perfil/DeleteAccount';
import AddressForm from 'pages-components/perfil/AddressForm';
import Info from 'pages-components/perfil/Header';
import PersonalData from 'pages-components/perfil/PersonalData';
import SecurityForm from 'pages-components/perfil/SecurityForm';
import SubscriberPlan from 'pages-components/perfil/SubscriberPlan';
import Toaster from 'components/ui/Toaster';
import Header from 'components/Header';
import { useAppDispatch } from 'hook/store';
import { deleteClient } from 'flux/modules/client/actions';
import { useDeleteClient } from 'hook/selectors/clientHooks';
import { RequestStatus } from 'models/iRequest';
import { useClientInfo } from 'hook/selectors/authHooks';
import * as S from './styles';
import { Tab } from './types';

const PerfilPage = () => {
  const dispatch = useAppDispatch();
  const { status } = useDeleteClient();
  const { data } = useClientInfo();

  const [tab, setTab] = useState<Tab>('PROFILE');
  const [showModal, setShowModal] = useState(false);
  const [toastType, setToastType] = useState<'success' | 'error'>('error');

  const handleChangeTab = (tabSelected: Tab) => setTab(tabSelected);

  const verifyVariantTab = (tabSelected: Tab) =>
    (tabSelected === tab && tab) || 'DEFAULT';

  const handleDeleteAccount = () => {
    if (data?.id) {
      dispatch(deleteClient.request(data?.id));
    }
  };

  useEffect(() => {
    if (status === RequestStatus.error) {
      setToastType('error');
      toast('Falha ao tentar excluir usuário');
    }

    if (status === RequestStatus.success) {
      redirect('/perfil/delete-account-confirmation');
    }
  }, [status]);

  return (
    <>
      <Header />
      <S.WrapperProfile>
        <S.WrapperResponsive>
          <S.TopNavigation>
            <S.Titles
              onClick={() => handleChangeTab('PROFILE')}
              variant={verifyVariantTab('PROFILE')}
            >
              Perfil
            </S.Titles>
            <S.Titles
              onClick={() => handleChangeTab('ADDRESS')}
              variant={verifyVariantTab('ADDRESS')}
            >
              Endereço
            </S.Titles>
            <S.Titles
              onClick={() => handleChangeTab('SECURITY')}
              variant={verifyVariantTab('SECURITY')}
            >
              Segurança
            </S.Titles>
          </S.TopNavigation>
          <S.Line />
          {tab === 'PROFILE' && (
            <>
              <Info />
              <PersonalData />
              <SubscriberPlan />
              <S.DeleteAccount onClick={() => setShowModal(true)}>
                Excluir conta
              </S.DeleteAccount>
            </>
          )}
          {tab === 'SECURITY' && <SecurityForm />}
          {tab === 'ADDRESS' && <AddressForm />}
        </S.WrapperResponsive>
        <DeleteAccount
          show={showModal}
          onClose={() => setShowModal(false)}
          onSubmit={handleDeleteAccount}
        />
        <Toaster variant={toastType} />
      </S.WrapperProfile>
    </>
  );
};

export default PerfilPage;
