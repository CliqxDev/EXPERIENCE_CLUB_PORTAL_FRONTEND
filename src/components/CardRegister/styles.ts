import styled, { css } from 'styled-components';

import { StyleProps } from './types';

const titleSize = {
  sm: css`
    font-size: 24px;
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

const rootVariants = {
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
    background-color: #ffffff;
  `
};

const titleVariants = {
  default: css`
    color: #4a4a49;
    text-align: center;
  `,
  gray: css``,
  dark: css`
    text-align: center;
    color: #ffffff;
  `,
  lightDark: css``
};

const subtitleVariants = {
  default: css`
    color: #686866;
    text-align: center;
  `,
  gray: css``,
  dark: css`
    color: #ffffff;
    text-align: center;
  `,
  lightDark: css``
};

export const Root = styled.main<StyleProps>`
  display: flex;
  padding: 2.4rem;
  flex-direction: column;
  ${({ variant }) => rootVariants[variant || 'default']}
`;

export const Title = styled.h1<StyleProps>`
  font-family: Work Sans;
  font-style: normal;
  font-weight: 400;
  ${({ size }) => titleSize[size || 'md']}
  ${({ variant }) => titleVariants[variant || 'default']}
`;

export const Subtitle = styled.h2<StyleProps>`
  font-family: Work Sans;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.5px;
  ${({ variant }) => subtitleVariants[variant || 'default']}
`;

export const InspirationDateWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row-reverse;
  margin-top: 18px;
`;

export const InspirationDateWrapperColumn = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    text-align: right;
    font-family: Work Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    color: #eaeeff;

    strong {
      font-size: 24px;
      font-weight: 500;
    }
  }
`;
