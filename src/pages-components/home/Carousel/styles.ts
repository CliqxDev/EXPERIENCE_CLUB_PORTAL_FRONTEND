import styled from 'styled-components';
import { breakpoints } from 'styles';

export const Wrapper = styled.main`
  width: 100%;
  /* height: 100vh; */
  background-color: #ffff;

  /* ${breakpoints.up('md')} {
    height: 450px;
  } */

  .carousel.carousel-slider li.slide.selected {
    z-index: 1 !important;
    margin-bottom: 4rem;
  }

  .carousel .slider-wrapper {
    /* height: 100vh; */

    /* ${breakpoints.up('md')} {
      height: 450px;
    } */
  }
`;
