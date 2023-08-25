import styled from 'styled-components';
import { breakpoints } from 'styles';

export const WrapperTrailDesktop = styled.main`
  width: 100%;
  background: linear-gradient(90deg, #11236A 0%, #11236A 47.92%, #708CFD 65.1%, #708CFD 100%);

  ${breakpoints.up('md')} {
    padding: 0 10rem 0 10rem;
  }

  ${breakpoints.up('lg')} {
    padding: 0 15rem 0 15rem;
  }
`;

export const WrapperTrail = styled.div`
  display: none;
  flex-direction: row-reverse;

  ${breakpoints.up('md')} {
    display: flex;
  }
`;

export const TrailButton = styled.div<{
  variant: string;
  color: string;
}>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 1.6rem;
  cursor: pointer;
  height: 60px;
  background-color: ${({ color }) => color || '#ffffff'};

  span {
    color: #FFFFFF;
    font-family: Work Sans/title/medium;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
  }
`;

