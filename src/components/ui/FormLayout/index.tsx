/* eslint-disable @next/next/no-img-element */
import { FC, ReactNode } from 'react';
import Link from 'next/link';

import { ButtonMenu } from 'components/MenuComponents/ButtonMenu';

import * as S from './styles';

type MainProps = {
  children: ReactNode;
  onRedirectPath: string;
  variant?: 'bottom' | 'simple' | 'center';
};

const FormLayout: FC<MainProps> = ({ children, onRedirectPath, variant }) => (
  <>
    <S.Header>
      <Link href={onRedirectPath} passHref>
        <ButtonMenu onClick={() => { }}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_1753_48335"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="24"
              height="24"
            >
              <rect width="24" height="24" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_1753_48335)">
              <path
                d="M16 21.6538L6.34619 12L16 2.34619L17.4192 3.76539L9.18462 12L17.4192 20.2346L16 21.6538Z"
                fill="white"
              />
            </g>
          </svg>
        </ButtonMenu>
      </Link>
      <svg
        width="67"
        height="48"
        viewBox="0 0 67 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.69967 5.74379H21.1209V0H4V46.0166H21.1209V40.2728H9.69967V5.74379Z"
          fill="white"
        />
        <path
          d="M46.834 5.74379H58.2333V40.2728H46.834V46.0166H63.9549V0H46.834V5.74379Z"
          fill="white"
        />
        <path
          d="M21.2086 24.0355H25.023V21.4728H21.2086V16.9662H26.1848V14.4036H18.293V31.7454H26.5136V29.1386H21.2086V24.0355Z"
          fill="white"
        />
        <path
          d="M38.2415 14.4036H35.3259L33.7037 19.8823H33.6598L31.8403 14.4036H28.9247L32.0815 22.6437L28.6836 31.7454H31.5554L33.6598 25.383H33.7037L35.6986 31.7454H38.5703L35.2821 22.6437L38.2415 14.4036Z"
          fill="white"
        />
        <path
          d="M50.5833 19.5067C50.5833 15.8174 48.9172 14.4036 45.2563 14.4036H41.0254V31.7454H43.9848V24.6319H45.2782C48.8953 24.6319 50.5614 23.1739 50.5614 19.4846M45.0809 22.1577H43.9191V16.8336H45.0809C47.032 16.8336 47.58 17.4522 47.58 19.5067C47.58 21.5612 47.032 22.1798 45.0809 22.1798"
          fill="white"
        />
      </svg>

      <div style={{ height: 48, width: 48 }} />
    </S.Header>
    <S.Wrapper variant={variant || 'bottom'}>
      <S.FormWrapper variant={variant || 'bottom'}>{children}</S.FormWrapper>
    </S.Wrapper>
  </>
);

export default FormLayout;
