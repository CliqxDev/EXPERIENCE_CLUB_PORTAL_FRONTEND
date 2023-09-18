import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import parse from 'html-react-parser';
import { findIndex, forEach, isEmpty } from 'lodash';
import moment from 'moment';

// import Image from 'next/image';
import {
  useColumnist,
  useMedia,
  useMediaCategory,
  usePostById,
  usePosts,
  useShowShare
} from 'hook/selectors/postHooks';
import { useClientInfo } from 'hook/selectors/authHooks';
import { useAppDispatch } from 'hook/store';
import {
  postById,
  columnists,
  media,
  posts,
  clearPostById,
  setShowShare
} from 'flux/modules/post/actions';

import ShowMore from 'pages-components/home/ShowMore';
import Explore from 'pages-components/home/Explore';
import { SkeletonPost } from 'components/ui/Skeleton';
import { RequestStatus } from 'models/iRequest';
import TrailFilter from 'components/TrailFilter';
import ShareDialog from 'components/ShareDialog';
import { findCategoryById } from 'models/post';
import {
  getAnonymousContentBlock,
  isAuthenticated,
  setAnonymousContentBlock
} from 'utils/services/auth';
import { sanitizeTextByMaxLength } from 'utils/formatString';
import { PostItem } from 'flux/modules/post/types';
import { setPostRead } from 'flux/modules/client/actions';
// import timeIcon from '../../../../public/img/time-icon.svg';
import CardLimitedRead from './CardLimitedRead';
import * as S from './styles';
import PostHeader from '../PostHeader';
import HeaderDesktopPost from '../PostHeader/Desktop';

type Card = {
  id: number;
  tempo_leitura: string;
  rendered: string;
  title: string;
  imgSrc: string;
  imgSrcDesk: string;
  description: string;
  categoryId: number;
  columnist: string;
  date: string;
  hour: string;
  content: string;
};

const Post = () => {
  const dispatch = useAppDispatch();
  const { data: post, status: statusPostById } = usePostById();
  const { id }: any = useParams();
  const { data: listMedia, status: statusMedia } = useMedia();
  const { data: listMediaCategory } = useMediaCategory();
  const { data: columnistData } = useColumnist();
  const { data: dataPosts, status: statusPosts } = usePosts();
  const { data: dataClient } = useClientInfo();
  const showShare = useShowShare();

  const [showTrailFilter, setShowTrailFilter] = useState(false);
  const [blockContent, setBlockContent] = useState(false);
  const [fontSize, setFontSize] = useState(20);

  const isFullMedia =
    listMedia && Object.keys(listMedia).length === dataPosts?.length;

  const isLoading =
    statusPosts === RequestStatus.fetching ||
    statusMedia === RequestStatus.fetching ||
    statusPostById === RequestStatus.fetching ||
    !listMedia ||
    !dataPosts ||
    (listMedia && Object.keys(listMedia).length !== dataPosts?.length);

  const [postSelected, setPostSelected] = useState<Card>({
    id: 0,
    tempo_leitura: '',
    rendered: '',
    title: '',
    imgSrc: '',
    imgSrcDesk: '',
    description: '',
    categoryId: 0,
    columnist: '',
    hour: '',
    date: '',
    content: ''
  });

  const getColumnist = (author: number) => {
    let name = '';
    if (columnistData?.length) {
      const idx = findIndex(columnistData, ['id', author]);
      name = columnistData[idx].name;
    }
    return name;
  };

  useEffect(() => {
    if (dataPosts) {
      if (dataPosts.length && !isFullMedia) {
        forEach(dataPosts, item =>
          dispatch(media.request(item.featured_media))
        );
      }
    }
  }, [dataPosts]);

  useEffect(() => {
    dispatch(postById.request(id));

    if (isAuthenticated()) {
      dispatch(setPostRead.request({ post_external_id: id }));
    }

    if (dataPosts === null) {
      dispatch(columnists.request());
      dispatch(posts.request());
    }

    if (!isAuthenticated()) {
      const isBlock = getAnonymousContentBlock();
      setBlockContent(isBlock === 'YES');
    }

    return () => {
      dispatch(clearPostById());
      setAnonymousContentBlock();
    };
  }, []);

  useEffect(() => {
    if (!isEmpty(dataClient)) {
      if (!dataClient.is_premium) {
        setBlockContent(dataClient.qtd_posts_read_month >= 4);
      }
    }
  }, [dataClient]);

  const mediaSelect = (postParam: PostItem) => {
    if (!isEmpty(listMedia)) {
      const mediaPost = listMedia[postParam.featured_media];
      if (mediaPost) {
        return listMedia[postParam.featured_media].media_details.sizes
          .medium_large?.source_url;
      }
    }

    if (!isEmpty(listMediaCategory)) {
      const mediaPost = listMediaCategory[postParam.featured_media];
      if (mediaPost) {
        return listMediaCategory[postParam.featured_media].media_details.sizes
          .medium_large?.source_url;
      }
    }
    return '';
  };

  const mediaSelectDesk = (postParam: PostItem) => {
    if (!isEmpty(listMedia)) {
      const mediaPost = listMedia[postParam.featured_media];
      if (mediaPost) {
        return listMedia[postParam.featured_media].media_details.sizes.medium
          ?.source_url;
      }
    }

    if (!isEmpty(listMediaCategory)) {
      const mediaPost = listMediaCategory[postParam.featured_media];
      if (mediaPost) {
        return listMediaCategory[postParam.featured_media].media_details.sizes
          .medium?.source_url;
      }
    }
    return '';
  };

  useEffect(() => {
    if (!isEmpty(post) && !isEmpty(listMedia)) {
      if (isFullMedia) {
        setPostSelected({
          id: post.id,
          tempo_leitura: post.acf?.tempo_leitura,
          rendered: post.excerpt.rendered,
          title: post.title.rendered,
          imgSrc: mediaSelect(post),
          imgSrcDesk: mediaSelectDesk(post),
          description: post.excerpt.rendered,
          categoryId: post.categories[0],
          columnist: (columnistData && getColumnist(post.author)) || '',
          date: moment(post.date, 'YYYY-MM-DD').format('DD/MM/YYYY'),
          content:
            (blockContent &&
              sanitizeTextByMaxLength(post.content.rendered, 250)) ||
            post.content.rendered,
          hour: moment(post.date, 'YYYY-MM-DDh:mm:ss A').format('HH:mm:ss')
        });
      }
    }
  }, [post, listMedia, columnistData, blockContent]);

  const changeFontSize = (value: number) => {
    if (fontSize > 14 && fontSize < 26) {
      setFontSize(fontSize + value);
    }

    if (fontSize === 14 && value === +2) {
      setFontSize(fontSize + value);
    }

    if (fontSize === 26 && value === -2) {
      setFontSize(fontSize + value);
    }
  };

  return (
    <S.Wrapper>
      {(isLoading && <SkeletonPost />) || (
        <>
          <S.HeaderImage>
            <S.Gradient>
              <PostHeader />
            </S.Gradient>
            {postSelected.imgSrc && (
              <S.Image $backgroundImage={postSelected.imgSrc}>teste</S.Image>
            )}
            <S.HeaderContent>
              {postSelected.categoryId && (
                <S.ButtonCategoryWrapper
                  $background={findCategoryById(postSelected.categoryId).color}
                >
                  <S.ButtonCategory>
                    {findCategoryById(postSelected.categoryId).label}
                  </S.ButtonCategory>
                </S.ButtonCategoryWrapper>
              )}
              {postSelected.title && <span>{parse(postSelected.title)}</span>}
            </S.HeaderContent>
          </S.HeaderImage>
          <S.BannerDesktop>
            <S.GradientTop />
            <HeaderDesktopPost />
            <S.HeaderDesktop>
              <S.WrapperImage>
                <S.WrapperContent>
                  <S.TextWrapper>
                    <S.Title>{parse(postSelected.title)}</S.Title>
                  </S.TextWrapper>
                </S.WrapperContent>
                <S.ImgPost>
                  <S.GradientDesk />
                  <img
                    id="banner"
                    src={postSelected.imgSrcDesk}
                    alt="Assunto"
                  />
                </S.ImgPost>
              </S.WrapperImage>
            </S.HeaderDesktop>
          </S.BannerDesktop>
          <S.ExcerptWrapper
            $background={findCategoryById(postSelected.categoryId).color}
          >
            <S.ExcerptWrapperDesk
              $background={findCategoryById(postSelected.categoryId).color}
            >
              <S.DateHourTextWrapper>
                <S.Text>{postSelected.date}</S.Text>
                {/* <S.Divider />
              <Image
                src={timeIcon}
                alt="Tempo do post"
                style={{ marginRight: '1rem' }}
              /> */}
                {/* <S.Text>
                {postSelected.tempo_leitura
                  ? `${postSelected.tempo_leitura} minutos`
                  : `0 minutos`}
              </S.Text> */}
              </S.DateHourTextWrapper>
              <S.Excerpt
                dangerouslySetInnerHTML={{ __html: postSelected.rendered }}
              />
            </S.ExcerptWrapperDesk>
          </S.ExcerptWrapper>
          <S.ContentWrapper fontSize={fontSize}>
            <S.Content>
              <S.Post
                dangerouslySetInnerHTML={{ __html: postSelected.content }}
              />

              <S.Action>
                <S.ButtonWrapper onClick={() => changeFontSize(+2)}>
                  <img
                    src="/img/icon-a+.svg"
                    alt="ícone letra A e sinal de mais"
                  />
                  <S.Button>Aumentar</S.Button>
                </S.ButtonWrapper>
                <S.ButtonWrapper onClick={() => changeFontSize(-2)}>
                  <img
                    src="/img/icon-a-.svg"
                    alt="ícone letra A e sinal de menos"
                  />
                  <S.Button>Diminuir</S.Button>
                </S.ButtonWrapper>
                <S.ButtonWrapper onClick={() => dispatch(setShowShare(id))}>
                  <img
                    src="/img/icon-post-share-action.svg"
                    alt="ícone compartilhar"
                  />
                  <S.Button>Compartilhar</S.Button>
                </S.ButtonWrapper>
                <S.ButtonWrapper onClick={() => setShowTrailFilter(true)}>
                  <img src="/img/icon-compass.svg" alt="ícone de compasso" />
                  <S.Button>Trilhas</S.Button>
                </S.ButtonWrapper>
              </S.Action>
            </S.Content>
          </S.ContentWrapper>

          {!blockContent && <ShowMore />}
          {!blockContent && <Explore title="Relacionados" variant="scroll" />}
        </>
      )}
      <TrailFilter
        show={showTrailFilter}
        onClose={() => setShowTrailFilter(false)}
      />
      <ShareDialog
        id={showShare}
        onClose={() => dispatch(setShowShare(''))}
      />

      {/* <S.LimitedRead>
        Limite de leitura excedido.
        <Image src={limitedIcon} alt="Limite de leitura excedido" />
      </S.LimitedRead> */}

      {blockContent && !isAuthenticated() && (
        <CardLimitedRead
          title="Faça seu cadastro para ter acesso a mais 4 conteúdos gratuitos."
          titleCard="Ou conheça nossos planos e tenha acesso ilimitado a todo o conteúdo: entrevistas, reportagens, vídeos e reports."
          variant="sigin"
        />
      )}
      {blockContent && isAuthenticated() && (
        <CardLimitedRead
          title="Você esgotou os seus conteúdos gratuitos."
          titleCard="Conheça nossos planos e continue navegando sem limites na plataforma [EXP]."
          subTitleCard="Tenha acesso ilimitado a todo o conteúdo: entrevistas, reportagens, vídeos e reports."
          variant="plan"
        />
      )}
      {blockContent && <S.BoxBlock />}
    </S.Wrapper>
  );
};
export default Post;
