import Select from 'react-select';

import styled, { css } from 'styled-components';
import { roboto } from 'styles/fonts';

export const ReactSelect = styled(Select)<any>`
  width: ${({ fullwidth }) => (fullwidth ? '100%' : '300px')};
  .react-select__control {
    opacity: ${({ disabled }) => (disabled ? 0.3 : 1)};
    height: 56px;
    box-shadow: none;
    background-color: transparent;
    cursor: pointer;
    font-size: 16px;
    background: transparent;
    border-radius: 4px 4px 0px 0px;
    height: 56px;
    outline: none;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 1.6rem;
    font-family: ${roboto.style.fontFamily};
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.4rem;
    border: 1px solid #79747e;
    color: #1d1b20;
  }

  .react-select__indicator-separator {
    display: none;
  }
`;

export const Label = styled.label`
  ${() => css`
    position: absolute;
    transform: translate(0, 16px);
    transform-origin: top left;
    transition: 0.2s ease-in-out;

    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.4rem;
    left: 1.6rem;
    background-color: #ffffff;
    color: #49454f;

    span {
      color: #dc2626;
    }
  `}
`;

export const WrappedMain = styled.div<any>`
  display: flex;
  flex-direction: column;
  position: relative;
  min-width: 100px;
  ${ReactSelect} {
    &:focus,
    &:not(:placeholder-shown) {
      ~ ${Label} {
        line-height: 1.6rem;
        font-size: 1.2rem;
        transform: translate(0, -8px);
        z-index: 10;
        display: block;
        padding: 0 0.4rem;
        left: 1rem;
      }
    }

    ::placeholder {
      font-weight: normal;
      font-size: 16px;
      line-height: 22px;
    }
  }
`;
