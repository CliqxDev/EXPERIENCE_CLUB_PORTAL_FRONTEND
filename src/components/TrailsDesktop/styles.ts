import styled from 'styled-components';
import { breakpoints } from 'styles';

export const WrapperTrail = styled.div`
  display: none;
  flex-direction: column;
  overflow: scroll;
  height: 250px;

  ${breakpoints.up('md')} {
    display: flex;
  }
`;