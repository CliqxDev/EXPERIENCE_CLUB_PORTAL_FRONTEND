/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-nested-ternary */
import styled from 'styled-components';

type LabelProps = {
  labelSelected: any;
};

export const Wrapper = styled.main<LabelProps>`
  width: 100%;

  display: flex;
  flex-direction: column;

  padding: 1.6rem;
  background: ${({ labelSelected }) =>
    labelSelected === 'mercado'
      ? '#11236A'
      : labelSelected === 'gestao'
      ? '#172E8B'
      : labelSelected === 'tecnologia'
      ? '#1D3CB3'
      : labelSelected === 'esg'
      ? '#254CE5'
      : labelSelected === 'startup'
      ? '#5476FD'
      : labelSelected === 'futuro' && '#708CFD'};

  input[type='radio'] {
    display: none;
  }

  input[type='radio']:checked + label {
    background: none;
    border: none;
  }
`;

export const RadioLabel = styled.label<LabelProps>`
  width: 14.7rem;
  height: 4rem;

  font-family: Work Sans;
  font-size: 1.4rem;
  font-weight: 500;
  color: ${({ labelSelected }) =>
    labelSelected === 'startup' || labelSelected === 'futuro'
      ? '#0C0C0B'
      : '#FFFFFF'};

  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1.6rem;
  border: ${({ labelSelected }) =>
    labelSelected === 'startup' || labelSelected === 'futuro'
      ? '1px solid #0C0C0B'
      : '1px solid #FFFFFF'};
  border-radius: 8px;
  background: transparent;
  cursor: pointer;

  &:hover {
    border: ${({ labelSelected }) =>
      labelSelected === 'startup' || labelSelected === 'futuro'
        ? '1px solid #FFFFFF'
        : '1px solid #0C0C0B'};
    transition: 0.3s all;
  }

  input[type='radio']:checked + label {
    background: red;
    border: none;
  }
`;

export const ContentRadio = styled.div`
  display: flex;
  align-items: center;

  margin-top: 1rem;
`;
