/* eslint-disable no-nested-ternary */
import React, { useState } from 'react'
import { DeleteAccount } from 'styles/styles';

import { AddressForm } from 'components/AddressForm';
import { InfoProfile } from 'components/InfoProfile';
import { PersonalData } from 'components/PersonalData';
import { SecurityForm } from 'components/SecurityForm';
import { SubscriberPlan } from 'components/SubscriberPlan';

import { Line, Titles, TopNavigation } from './styles';

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
    <>
      <TopNavigation>
        <Titles onClick={activeProfile} profile={profile}>Perfil</Titles>
        <Titles onClick={activeAddress} address={address}>Endereço</Titles>
        <Titles onClick={activeSecurity} security={security}>Segurança</Titles>
      </TopNavigation>
      <Line />
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
    </>
  );
}