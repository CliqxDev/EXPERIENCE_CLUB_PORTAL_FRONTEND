import styled, { css } from 'styled-components';

export const Wrapper = styled.main``;

const variants = {
  black400: css`
    color: #4A4A49;
  `,
  black50: css`
    color: #E8E8E8;
  `,
  light: css`
    color: #F4F4F4;
  `,
  lightCenter: css`
    color: #F4F4F4;
    text-align: center;
    margin-top: 2rem;
  `,
}


export const Title = styled.h1<{ variant: 'black400' | 'black50' | 'light' | 'lightCenter' }>`
  font-family: Work Sans;
  font-size: 2.8rem;
  font-weight: 400;
  line-height: 3.6rem;
  ${({ variant }) => variant && variants[variant]}
`;