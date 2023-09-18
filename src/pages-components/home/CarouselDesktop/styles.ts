import styled from 'styled-components';
import { breakpoints } from 'styles';

export const Wrapper = styled.main`
  width: 100%;
  background-color: #ffff;
  display: none;

  ${breakpoints.up('md')} {
    display: block;
  }

  .carousel.carousel-slider li.slide.selected {
    z-index: 1 !important;
    margin-bottom: 4rem;
  }
`;
