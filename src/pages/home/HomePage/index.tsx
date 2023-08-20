import { useEffect } from 'react';
import Accompany from 'pages/home/Accompany';
import CarouselSlide from 'pages/home/Carousel';
import Columnists from 'pages/home/Columnists';
import Explore from 'pages/home/Explore';
import Formats from 'pages/home/Formats';
import Header from 'components/Header';
import Newsletter from 'pages/home/Newsletter';
import ShowMore from 'pages/home/ShowMore';
import Trails from 'pages/home/Trails';

import { useAppDispatch } from 'hook/store';
import { posts } from 'flux/modules/post/actions';
import * as S from './styles';

const HomePage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(posts.request());
  }, [dispatch]);
  return (
    <S.Wrapper>
      <Header />
      <CarouselSlide />
      <Trails />
      <Columnists />
      <Accompany />
      <Newsletter />
      <Explore />
      <Formats />
      <ShowMore />
    </S.Wrapper>
  );
};
export default HomePage;
