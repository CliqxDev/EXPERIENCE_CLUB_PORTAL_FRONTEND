import styled from 'styled-components';
import { roboto } from 'styles/fonts';
import { breakpoints } from 'styles';

export const Wrapper = styled.div<{
  variant: string;
  color: string;
}>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 1.6rem;
  cursor: pointer;
  height: 56px;
  background-color: ${({ color }) => color || '#ffffff'};

  span {
    color: ${({ variant }) => (variant === 'sort' ? '#ffffff' : '#4a4a49')};
    font-family: ${roboto.style.fontFamily};
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 20px;
  }

  ${breakpoints.up('md')} {
    justify-content: center;
    padding: 0;

    div {
      display: none;
    }
  }
`;
