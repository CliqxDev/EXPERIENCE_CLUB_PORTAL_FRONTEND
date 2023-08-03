import styled from 'styled-components';

export const Wrapper = styled.main`
  background-image: url('/img/form-layout-img.svg');
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  position: relative;
`;

export const Background = styled.div`
  background-image: url('/img/form-layout-background.svg');
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;
`;

export const Header = styled.div`
  width: 100%;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
  position: absolute;
  padding: 0 1.6rem;
`;
