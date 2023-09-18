/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useEffect } from 'react';
import Link from 'next/link';
import BoxLogged from 'components/MenuComponents/BoxLogged';
import SubscriberPlan from 'pages-components/perfil/SubscriberPlan';
import { useClientInfo } from 'hook/selectors/authHooks';
import Newsletter from 'pages-components/home/Newsletter';
import BannerVideos from 'pages-components/banner-videos/BannerVideos';
import HeaderMyHome from './HeaderMyHome';
import HeaderMyHomeDesk from './HeaderMyHomeDesk';

import * as S from './styles';
import LibraryMyHome from './LibraryMyHome';
import TrailsMyHome from './TrailsMyHome';

const MyHome = () => {
  const { data } = useClientInfo();
  const qtdPostsReadUser = data?.qtd_posts_read_month || 0;
  const qtdLimitPostsReadUser = 4;
  const userIsPremium = data?.is_premium;
  const userIsAdmin = data?.is_admin;

  return (
    <S.Wrapper>
      <HeaderMyHome />
      <HeaderMyHomeDesk />

      <S.InfoClientWrapper>
        <S.InfoClient>
          <BoxLogged variant="myHome" />
          {userIsAdmin === false && userIsPremium === false ? (
            <S.Plan>
              <SubscriberPlan />
            </S.Plan>
          ) : (
            <S.Plan>
              <BannerVideos />
            </S.Plan>
          )}
        </S.InfoClient>
      </S.InfoClientWrapper>

      {(userIsAdmin === true || userIsPremium === true) && <LibraryMyHome />}
      {(userIsAdmin === true || userIsPremium === true) && <TrailsMyHome />}

      <S.ContentWrapper>
        <S.Content>
          {userIsAdmin === false &&
            userIsPremium === false &&
            qtdLimitPostsReadUser - qtdPostsReadUser > 0 && (
              <S.CardLicense>
                <S.AddEmployee>
                  <S.LimitEmployee>
                    {qtdLimitPostsReadUser - qtdPostsReadUser}
                  </S.LimitEmployee>
                  <S.TitleLimit variant="default">
                    Você ainda tem acesso a<br />
                    {qtdLimitPostsReadUser - qtdPostsReadUser} conteúdo(s)
                    gratuito(s).
                  </S.TitleLimit>
                </S.AddEmployee>

                <S.CardAddEmployee variant="default">
                  <S.TitleLimit variant="black">
                    Conheça nossos planos e continue navegando sem limites na
                    plataforma [EXP].
                  </S.TitleLimit>
                  <Link
                    href="/plan"
                    style={{ textDecoration: 'none', width: '100%' }}
                  >
                    <S.AddButton>Adquirir licença</S.AddButton>
                  </Link>
                </S.CardAddEmployee>
              </S.CardLicense>
            )}
          {userIsAdmin === false &&
            userIsPremium === false &&
            qtdLimitPostsReadUser - qtdPostsReadUser <= 0 && (
              <S.CardLicense style={{ height: '420px' }}>
                <S.AddEmployee>
                  <S.LimitEmployee>
                    {qtdLimitPostsReadUser - qtdPostsReadUser}
                  </S.LimitEmployee>
                  <S.TitleLimit variant="default">
                    Você esgotou os seus <br /> conteúdos gratuitos.
                  </S.TitleLimit>
                </S.AddEmployee>

                <S.CardAddEmployee variant="large">
                  <S.TitleLimit variant="black">
                    Conheça nossos planos e continue navegando sem limites na
                    plataforma [EXP].
                  </S.TitleLimit>
                  <S.SubTitle>
                    Tenha acesso ilimitado a todo o conteúdo: entrevistas,
                    reportagens, vídeos e reports.
                  </S.SubTitle>
                  <S.AddButton>Conheça nossos planos</S.AddButton>
                </S.CardAddEmployee>
              </S.CardLicense>
            )}

          {userIsAdmin === false && userIsPremium === false && <Newsletter />}
        </S.Content>
      </S.ContentWrapper>
    </S.Wrapper>
  );
};

export default MyHome;
