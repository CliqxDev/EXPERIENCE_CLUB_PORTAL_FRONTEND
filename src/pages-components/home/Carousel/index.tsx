/* eslint-disable no-unneeded-ternary */
import { Carousel } from 'react-responsive-carousel';
import { uniqueId } from 'lodash';
import SlideCarousel from 'pages-components/home/SlideCarousel';
import { usePosts } from 'hook/selectors/postHooks';
import * as S from './styles';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselSlide = () => {
  const { data } = usePosts();
  
  return (
    <S.Wrapper>
      {data && data.length > 0 && (
        <Carousel
          transitionTime={500}
          interval={10000}
          showArrows={false}
          showStatus={false}
          showThumbs={false}
          autoPlay={false}
          animationHandler="slide"
          infiniteLoop
          renderIndicator={(onClickHandler, isSelected, index) => {
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
          {data.slice(0, 5).map(item => (
            <SlideCarousel post={item} key={uniqueId()} />
          ))}
        </Carousel>
      )}
    </S.Wrapper>
  );
};
export default CarouselSlide;
