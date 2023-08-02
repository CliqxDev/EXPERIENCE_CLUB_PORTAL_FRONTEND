/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Carousel } from 'react-responsive-carousel';

import SlideCarousel from 'components/SlideCarousel';

import * as S from './styles';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselSlide = () => (
  <S.Wrapper>
    <Carousel
      transitionTime={500}
      interval={10000}
      showArrows={false}
      showStatus={false}
      showThumbs={false}
      autoPlay
      animationHandler="slide"
      infiniteLoop
      renderIndicator={(onClickHandler, isSelected, index, label) => {
        const defStyle = {
          width: '12px',
          height: '12px',
          borderRadius: '20px',
          background: '#BDCAFE',
          display: 'inline-flex',
          transition: 'all ease-in-out 200ms',
          marginLeft: 5,
          cursor: 'pointer'
        };
        const style = isSelected
          ? { ...defStyle, width: '38px', background: '#2954FC' }
          : { ...defStyle };
        return (
          // eslint-disable-next-line jsx-a11y/no-static-element-interactions
          <span
            style={style}
            onClick={onClickHandler}
            onKeyDown={onClickHandler}
            key={index}
          />
        );
      }}
    >
      {/* SLIDES */}
      <SlideCarousel />
      <SlideCarousel />
      <SlideCarousel />
      <SlideCarousel />
    </Carousel>
  </S.Wrapper>
);

export default CarouselSlide;
