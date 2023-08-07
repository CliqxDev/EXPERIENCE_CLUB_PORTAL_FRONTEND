import Accompany from 'components/Accompany';
import CardTrails from 'components/CardTrails';
import CarouselSlide from 'components/Carousel';
import Columnists from 'components/Columnists';
import Explore from 'components/Explore';
import Formats from 'components/Formats';
import Header from 'components/Header';
import Newsletter from 'components/Newsletter';
import ShowMore from 'components/ShowMore';
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
    <Newsletter />
    <Explore />
    <Formats />
    <ShowMore />
  </S.Wrapper>
);
export default Main;
