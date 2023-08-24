import styled from 'styled-components';
import { breakpoints } from 'styles';

export const WrapperDesktop = styled.main`
  display: none;
  justify-content: space-around;
  align-items: center;
  height: 72px;
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
  position: relative;
`;

export const ButtonRegister = styled.button`
  width: 120px;
  height: 40px;
  background: transparent;
  outline: none;
  border: none;
  font-family: Work Sans/title/medium;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #0C0C0B;
  cursor: pointer;
`;
