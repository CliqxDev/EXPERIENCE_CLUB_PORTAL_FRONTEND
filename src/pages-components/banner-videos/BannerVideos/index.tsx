import Link from 'next/link';
import * as S from './styles';

const BannerVideos = () => (
  <S.PlanWrapper>
    <S.Text>
      <S.Title>Vídeos</S.Title>
      <S.Description>
        Confira nossa plataforma de vídeos!
      </S.Description>
    </S.Text>

    <Link href="https://experienceclub.vhx.tv" target="_blank" passHref style={{ textDecoration: 'none' }}>
      <S.ButtonPlan type="button">
        Acesse <br />
        nossos vídeos
      </S.ButtonPlan>
    </Link>
  </S.PlanWrapper>
);

export default BannerVideos;