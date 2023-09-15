import styled from 'styled-components';
import { breakpoints } from 'styles';

export const WrapperDesktop = styled.main`
  display: none;
  align-items: center;
  justify-content: space-between;
  height: 120px;
  background-color: #ffffff;
  position: relative;
  width: 100%;

  ${breakpoints.up('md')} {
    display: flex;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
`;

export const SpanAction = styled.span`
  font-family: Work Sans/title/medium;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #0C0C0B;
  cursor: pointer;
`;
