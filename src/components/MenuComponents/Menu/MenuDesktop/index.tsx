/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import { uniqueId } from 'lodash';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { useAppDispatch } from 'hook/store';
import { logout } from 'utils/services/auth';

import { clearClientInfo, clearSigIn } from 'flux/modules/auth/actions';
import * as S from './styles';

import arrowRightIcon from '../../../../../public/img/arrow-right-gray.svg'

const DEFAULT_MENU = [
  {
    label: 'Perfil',
    path: '/perfil'
  },
  {
    label: 'Colaboradores',
    path: '/employees'
  },
  // {
  //   label: 'Assinatura',
  //   path: '/'
  // },
  {
    label: 'Sobre',
    path: '/'
  },
  {
    label: 'Planos',
    path: '/'
  },
];

const MenuDesktop = () => {
  const dispatch = useAppDispatch();
  const [isLogged, setIsLogger] = useState(false);
  const [menuList, setMenuList] = useState(DEFAULT_MENU);

  const handleLogout = () => {
    dispatch(clearClientInfo());
    dispatch(clearSigIn());
    logout();
    setIsLogger(false);
    redirect('/')
  };

  return (
    <S.WrapperDesktop>
      {menuList.map(({ path, label }) => (
        <S.MenuList key={uniqueId()}>
          <Link href={path} passHref style={{ textDecoration: 'none' }}>
            <S.MenuLabel>
              <span>{label}</span>
              <Image
                src={arrowRightIcon}
                alt="Acesso"
              />
            </S.MenuLabel>
          </Link>
        </S.MenuList>
      ))}
      <S.MenuList>
        <S.MenuLabel onClick={handleLogout} style={{ cursor: 'pointer' }}>
          <span>Sair</span>
          <Image
            src={arrowRightIcon}
            alt="Acesso"
          />
        </S.MenuLabel>
      </S.MenuList>
    </S.WrapperDesktop>
  );
};
export default MenuDesktop;
