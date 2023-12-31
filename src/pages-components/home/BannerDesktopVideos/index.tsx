/* eslint-disable react/jsx-no-useless-fragment */
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import * as S from './styles';
import closeBannerIcon from '../../../../public/img/close-blue.svg';

const BannerDesktopVideos = () => {
  const [closeBanner, setCloseBanner] = useState(true);

  return (
    <>
      {closeBanner && (
        <S.BannerWrapper>
          <S.Assign>
            <S.Plans>
              <S.Title>Vídeos</S.Title>
              <S.SubTitle>Confira nossa plataforma de vídeos!</S.SubTitle>
            </S.Plans>
            <S.Plans>
              <Link href="https://experienceclub.vhx.tv" target="_blank" passHref>
                <S.PlanButton>ACESSE NOSSOS VÍDEOS</S.PlanButton>
              </Link>
              <Image
                alt="Fechar banner"
                src={closeBannerIcon}
                onClick={() => setCloseBanner(false)}
                style={{ margin: '0 1rem 0 2rem', cursor: 'pointer' }}
              />
            </S.Plans>
          </S.Assign>
        </S.BannerWrapper>
      )}
    </>
  );
};

export default BannerDesktopVideos;
