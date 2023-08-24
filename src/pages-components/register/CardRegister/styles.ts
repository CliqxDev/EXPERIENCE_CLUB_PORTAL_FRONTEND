import styled, { css } from 'styled-components';

import { StyleProps } from './types';

const titleSize = {
  sm: css`
    font-size: 20px;
    line-height: 32px;
  `,
  md: css`
    font-size: 24px;
    line-height: 32px;
  `,
  lg: css`
    font-size: 36px;
    line-height: 40px;
  `
};

const rootVariants: any = {
  default: css`
    background-color: #ffffff;
  `,
  gray: css`
    background-color: #ffffff;
  `,
  dark: css`
    background-color: #10100f;
  `,
  lightDark: css`
    background-color: #1d1d1b;
  `
};

const titleVariants: any = {
  default: css`
    color: #4a4a49;
    text-align: center;
  `,
  gray: css``,
  dark: css`
    text-align: center;
    color: #ffffff;
  `,
  lightDark: css`
    text-align: left;
    color: #ffffff;
  `
};

const subtitleVariants = {
  default: css`
    color: #686866;
    text-align: center;
    `,
  gray: css`
    color: #B9B9B8;
    text-align: left;
    font-size: 13.5px;
    font-weight: 400;
    line-height: 20px;
  `,
  dark: css`
    color: #ffffff;
    text-align: center;
  `,
  lightDark: css``,
  white: css`
    width: 32.5rem;
    color: #ffffff;
    font-size: 1.4rem;
    font-weight: 400;
    text-align: left;
  `
};

export const Root = styled.main<StyleProps>`
  width: 100%;
  display: flex;
  padding: 2.4rem;
  flex-direction: column;
  ${({ variant }) => rootVariants[variant || 'default']}

  a {
    text-decoration: none;
  }
`;

export const Title = styled.h1<StyleProps>`
  width: 100%;

  font-style: normal;
  font-weight: 400;
  ${({ size }) => titleSize[size || 'md']}
  ${({ variant }) => titleVariants[variant || 'default']}
`;

export const Subtitle = styled.h2<StyleProps>`
  font-size: 16px;
  width: 100%;
  font-weight: 500;
  line-height: 24px;
  ${({ variant }) => subtitleVariants[variant || 'default']}
`;

export const InspirationDateWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row-reverse;
`;

export const InspirationDateWrapperColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 3px;

  p {
    width: 100%;

    font-weight: 500;
    font-size: 1.4rem;
    line-height: 1.6rem;
    color: #ffff;
    text-align: right;
  }

  span {
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 1.4rem;
    color: #b9b9b8;
  }

  strong {
    font-weight: 500;
    font-size: 2rem;
    line-height: 1.6rem;
    color: #ffff;
  }
`;
