/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useEffect } from 'react';
import BoxLogged from 'components/MenuComponents/BoxLogged';
import SubscriberPlan from 'pages-components/perfil/SubscriberPlan';
import { useClientInfo } from 'hook/selectors/authHooks';
import Newsletter from 'pages-components/home/Newsletter';
import HeaderMyHome from './HeaderMyHome';
import * as S from './styles';
import LibraryMyHome from './LibraryMyHome';
import TrailsMyHome from './TrailsMyHome';

const MyHome = () => {
  const { data } = useClientInfo();
  let qtdPostsReadUser = 0;
  const qtdLimitPostsReadUser = 4;
  const userIsPremium = data?.is_premium;
  const userIsAdmin = data?.is_admin;

  useEffect(() => {
    if (data) {
      qtdPostsReadUser = data?.qtd_posts_read_month;
    }
  }, [data])


  return (
    <S.Wrapper>
      <HeaderMyHome />
      <BoxLogged variant='myHome' />
      {(userIsAdmin === false && userIsPremium === null) &&
        <S.Plan>
          <SubscriberPlan />
        </S.Plan>
      }

      {(userIsAdmin === true || userIsPremium === true) && <LibraryMyHome />}
      {(userIsAdmin === true || userIsPremium === true) && <TrailsMyHome />}

      {(userIsAdmin === false && userIsPremium === null && qtdLimitPostsReadUser - qtdPostsReadUser > 0) &&
        <S.CardLicense>
          <S.AddEmployee>
            <S.LimitEmployee>
              {qtdLimitPostsReadUser - qtdPostsReadUser}
            </S.LimitEmployee>
            <S.TitleLimit variant="default">
              Você ainda tem acesso a {qtdLimitPostsReadUser - qtdPostsReadUser} conteúdos gratuitos.
            </S.TitleLimit>
          </S.AddEmployee>

          <S.CardAddEmployee variant="default">
            <S.TitleLimit variant="black">
              Conheça nossos planos e continue navegando sem limites na plataforma [EXP].
            </S.TitleLimit>
            <S.AddButton>Adquirir licença</S.AddButton>
          </S.CardAddEmployee>
        </S.CardLicense>
      }

      {(userIsAdmin === false && userIsPremium === null && qtdLimitPostsReadUser - qtdPostsReadUser <= 0) &&
        <S.CardLicense style={{ height: '420px' }}>
          <S.AddEmployee>
            <S.LimitEmployee>
              {qtdLimitPostsReadUser - qtdPostsReadUser}
            </S.LimitEmployee>
            <S.TitleLimit variant="default">
              Você esgotou os seus conteúdos gratuitos.
            </S.TitleLimit>
          </S.AddEmployee>

          <S.CardAddEmployee variant="large">
            <S.TitleLimit variant="black">
              Conheça nossos planos e continue navegando sem limites na plataforma [EXP].
            </S.TitleLimit>
            <S.SubTitle>
              Tenha acesso ilimitado a todo o conteúdo: entrevistas, reportagens, vídeos e reports.
            </S.SubTitle>
            <S.AddButton>Conheça nossos planos</S.AddButton>
          </S.CardAddEmployee>
        </S.CardLicense>
      }

      {(userIsAdmin === false && userIsPremium === null) && <Newsletter />}
    </S.Wrapper>
  );
}


export default MyHome;