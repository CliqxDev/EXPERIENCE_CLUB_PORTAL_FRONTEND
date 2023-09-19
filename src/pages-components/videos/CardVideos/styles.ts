import styled from 'styled-components';
import { breakpoints } from 'styles';

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

  ${breakpoints.up('md')} {
    background-repeat: repeat;
    background-size: contain;
  }
`;

export const Header = styled.div`
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
  width: 100%;
  position: absolute;
  padding: 0 1.6rem;
  left: 0;
`;

export const Content = styled.div`
  position: fixed;
  bottom: 1.6rem;

  ${breakpoints.up('md')} {
    bottom: 4rem;
  }
`;

export const TopCard = styled.div`
  width: 360px;
  height: 130px;
  padding: 16px;
  margin-bottom: 1rem;
  border-radius: 4px;
  background-color: #eaeeff;

  ${breakpoints.up('md')} {
    margin-top: 2rem;
  }
`;

export const BottomCard = styled.div`
  width: 360px;
  height: 230px;
  padding: 16px;
  border-radius: 4px;
  background-color: #ffffff;

  ${breakpoints.up('md')} {
    position: relative;
    bottom: 0;
    left: 0;
    top: 2rem;
  }
`;

export const TitleCard = styled.h1`
  font-family: Work Sans/headline/small;
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
  color: #1d1d1b;
  text-align: center;
`;

export const SubTitle = styled.h2`
  font-family: Work Sans/headline/small;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  color: #5476fd;
  text-align: center;
`;

export const DescriptionCard = styled.p`
  width: 322px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  font-family: Work Sans/title/medium;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #686866;
  text-align: center;
`;

export const Button = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: #2954fc;
  outline: none;
  border: none;
  height: 40px;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #ffff;
  margin-top: 4rem;
`;
