import Link from 'next/link';

import { sanitizeAvatar } from 'utils/formatString';
import { useClientInfo } from 'hook/selectors/authHooks';

import * as S from './styles';

const HeaderMyHomeDesk = () => {
  const { data } = useClientInfo();

  return (
    <S.Wrapper>
      <S.Header>
        <Link href="/">
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
        </Link>

        <S.WrapperUserColumn>
          <S.Avatar>{sanitizeAvatar(data?.name || '')}</S.Avatar>
          <S.WrapperUserData>
            <h2>{`Olá, ${data?.name}`}</h2>
            <h3>Aproveite sua jornada.</h3>
          </S.WrapperUserData>
        </S.WrapperUserColumn>
      </S.Header>
    </S.Wrapper>
  );
};

export default HeaderMyHomeDesk;
