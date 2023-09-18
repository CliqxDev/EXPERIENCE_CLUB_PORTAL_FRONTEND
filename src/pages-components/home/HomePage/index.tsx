import { useEffect, useState } from 'react';
import { forEach, isEmpty } from 'lodash';
import Accompany from 'pages-components/home/Accompany';
import CarouselSlide from 'pages-components/home/Carousel';
import Explore from 'pages-components/home/Explore';
import ShowMore from 'pages-components/home/ShowMore';
import Header from 'components/Header';
import Newsletter from 'pages-components/home/Newsletter';
import Trails from 'pages-components/home/Trails';

import { useAppDispatch } from 'hook/store';
import { media, posts, setShowShare } from 'flux/modules/post/actions';
import { useMedia, usePosts, useShowShare } from 'hook/selectors/postHooks';
import { SkeletonHome } from 'components/ui/Skeleton';
import { RequestStatus } from 'models/iRequest';
import { deleteProvisoryToken } from 'utils/services/auth';
import ShareDialog from 'components/ShareDialog';
import { useClientInfo } from 'hook/selectors/authHooks';
import * as S from './styles';
import BannerDesktop from '../BannerDesktop';
import TrailsDesktop from '../Trails/TrailsDesktop';
import BannerDesktopVideos from '../BannerDesktopVideos';
import CarouselDesktop from '../CarouselDesktop';

const HomePage = () => {
  const { data: postsData } = usePosts();
  const dispatch = useAppDispatch();
  const { status: statusPosts, data: dataPost } = usePosts();
  const { status: statusMedia, data: dataMedia } = useMedia();
  const { data } = useClientInfo();
  const userIsAdmin = data?.is_admin;
  const userIsPremium = data?.is_premium;
  const showShare = useShowShare();
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    if (!isEmpty(data)) {
      setIsLogged(true);
    }
  }, [data, isLogged]);

  const isLoading =
    statusPosts === RequestStatus.fetching ||
    statusMedia === RequestStatus.fetching ||
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
    }
  }, [postsData]);

  return (
    <S.Wrapper>
      <Header />
      <TrailsDesktop />
      {(isLoading && <SkeletonHome />) || (
        <>
          <CarouselSlide />
          <CarouselDesktop />

          <Trails />
          <Accompany />
          <Newsletter />
          <Explore title="Explore" variant="default" />
          {!isLogged || (userIsAdmin === false && userIsPremium === false) ? (
            <BannerDesktop />
          ) : (
            <BannerDesktopVideos />
          )}
          <ShowMore />
        </>
      )}
      <ShareDialog id={showShare} onClose={() => dispatch(setShowShare(''))} />
    </S.Wrapper>
  );
};
export default HomePage;
