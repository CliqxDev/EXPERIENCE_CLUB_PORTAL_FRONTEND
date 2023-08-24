/* eslint-disable no-nested-ternary */
import { css, styled } from 'styled-components';
import { breakpoints } from 'styles';
import { Tab } from './types';

export const WrapperProfile = styled.main`
  width: 100%;
  height: 100vh;
  background: #e8e8e8;
  padding: 0 1.6rem;
`;

export const WrapperResponsive = styled.div`
  ${breakpoints.up('md')} {
    max-width: 720px;
    margin: 0 auto;
  }
`;

export const TopNavigation = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.6rem;
  gap: 8px;
`;

const titlesBorderAndColor = css`
  border-bottom: 2px #979796 solid;
  color: #1d1d1b;
`;

const titlesVariant = {
  PROFILE: css`
    width: 4.4rem;
    ${titlesBorderAndColor}
  `,
  ADDRESS: css`
    width: 7.8rem;
    ${titlesBorderAndColor}
  `,
  SECURITY: css`
    width: 8.6rem;
    ${titlesBorderAndColor}
  `,
  DEFAULT: css`
    border: none;
    color: #2954fc;
  `
};

export const Titles = styled.span<{ variant: Tab }>`
  height: 4.8rem;
  font-size: 1.6rem;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  gap: 10px;
  cursor: pointer;

  width: ${({ variant }) => titlesVariant[variant]};
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  margin-top: -1.6rem;
  background: #979796;
`;

export const DeleteAccount = styled.span`
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 2.4rem;
  color: #dc2626;
  cursor: pointer;
`;
