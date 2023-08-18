/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-nested-ternary */
import styled, { css } from 'styled-components';

import { StyleProps } from './types';

const trailsVariants = {
  DEFAULT: css`
    background: #11236A;
  `,
  MERCADO: css`
    background: #11236A;
  `,
  GESTAO: css`
    background: #172E8B;
  `,
  TECNOLOGIA: css`
    background: #1D3CB3;
  `,
  ESG: css`
    background: #254CE5;
  `,
  STARTUP: css`
    background: #5476FD;
  `,
  FUTURO: css`
    background: #708CFD;
  `,
}

const widthSizeVariants = {
  DEFAULT: css`
    width: 14.7rem;
  `,
  MERCADO: css`
    width: 14.7rem;
  `,
  GESTAO: css`
    width: 9.6rem;
  `,
  TECNOLOGIA: css`
    width: 12rem;
    margin-right: 0;
  `,
  ESG: css`
    width: 10.7rem;
  `,
  STARTUP: css`
    width: 10rem;
  `,
  FUTURO: css`
    width: 15.7rem;
    margin-right: 0;
  `,
}

const hoverVariant = css`
  color: #FFFFFF;

  &:hover {
    border: 1px solid #FFFFFF;
    transition: 0.3s all;
  }
`;

const radioButtonVariants = {
  DEFAULT: css`
    background: #11236A;
    ${hoverVariant}
  `,
  MERCADO: css`
    background: #11236A;
    ${hoverVariant}
  `,
  GESTAO: css`
    background: #172E8B;
    ${hoverVariant}
  `,
  TECNOLOGIA: css`
    background: #1D3CB3;
    ${hoverVariant}
  `,
  ESG: css`
    background: #254CE5;
    ${hoverVariant}
  `,
  STARTUP: css`
    background: #5476FD;
    ${hoverVariant}
  `,
  FUTURO: css`
    background: #708CFD;
    ${hoverVariant}
  `,
}

export const Wrapper = styled.main<StyleProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1.6rem;

  input[type='radio'] {
    display: none;

    &:checked + label {
      border: none;
    }
  }

  ${({ labelSelected }) => trailsVariants[labelSelected || 'DEFAULT']}
`;

export const RadioLabel = styled.label<StyleProps>`
  height: 4rem;
  font-family: Work Sans;
  font-size: 1.4rem;
  font-weight: 500;
  margin-top: 1rem;
  margin-right: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: transparent;
  cursor: pointer;

  ${({ sizes }) => widthSizeVariants[sizes || 'DEFAULT']};
  ${({ colors }) => radioButtonVariants[colors || 'DEFAULT']};
`;

export const ContentRadio = styled.div`
  display: flex;
  align-items: center;
`;
