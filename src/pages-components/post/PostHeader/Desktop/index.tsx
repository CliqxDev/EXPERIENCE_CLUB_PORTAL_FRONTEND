'use client';

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

const HeaderDesktopPost = () => {
  const { data } = useClientInfo();
  const [showSearch, setShowSearch] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isLogged, setIsLogger] = useState(false);

  useEffect(() => {
    if (!isEmpty(data)) {
      setIsLogger(true);
    }
  }, [data]);

  return (
    <S.Wrapper id="desktop-header-wrapper">
      <S.Header id="desktop-header-wrapper">
        <Link href="/" passHref>
          <img src="/img/icon-logo-white.svg" alt="ícone do logo da expclub" />
        </Link>

        <S.ActionsWrapper>
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
                fill="#ffffff"
              />
            </svg>
          </ButtonMenu>

          {(isLogged && data && (
            <BoxLoggedDesktop onClick={() => setShowMenu(!showMenu)} />
          )) || (
            <>
              <S.LinksWrapper>
                <Link href="/sobre" passHref>
                  <S.ButtonRegister>Sobre</S.ButtonRegister>
                </Link>
                <Link href="/plan" passHref>
                  <S.ButtonRegister>Plano</S.ButtonRegister>
                </Link>
                <Link href="/register/user" passHref>
                  <S.ButtonRegister>Cadastre-se</S.ButtonRegister>
                </Link>
              </S.LinksWrapper>
              <S.Text>Embarque agora na transformação.</S.Text>
              <BoxSignDesktop />
            </>
          )}
          {showSearch && <SearchMenu onClose={() => setShowSearch(false)} />}
          {showMenu && data && <MenuDesktop />}
        </S.ActionsWrapper>
      </S.Header>
    </S.Wrapper>
  );
};

export default HeaderDesktopPost;
