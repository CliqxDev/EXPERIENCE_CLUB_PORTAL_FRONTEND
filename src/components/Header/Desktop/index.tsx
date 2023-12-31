'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { isEmpty } from 'lodash';
import SearchMenu from 'components/SearchMenu';
import { ButtonMenu } from 'components/MenuComponents/ButtonMenu';
import BoxSignDesktop from 'components/MenuComponents/BoxSign/BoxSignDesktop';
import BoxLoggedDesktop from 'components/MenuComponents/BoxLogged/BoxLoggedDesktop';
import { useClientInfo } from 'hook/selectors/authHooks';
import MenuDesktop from 'components/MenuComponents/Menu/MenuDesktop';
import * as S from './styles';
import expLogo from '../../../../public/img/exp-logo-desktop.png';

const HeaderDesktop = () => {
  const { data } = useClientInfo();
  const [showSearch, setShowSearch] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isLogged, setIsLogger] = useState(false);

  useEffect(() => {
    if (!isEmpty(data)) {
      setIsLogger(true);
    }
  }, [data, isLogged]);

  return (
    <S.WrapperDesktop>
      {showSearch && <SearchMenu onClose={() => setShowSearch(false)} />}
      {showMenu && data && <MenuDesktop />}

      <div style={{ background: 'blue', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }} />

      <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <Image
            src={expLogo}
            alt="Exp Club"
            width={200}
            height={90}
          />
        </Link>
      </div>

      <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <S.Actions>
          <ButtonMenu onClick={() => setShowSearch(true)}>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.6 18L10.3 11.7C9.8 12.1 9.225 12.4167 8.575 12.65C7.925 12.8833 7.23333 13 6.5 13C4.68333 13 3.14583 12.3708 1.8875 11.1125C0.629167 9.85417 0 8.31667 0 6.5C0 4.68333 0.629167 3.14583 1.8875 1.8875C3.14583 0.629167 4.68333 0 6.5 0C8.31667 0 9.85417 0.629167 11.1125 1.8875C12.3708 3.14583 13 4.68333 13 6.5C13 7.23333 12.8833 7.925 12.65 8.575C12.4167 9.225 12.1 9.8 11.7 10.3L18 16.6L16.6 18ZM6.5 11C7.75 11 8.8125 10.5625 9.6875 9.6875C10.5625 8.8125 11 7.75 11 6.5C11 5.25 10.5625 4.1875 9.6875 3.3125C8.8125 2.4375 7.75 2 6.5 2C5.25 2 4.1875 2.4375 3.3125 3.3125C2.4375 4.1875 2 5.25 2 6.5C2 7.75 2.4375 8.8125 3.3125 9.6875C4.1875 10.5625 5.25 11 6.5 11Z"
                fill="#4A4A49"
              />
            </svg>
          </ButtonMenu>

          {(isLogged && data && (
            <BoxLoggedDesktop onClick={() => setShowMenu(!showMenu)} />
          )) || (
              <>
                <Link href="/videos" target='_parent' passHref style={{ textDecoration: 'none', marginRight: '2rem' }}>
                  <S.SpanAction style={{ marginLeft: '2rem' }}>Vídeos</S.SpanAction>
                </Link>
                <Link href="/plan" passHref style={{ textDecoration: 'none', marginRight: '2rem' }}>
                  <S.SpanAction>Assine</S.SpanAction>
                </Link>
                <Link target='_blank' href="https://lp.experienceclub.com.br/" style={{ textDecoration: 'none', marginRight: '2rem' }}>
                  <S.SpanAction>Eventos</S.SpanAction>
                </Link>
                <BoxSignDesktop />
              </>
            )}
        </S.Actions>
      </div>
    </S.WrapperDesktop >
  );
};

export default HeaderDesktop;
