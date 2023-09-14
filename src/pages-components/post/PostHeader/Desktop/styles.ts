import styled from 'styled-components';
import { breakpoints } from 'styles';
import { roboto } from 'styles/fonts';

export const Wrapper = styled.main`
  display: none;
  align-items: center;
  height: 72px;
  background-color: #1d1d1b;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;

  ${breakpoints.up('md')} {
    display: flex;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  background-color: #1d1d1b;
  width: 100%;
  justify-content: space-between;
`;

export const ActionsWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  #box-sign-desktop {
    width: auto;
    margin-bottom: 0;
  }
`;

export const ButtonRegister = styled.button`
  margin-right: 1.6rem;
  height: 40px;
  background: transparent;
  outline: none;
  border: none;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  color: #ffffff;
  font-family: ${roboto.style.fontFamily};
  font-style: normal;
  line-height: 20px;
`;

export const Text = styled.div`
  color: #ffffff;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.5px;
  width: 161px;
`;
export const LinksWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 4rem;
  margin-left: 5.6rem;
`;
