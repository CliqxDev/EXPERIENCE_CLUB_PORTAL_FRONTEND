import CardTrails from 'components/CardTrails';
import CarouselSlide from 'components/Carousel';
import Header from 'components/Header';
import Trails from 'components/Trails';

import * as S from './styles';

const Main = () => (
  <S.Wrapper>
    <Header />
    <CarouselSlide />
    <Trails />
    <CardTrails />
  </S.Wrapper>
);
export default Main;
