'use client';

import { useState } from 'react';
import Image from 'next/image';

import { ButtonMenu } from 'components/MenuComponents/ButtonMenu';
import Menu from 'components/MenuComponents/Menu';
import SearchMenu from 'components/SearchMenu';

import headerImg from '../../../public/img/header-exp.png';

import * as S from './styles';

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <S.Wrapper>
      {showSearch && <SearchMenu onClose={() => setShowSearch(false)} />}

      {showMenu && <Menu onClose={() => setShowMenu(false)} />}
      <Image
        alt="Logo Experience Club"
        src={headerImg}
        style={{ marginLeft: '1.4rem' }}
      />

      <svg
        width="67"
        height="48"
        viewBox="0 0 67 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.69967 5.74379H21.1209V0H4V46.0166H21.1209V40.2728H9.69967V5.74379Z"
          fill="#4A4A49"
        />
        <path
          d="M46.834 5.74379H58.2333V40.2728H46.834V46.0166H63.9549V0H46.834V5.74379Z"
          fill="#4A4A49"
        />
        <path
          d="M21.2086 24.0352H25.023V21.4726H21.2086V16.9659H26.1848V14.4033H18.293V31.7451H26.5136V29.1384H21.2086V24.0352Z"
          fill="#4A4A49"
        />
        <path
          d="M38.2415 14.4033H35.3259L33.7037 19.882H33.6598L31.8403 14.4033H28.9247L32.0815 22.6435L28.6836 31.7451H31.5554L33.6598 25.3828H33.7037L35.6986 31.7451H38.5703L35.2821 22.6435L38.2415 14.4033Z"
          fill="#4A4A49"
        />
        <path
          d="M50.5833 19.5065C50.5833 15.8172 48.9172 14.4033 45.2563 14.4033H41.0254V31.7451H43.9848V24.6317H45.2782C48.8953 24.6317 50.5614 23.1736 50.5614 19.4844M45.0809 22.1574H43.9191V16.8334H45.0809C47.032 16.8334 47.58 17.4519 47.58 19.5065C47.58 21.561 47.032 22.1795 45.0809 22.1795"
          fill="#4A4A49"
        />
      </svg>
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
        <ButtonMenu onClick={() => setShowMenu(true)}>
          <svg
            style={{ marginRight: '1.2rem' }}
            width="18"
            height="12"
            viewBox="0 0 18 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 12V10H18V12H0ZM0 7V5H18V7H0ZM0 2V0H18V2H0Z"
              fill="#4A4A49"
            />
          </svg>
        </ButtonMenu>
      </S.Actions>
    </S.Wrapper>
  );
};
export default Header;
