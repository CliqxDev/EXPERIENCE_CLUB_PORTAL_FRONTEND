'use-client';

import React, { useState } from 'react';

import AddressForm from 'components/ProfileAddressForm';
import InfoProfile from 'components/ProfileHeader';
import PersonalData from 'components/ProfilePersonalData';
import SecurityForm from 'components/ProfileSecurityForm';
import SubscriberPlan from 'components/SubscriberPlan';

import Header from 'components/Header';
import * as S from './styles';
import { Tab } from './types';

export const NavigationProfile = () => {
  const [tab, setTab] = useState<Tab>('PROFILE');

  const handleChangeTab = (tabSelected: Tab) => setTab(tabSelected);

  const verifyVariantTab = (tabSelected: Tab) =>
    (tabSelected === tab && tab) || 'DEFAULT';

  return (
    <>
      <Header />

      <S.WrapperProfile>
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
            <InfoProfile />
            <PersonalData />
            <SubscriberPlan />
            <S.DeleteAccount>Excluir conta</S.DeleteAccount>
          </>
        )}
        {tab === 'SECURITY' && <SecurityForm />}
        {tab === 'ADDRESS' && <AddressForm />}
      </S.WrapperProfile>
    </>
  );
};
