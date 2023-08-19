import Accompany from 'pages/home/Accompany';
import CarouselSlide from 'pages/home/Carousel';
import Columnists from 'pages/home/Columnists';
import Explore from 'pages/home/Explore';
import Formats from 'pages/home/Formats';
import Header from 'components/Header';
import Newsletter from 'pages/home/Newsletter';
import ShowMore from 'pages/home/ShowMore';
import Trails from 'pages/home/Trails';

import * as S from './styles';

const Main = () => (
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
export default Main;
