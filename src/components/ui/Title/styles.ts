import styled, { css } from 'styled-components';
import { breakpoints } from 'styles';

export const Wrapper = styled.main``;

const variants = {
  black400: css`
    color: #4a4a49;
  `,
  black50: css`
    color: #e8e8e8;
  `,
  light: css`
    color: #f4f4f4;
  `,
  lightCenter: css`
    color: #f4f4f4;
    text-align: center;
  `
};

export const Title = styled.h1<{
  variant: 'black400' | 'black50' | 'light' | 'lightCenter';
}>`
  font-size: 2.8rem;
  font-weight: 400;
  margin-bottom: 0.8rem;
  line-height: 3.6rem;
  ${({ variant }) => variant && variants[variant]}

  ${breakpoints.up('md')} {
    margin-bottom: 0;
    margin-right: 100px;
  }
`;
