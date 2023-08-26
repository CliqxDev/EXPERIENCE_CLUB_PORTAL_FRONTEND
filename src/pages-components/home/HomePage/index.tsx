import { useEffect } from 'react';
import { forEach } from 'lodash';
import Accompany from 'pages-components/home/Accompany';
import CarouselSlide from 'pages-components/home/Carousel';
import Explore from 'pages-components/home/Explore';
import ShowMore from 'pages-components/home/ShowMore';
import Header from 'components/Header';
import Newsletter from 'pages-components/home/Newsletter';
import Trails from 'pages-components/home/Trails';

import { useAppDispatch } from 'hook/store';
import { category, media, posts } from 'flux/modules/post/actions';
import { useCategory, useMedia, usePosts } from 'hook/selectors/postHooks';
import { SkeletonHome } from 'components/ui/Skeleton';
import { RequestStatus } from 'models/iRequest';
import { deleteProvisoryToken } from 'utils/services/auth';
import * as S from './styles';
import BannerDesktop from '../BannerDesktop';

const HomePage = () => {
  const { data: postsData } = usePosts();
  const dispatch = useAppDispatch();
  const { status: statusPosts, data: dataPost } = usePosts();
  const { status: statusCategory } = useCategory();
  const { status: statusMedia, data: dataMedia } = useMedia();

  const isLoading =
    statusPosts === RequestStatus.fetching ||
    statusMedia === RequestStatus.fetching ||
    statusCategory === RequestStatus.fetching ||
    !dataMedia ||
    !dataPost ||
    (dataMedia && Object.keys(dataMedia).length !== dataPost?.length);

  const isFullMedia =
    dataMedia && Object.keys(dataMedia).length === dataPost?.length;

  useEffect(() => {
    if (postsData) {
      if (postsData.length && !isFullMedia) {
        forEach(postsData, post =>
          dispatch(media.request(post.featured_media))
        );
      }
    }
  }, [postsData]);

  useEffect(() => {
    deleteProvisoryToken();
    if (postsData === null) {
      dispatch(posts.request());
      dispatch(category.request());
    }
  }, [postsData]);

  return (
    <S.Wrapper>
      <Header />
      {(isLoading && <SkeletonHome />) || (
        <>
          <CarouselSlide />
          <Trails />
          <Accompany />
          <Newsletter />
          <Explore title="Explore" variant="default" />
          <BannerDesktop />
          <ShowMore />
        </>
      )}
    </S.Wrapper>
  );
};
export default HomePage;
