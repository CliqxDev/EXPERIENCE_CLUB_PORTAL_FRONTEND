import styled from 'styled-components';

export const Wrapper = styled.main`
  position: relative;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: absolute;
  z-index: 10;
  align-items: center;
  padding: 1.2rem;
`;

export const ImageWrapper = styled.div`
  img {
    width: 100%;
  }
`;

export const HeaderAction = styled.div`
  display: flex;
  width: 96px;
`;

export const Gradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background-image: url(/img/background-header-post.svg);
`;
