'use-client';

import React, { useState } from 'react';

import AddressForm from 'pages-components/perfil/AddressForm';
import Info from 'pages-components/perfil/Header';
import PersonalData from 'pages-components/perfil/PersonalData';
import SecurityForm from 'pages-components/perfil/SecurityForm';
import SubscriberPlan from 'pages-components/perfil/SubscriberPlan';

import Header from 'components/Header';
import * as S from './styles';
import { Tab } from './types';

const PerfilPage = () => {
  const [tab, setTab] = useState<Tab>('PROFILE');

  const handleChangeTab = (tabSelected: Tab) => setTab(tabSelected);

  const verifyVariantTab = (tabSelected: Tab) =>
    (tabSelected === tab && tab) || 'DEFAULT';

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
              <S.DeleteAccount>Excluir conta</S.DeleteAccount>
            </>
          )}
          {tab === 'SECURITY' && <SecurityForm />}
          {tab === 'ADDRESS' && <AddressForm />}
        </S.WrapperResponsive>
      </S.WrapperProfile>
    </>
  );
};

export default PerfilPage;
