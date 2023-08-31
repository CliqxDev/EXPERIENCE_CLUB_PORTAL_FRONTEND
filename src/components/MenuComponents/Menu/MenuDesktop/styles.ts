import styled from 'styled-components';
import { breakpoints } from 'styles';

export const WrapperDesktop = styled.main`
  width: 260px;
  height: auto;
  position: absolute;
  background-color: #ffffff;
  box-shadow: 0px 0px 5px 0px #00000040;
  padding: 1.6rem;
  top: 70px;
  z-index: 999;

  ${breakpoints.up('md')} {
    right: 120px;
  }

  ${breakpoints.up('lg')} {
    right: 200px;
  }

  ${breakpoints.up('xl')} {
    right: 380px;
  }
`;

export const MenuList = styled.div`
  padding: 16px;
`;

export const MenuLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-family: Work Sans/label/large;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    color: #0C0C0B;
    cursor: pointer;
  }
`;
