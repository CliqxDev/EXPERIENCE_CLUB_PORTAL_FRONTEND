/* eslint-disable react/jsx-no-useless-fragment */
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { isEmpty } from 'lodash';
import { useClientInfo } from 'hook/selectors/authHooks';
import * as S from './styles';
import closeBannerIcon from '../../../../public/img/close.svg'

const BannerDesktop = () => {
  const [closeBanner, setCloseBanner] = useState(true);
  const { data } = useClientInfo();
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    if (!isEmpty(data)) {
      setIsLogged(true);
    } else {
      setIsLogged(false)
    }
  }, [data]);

  return (
  <>
    {(closeBanner && !isLogged) && 
      <S.BannerWrapper>
      <S.Assign>
        <S.Plans>
          <S.Title>Assine Agora!</S.Title>
          <S.SubTitle>Embarque agora na transformação.</S.SubTitle>
        </S.Plans>
        <S.Plans>
          <Link href="/register" passHref>
          <S.PlanButton>CONHEÇA NOSSOS PLANOS</S.PlanButton>
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
    }
  </>
  )
};

export default BannerDesktop;