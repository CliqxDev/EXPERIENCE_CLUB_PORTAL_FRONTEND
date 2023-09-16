import styled from 'styled-components';

export const Wrapper = styled.main`
  background-image: url('/img/form-layout-background.svg');
  width: 100%;
  min-height: 100vh;
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  width: 100%;
  position: absolute;
  padding: 0 1.6rem;
  left: 0;
  top: 1.6rem;
`;

export const ConfirmContent = styled.div`
  position: absolute;
  bottom: 1.6rem;
  left: 1.6rem;
  right: 1.6rem;
`;
