import { useEffect } from 'react';
import { forEach } from 'lodash';
import Accompany from 'pages/home/Accompany';
import CarouselSlide from 'pages/home/Carousel';
import Explore from 'pages/home/Explore';
import Formats from 'pages/home/Formats';
import Header from 'components/Header';
import Newsletter from 'pages/home/Newsletter';
import ShowMore from 'pages/home/ShowMore';
import Trails from 'pages/home/Trails';

import { useAppDispatch } from 'hook/store';
import { category, columnists, media, posts } from 'flux/modules/post/actions';
import { usePosts } from 'hook/selectors/postHooks';
import * as S from './styles';

const HomePage = () => {
  const { data: postsData } = usePosts();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (postsData) {
      if (postsData.length) {
        forEach(postsData, post =>
          dispatch(media.request(post.featured_media))
        );
      }
    }
  }, [postsData]);

  useEffect(() => {
    if (postsData) {
      if (postsData.length) {
        forEach(postsData, post =>
          dispatch(media.request(post.featured_media))
        );
      }
    }
  }, [postsData]);

  useEffect(() => {
    dispatch(posts.request());
    dispatch(category.request());
    dispatch(columnists.request());
  }, [dispatch]);
  return (
    <S.Wrapper>
      <Header />
      <CarouselSlide />
      <Trails />
      <Accompany />
      <Newsletter />
      <Explore />
      <Formats />
      <ShowMore />
    </S.Wrapper>
  );
};
export default HomePage;
