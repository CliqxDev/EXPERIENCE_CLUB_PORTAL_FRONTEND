import styled from 'styled-components';

export const Wrapper = styled.main`
  width: 100%;
  position: fixed;
  background-color: #ffffff;
  padding: 1.6rem;
  top: 0;
  left: 0;
  z-index: 999;
  height: 100vh;

  #exit {
    width: 100%;
    height: 40px;
    background-color: #1d1d1b;
    margin-top: 2.4rem;
  }
  a {
    text-decoration: none;
  }
`;

export const Header = styled.div`
  display: flex;
  height: 48px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.8rem;
`;

export const Title = styled.span`
  color: #4a4a49;
  font-size: 1.6rem;
  font-weight: 500;
  letter-spacing: 0.5px;
`;

export const Divider = styled.div`
  margin-left: 1.6rem;
  height: 1px;
  background-color: #b9b9b8;
`;

export const TitleSort = styled.div`
  color: #4a4a49;
  font-size: 1.4rem;
  font-weight: 500;
  margin: 2.4rem 0;
`;

export const WrapperTrail = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  height: 250px;
`;
