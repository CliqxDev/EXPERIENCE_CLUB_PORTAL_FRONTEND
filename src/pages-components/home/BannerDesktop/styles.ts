import styled from 'styled-components';
import { breakpoints } from 'styles';

export const BannerWrapper = styled.main`
  width: 100%;
  height: 64px;
  background: #2954FC;
  display: none;
  position: fixed;
  bottom: 0;

  ${breakpoints.up('md')} {
    display: flex;
  }
`;

export const Assign = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${breakpoints.up('md')} {
    padding: 2rem 10rem 2rem 10rem;
  }

  ${breakpoints.up('lg')} {
    padding: 4rem 15rem 4rem 15rem;
  }
`;

export const Plans = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.h1`
  font-family: Work Sans/headline/large;
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
  color: #FFFFFF;
`;

export const SubTitle = styled.h2`
  font-family: Work Sans/headline/large;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  margin-left: 10px;
  margin-top: 10px;
  color: #0C0C0B;
`;

export const PlanButton = styled.button`
  width: 225px;
  height: 30px;
  border-radius: 4px;
  border: none;
  font-family: Work Sans/headline/large;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #2954FC;
  text-align: center;
  cursor: pointer;
`;
