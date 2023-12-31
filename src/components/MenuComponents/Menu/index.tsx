/* eslint-disable import/order */
import { FC, useEffect, useState } from 'react';
import { useAppDispatch } from 'hook/store';
import { isEmpty, uniqueId } from 'lodash';
import Link from 'next/link';
import { logout } from 'utils/services/auth';

import BoxLogged from 'components/MenuComponents/BoxLogged';
import BoxSign from 'components/MenuComponents/BoxSign';
import Button from 'components/ui/Button';
import { ButtonMenu } from 'components/MenuComponents/ButtonMenu';
import LinkMenu from 'components/MenuComponents/LinkMenu';

import * as S from './styles';
import { clearClientInfo, clearSigIn } from 'flux/modules/auth/actions';
import { useClientInfo } from 'hook/selectors/authHooks';
import { clearAssignNewsletter } from 'flux/modules/client/actions';
import { POST_CATEGORIES } from 'models/post';

type SearchMenuProps = {
  onClose: () => void;
};

const Menu: FC<SearchMenuProps> = ({ onClose }) => {
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

    if (!isLogged) {
      newMenuList.push(
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
          label: 'Cadastre-se',
          path: '/register/user',
          target: '_parent'
        },
        {
          label: 'Eventos',
          path: 'https://lp.experienceclub.com.br/',
          target: '_blank'
        }
      );
    }

    if (isLogged && !data?.is_admin && !data?.is_premium) {
      newMenuList.push(
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
    dispatch(clearAssignNewsletter());
    logout();
    setIsLogger(false);
  };

  return (
    <S.Wrapper>
      <S.Header>
        <Link href="/">
          <svg
            width="45"
            height="32"
            viewBox="0 0 45 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.46641 3.82919H14.0806V0H2.66663V30.6777H14.0806V26.8485H6.46641V3.82919Z"
              fill="#1D1D1B"
            />
            <path
              d="M31.2227 3.82919H38.8222V26.8485H31.2227V30.6777H42.6366V0H31.2227V3.82919Z"
              fill="#1D1D1B"
            />
            <path
              d="M14.139 16.0238H16.682V14.3154H14.139V11.3109H17.4565V9.60254H12.1953V21.1638H17.6758V19.4259H14.139V16.0238Z"
              fill="#1D1D1B"
            />
            <path
              d="M25.4944 9.60254H23.5506L22.4692 13.255H22.4399L21.2269 9.60254H19.2832L21.3877 15.096L19.1224 21.1638H21.0369L22.4399 16.9222H22.4692L23.7991 21.1638H25.7136L23.5214 15.096L25.4944 9.60254Z"
              fill="#1D1D1B"
            />
            <path
              d="M33.7222 13.0046C33.7222 10.5451 32.6115 9.60254 30.1708 9.60254H27.3502V21.1638H29.3232V16.4214H30.1854C32.5968 16.4214 33.7075 15.4494 33.7075 12.9899M30.0539 14.772H29.2793V11.2226H30.0539C31.3546 11.2226 31.72 11.635 31.72 13.0046C31.72 14.3743 31.3546 14.7867 30.0539 14.7867"
              fill="#1D1D1B"
            />
          </svg>
        </Link>

        <S.Title>Menu</S.Title>

        <ButtonMenu onClick={onClose}>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z"
              fill="#1A1A19"
            />
          </svg>
        </ButtonMenu>
      </S.Header>

      {(isLogged && <BoxLogged variant="default" />) || <BoxSign />}

      {menuList.map(({ path, label, target }) => (
        <Link target={target} href={path} passHref key={uniqueId()}>
          <LinkMenu>{label}</LinkMenu>
        </Link>
      ))}

      <S.Divider />
      <S.TitleSort>Trilhas</S.TitleSort>
      <S.WrapperTrail>
        {POST_CATEGORIES.map(({ id, label, color }) => (
          <Link href={`/category/${id}`} passHref key={uniqueId()}>
            <LinkMenu variant="sort" color={color}>
              {label}
            </LinkMenu>
          </Link>
        ))}
      </S.WrapperTrail>
      {isLogged && (
        <Button onClick={handleLogout} id="exit">
          Sair
        </Button>
      )}
      <div style={{ paddingBottom: 24 }} />
    </S.Wrapper>
  );
};
export default Menu;
