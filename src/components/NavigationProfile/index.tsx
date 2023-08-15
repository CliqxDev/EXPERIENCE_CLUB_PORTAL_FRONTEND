/* eslint-disable no-nested-ternary */

'use-client'

import React, { useState } from 'react'
import { DeleteAccount } from 'styles/styles';

import AddressForm from 'components/AddressForm';
import InfoProfile from 'components/InfoProfile';
import PersonalData from 'components/PersonalData';
import SecurityForm  from 'components/SecurityForm';
import SubscriberPlan from 'components/SubscriberPlan';

import * as S from './styles'

/* eslint-disable react/jsx-no-bind */
/* eslint-disable @typescript-eslint/no-unused-vars */

export function NavigationProfile() {
  const [profile, setProfile] = useState(true);
  const [address, setAddress] = useState(false);
  const [security, setSecurity] = useState(false);

  function activeProfile() {
    setProfile(true);
    setAddress(false);
    setSecurity(false);
  }

  function activeAddress() {
    setProfile(false);
    setAddress(true);
    setSecurity(false);
  }

  function activeSecurity() {
    setProfile(false);
    setAddress(false);
    setSecurity(true);
  }

  return (
    <S.WrapperProfile>
      <S.TopNavigation>
        <S.Titles onClick={activeProfile} profile={profile}>Perfil</S.Titles>
        <S.Titles onClick={activeAddress} address={address}>Endereço</S.Titles>
        <S.Titles onClick={activeSecurity} security={security}>Segurança</S.Titles>
      </S.TopNavigation>
      <S.Line />
      {
        profile ?
          <>
            <InfoProfile />
            <PersonalData />
            <SubscriberPlan />
            <DeleteAccount>Excluir conta</DeleteAccount>
          </>
          : address ? <AddressForm /> :
            security && <SecurityForm />
      }
    </S.WrapperProfile>
  );
}