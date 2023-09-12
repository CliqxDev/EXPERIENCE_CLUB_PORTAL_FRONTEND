/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import { isEmpty, uniqueId } from 'lodash';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { useAppDispatch } from 'hook/store';
import { logout } from 'utils/services/auth';

import { clearClientInfo, clearSigIn } from 'flux/modules/auth/actions';
import { useClientInfo } from 'hook/selectors/authHooks';
import * as S from './styles';

import arrowRightIcon from '../../../../../public/img/arrow-right-gray.svg';

const MenuDesktop = () => {
  const dispatch = useAppDispatch();
  const { data } = useClientInfo();
  const [isLogged, setIsLogger] = useState(false);
  const [menuList, setMenuList] = useState([
    {
      label: '',
      path: ''
    }
  ]);

  useEffect(() => {
    if (!isEmpty(data)) {
      setIsLogger(true);
    }
  }, [data]);

  useEffect(() => {
    const newMenuList = [];

    if (isLogged && !data?.is_admin && !data?.is_premium) {
      newMenuList.push(
        {
          label: 'Minha conta',
          path: '/my-home'
        },
        {
          label: 'Vídeos',
          path: '/'
        },
        {
          label: 'Assine',
          path: '/plan'
        },
        {
          label: 'Eventos',
          path: '/'
        },
      );
    }

    if (isLogged && !data?.is_admin && data?.is_premium) {
      newMenuList.push(
        {
          label: 'Minha conta',
          path: '/my-home'
        },
        {
          label: 'Vídeos',
          path: '/'
        },
        {
          label: 'Biblioteca',
          path: '/'
        },
        {
          label: 'Minhas Trilhas',
          path: '/'
        },
        {
          label: 'Compartilhados',
          path: '/'
        },
        {
          label: 'Assinatura',
          path: '/'
        },
        {
          label: 'Eventos',
          path: '/'
        },
      );
    }

    if (isLogged && data?.is_admin) {
      newMenuList.push(
        {
          label: 'Minha conta',
          path: '/my-home'
        },
        {
          label: 'Vídeos',
          path: '/'
        },
        {
          label: 'Biblioteca',
          path: '/'
        },
        {
          label: 'Minhas Trilhas',
          path: '/'
        },
        {
          label: 'Colaboradores',
          path: '/employees'
        },
        {
          label: 'Compartilhados',
          path: '/'
        },
        // {
        //   label: 'Assinatura',
        //   path: '/'
        // },
        {
          label: 'Eventos',
          path: '/'
        }
      );
    }

    setMenuList(newMenuList);
  }, [isLogged]);

  const handleLogout = () => {
    dispatch(clearClientInfo());
    dispatch(clearSigIn());
    logout();
    setIsLogger(false);
    redirect('/');
  };

  return (
    <S.WrapperDesktop>
      {menuList.map(({ path, label }) => (
        <S.MenuList key={uniqueId()}>
          <Link href={path} passHref style={{ textDecoration: 'none' }}>
            <S.MenuLabel>
              <span>{label}</span>
              <Image src={arrowRightIcon} alt="Acesso" />
            </S.MenuLabel>
          </Link>
        </S.MenuList>
      ))}
      <S.MenuList>
        <S.MenuLabel onClick={handleLogout} style={{ cursor: 'pointer' }}>
          <span>Sair</span>
          <Image src={arrowRightIcon} alt="Acesso" />
        </S.MenuLabel>
      </S.MenuList>
    </S.WrapperDesktop>
  );
};
export default MenuDesktop;
