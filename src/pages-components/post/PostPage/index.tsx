import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import parse from 'html-react-parser';
import { findIndex, forEach, isEmpty } from 'lodash';
import moment from 'moment';

// import Image from 'next/image';
import {
  useCategory,
  useColumnist,
  useMedia,
  usePostById,
  usePosts,
  useShowShare
} from 'hook/selectors/postHooks';
import { useAppDispatch } from 'hook/store';
import {
  postById,
  category,
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
import * as S from './styles';
import PostHeader from '../PostHeader';
// import limitedIcon from '../../../../public/img/limited-read.svg';
// import CardLimitedRead from './CardLimitedRead';

type Card = {
  id: number;
  tempo_leitura: string;
  rendered: string;
  title: string;
  imgSrc: string;
  description: string;
  category: string;
  columnist: string;
  date: string;
  hour: string;
  content: string;
};

const backgrounds: any = {
  0: '#708CFD',
  1: '#5476FD',
  2: '#254CE5',
  3: '#1D3CB3',
  4: '#172E8B',
  5: '#11236A'
};

const Post = () => {
  const dispatch = useAppDispatch();
  const { data: post, status: statusPostById } = usePostById();
  const { id }: any = useParams();
  const { data: listMedia, status: statusMedia } = useMedia();
  const { data: categoryData, status: statusCategory } = useCategory();
  const { data: columnistData } = useColumnist();
  const { data: dataPosts, status: statusPosts } = usePosts();
  const showShare = useShowShare();

  const [showTrailFilter, setShowTrailFilter] = useState(false);

  const isFullMedia =
    listMedia && Object.keys(listMedia).length === dataPosts?.length;

  const isLoading =
    statusPosts === RequestStatus.fetching ||
    statusMedia === RequestStatus.fetching ||
    statusPostById === RequestStatus.fetching ||
    statusCategory === RequestStatus.fetching ||
    !listMedia ||
    !dataPosts ||
    (listMedia && Object.keys(listMedia).length !== dataPosts?.length);

  const [postSelected, setPostSelected] = useState<Card>({
    id: 0,
    tempo_leitura: '',
    rendered: '',
    title: '',
    imgSrc: '',
    description: '',
    category: '',
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
    if (dataPosts === null) {
      dispatch(category.request());
      dispatch(columnists.request());
      dispatch(posts.request());
    }
    return () => {
      dispatch(clearPostById());
    };
  }, []);

  useEffect(() => {
    if (!isEmpty(post) && !isEmpty(listMedia)) {
      if (isFullMedia) {
        setPostSelected({
          id: post.id,
          tempo_leitura: post.acf?.tempo_leitura,
          rendered: post.excerpt.rendered,
          title: post.title.rendered,
          imgSrc:
            listMedia[post.featured_media].media_details.sizes.medium_large
              ?.source_url,
          description: post.excerpt.rendered,
          category:
            (!isEmpty(categoryData) && categoryData[post.categories[0]]) || '',
          columnist: (columnistData && getColumnist(post.author)) || '',
          date: moment(post.date, 'YYYY-MM-DD').format('DD/MM/YYYY'),
          content: post.content.rendered,
          hour: moment(post.date, 'YYYY-MM-DDh:mm:ss A').format('HH:mm:ss')
        });
      }
    }
  }, [post, listMedia, categoryData, columnistData]);

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
              {postSelected.category && (
                <S.ButtonCategoryWrapper
                  $background={backgrounds[postSelected.id]}
                >
                  <S.ButtonCategory>{postSelected.category}</S.ButtonCategory>
                </S.ButtonCategoryWrapper>
              )}
              {postSelected.title && <span>{parse(postSelected.title)}</span>}
            </S.HeaderContent>
          </S.HeaderImage>
          <S.ExcerptWrapper $background={backgrounds[postSelected.id]}>
            <S.DateHourTextWrapper>
              <S.Text>{postSelected.date}</S.Text>
              <S.Divider />
              <S.Text>
                {postSelected.tempo_leitura
                  ? `${postSelected.tempo_leitura} minutos`
                  : `0 minutos`}
              </S.Text>
            </S.DateHourTextWrapper>
            <S.Excerpt
              dangerouslySetInnerHTML={{ __html: postSelected.rendered }}
            />
            <S.Text>{`Por ${postSelected.columnist}`}</S.Text>
          </S.ExcerptWrapper>
          <S.ContentWrapper>
            <S.Content>
              <S.Post
                dangerouslySetInnerHTML={{ __html: postSelected.content }}
              />

              <S.Action>
                <S.ButtonWrapper>
                  <img
                    src="/img/icon-a+.svg"
                    alt="ícone letra A e sinal de mais"
                  />
                  <S.Button>Aumentar</S.Button>
                </S.ButtonWrapper>
                <S.ButtonWrapper>
                  <img
                    src="/img/icon-a-.svg"
                    alt="ícone letra A e sinal de menos"
                  />
                  <S.Button>Diminuir</S.Button>
                </S.ButtonWrapper>
                <S.ButtonWrapper onClick={() => dispatch(setShowShare(true))}>
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

          {/* LIMITE LEITURA */}
          {/* <CardLimitedRead
            title='Faça seu cadastro para ter acesso a mais 4 conteúdos gratuitos.'
            titleCard='Ou conheça nossos planos e tenha acesso ilimitado a todo o conteúdo: entrevistas, reportagens, vídeos e reports.'
            variant="sigin"
          /> */}
          {/* <CardLimitedRead
            title='Você esgotou os seus conteúdos gratuitos.'
            titleCard='Conheça nossos planos e continue navegando sem limites na plataforma [EXP].'
            subTitleCard='Tenha acesso ilimitado a todo o conteúdo: entrevistas, reportagens, vídeos e reports.'
            variant="plan"
          /> */}
          {/* LIMITE LEITURA */}

          <ShowMore />
          <Explore title="Relacionados" variant="scroll" />
        </>
      )}
      <TrailFilter
        show={showTrailFilter}
        onClose={() => setShowTrailFilter(false)}
      />
      <ShareDialog
        show={showShare}
        onClose={() => dispatch(setShowShare(false))}
      />

      {/* <S.LimitedRead>
        Limite de leitura excedido.
        <Image src={limitedIcon} alt="Limite de leitura excedido" />
      </S.LimitedRead> */}
    </S.Wrapper>
  );
};
export default Post;
