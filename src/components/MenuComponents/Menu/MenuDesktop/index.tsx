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
      path: '', 
      target: ''
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
          path: '/my-home',
          target: '_parent'
        },
        {
          label: 'Vídeos',
          path: '/videos',
          target: '_parent'
        },
        {
          label: 'Assine',
          path: '/plan',
          target: '_parent'
        },
        {
          label: 'Eventos',
          path: 'https://lp.experienceclub.com.br/',
          target: '_blank'
        }
      );
    }

    if (isLogged && !data?.is_admin && data?.is_premium) {
      newMenuList.push(
        {
          label: 'Minha conta',
          path: '/my-home',
          target: '_parent'
        },
        {
          label: 'Vídeos',
          path: 'https://experienceclub.vhx.tv/',
          target: '_blank'
        },
        {
          label: 'Biblioteca',
          path: '/',
          target: '_parent'
        },
        {
          label: 'Minhas Trilhas',
          path: '/',
          target: '_parent'
        },
        {
          label: 'Compartilhados',
          path: '/',
          target: '_parent'
        },
        // {
        //   label: 'Assinatura',
        //   path: '/'
        // },
        {
          label: 'Eventos',
          path: 'https://lp.experienceclub.com.br/',
          target: '_blank'
        }
      );
    }

    if (isLogged && data?.is_admin) {
      newMenuList.push(
        {
          label: 'Minha conta',
          path: '/my-home',
          target: '_parent'
        },
        {
          label: 'Vídeos',
          path: 'https://experienceclub.vhx.tv/',
          target: '_blank'
        },
        {
          label: 'Biblioteca',
          path: '/',
          target: '_parent'
        },
        {
          label: 'Minhas Trilhas',
          path: '/',
          target: '_parent'
        },
        {
          label: 'Colaboradores',
          path: '/employees',
          target: '_parent'
        },
        {
          label: 'Compartilhados',
          path: '/',
          target: '_parent'
        },
        // {
        //   label: 'Assinatura',
        //   path: '/'
        // },
        {
          label: 'Eventos',
          path: 'https://lp.experienceclub.com.br/',
          target: '_blank'
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
      {menuList.map(({ path, label, target }) => (
        <S.MenuList key={uniqueId()}>
          <Link target={target} href={path} passHref style={{ textDecoration: 'none' }}>
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
