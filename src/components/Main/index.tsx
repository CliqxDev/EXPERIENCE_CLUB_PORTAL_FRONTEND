import Accompany from 'components/Accompany';
import CardTrails from 'components/CardTrails';
import CarouselSlide from 'components/Carousel';
import Columnists from 'components/Columnists';
import Explore from 'components/Explore';
import Header from 'components/Header';
import Trails from 'components/Trails';

import * as S from './styles';

const Main = () => (
  <S.Wrapper>
    <Header />
    <CarouselSlide />
    <Trails />
    <CardTrails />
    <Columnists />
    <Accompany />
    <Explore />
  </S.Wrapper>
);
export default Main;
