import styled from 'styled-components';
import { breakpoints } from 'styles';

export const Wrapper = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 72px;
  background-color: #ffffff;
  position: relative;
  width: 100%;

  /* ${breakpoints.up('md')} {
    display: none;
  } */
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
`;
