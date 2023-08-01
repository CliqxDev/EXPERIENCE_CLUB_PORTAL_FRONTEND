import { useState } from 'react';

import { ButtonMenu } from 'components/ButtonMenu';
import Menu from 'components/Menu';
import SearchMenu from 'components/SearchMenu';

import * as S from './styles';

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <S.Wrapper>
      {showSearch && <SearchMenu onClose={() => setShowSearch(false)} />}

      {showMenu && <Menu onClose={() => setShowMenu(false)} />}
      <svg
        style={{ marginLeft: '1.2rem' }}
        width="90"
        height="18"
        viewBox="0 0 90 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect y="0.401367" width="90" height="17.1975" fill="url(#pattern0)" />
        <defs>
          <pattern
            id="pattern0"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image0_1744_33406"
              transform="scale(0.00636943 0.0333333)"
            />
          </pattern>
          <image
            id="image0_1744_33406"
            width="157"
            height="30"
            xlinkHref="data:image/png;base64,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"
          />
        </defs>
      </svg>
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
