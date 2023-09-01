import styled from 'styled-components';
import { breakpoints } from 'styles';

export const BannerWrapper = styled.main`
  width: 100%;
  height: 65px;
  background: #2954FC;
  display: flex;
  position: fixed;
  bottom: 0;
  z-index: 99;
`;

export const Assign = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${breakpoints.up('md')} {
    padding: 2rem 10rem 2rem 10rem;
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

  ${breakpoints.down('md')} {
    font-family: Work Sans/headline/small;
    font-size: 16px;
    line-height: 20px;
    margin-left: 8px;
  }
`;

export const SubTitle = styled.h2`
  font-family: Work Sans/headline/large;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  margin-left: 10px;
  margin-top: 10px;
  color: #0C0C0B;

  ${breakpoints.down('md')} {
    display: none;
  }
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
