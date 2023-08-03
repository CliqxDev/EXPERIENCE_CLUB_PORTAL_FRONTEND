import InputMask from 'react-input-mask';
import { NumericFormat } from 'react-number-format';
import styled, { css } from 'styled-components';
import { spacings } from 'utils';

interface WrapperProps {
  error?: string;
  disabled?: boolean;
  spacing?: string;
}

export const Label = styled.label`
  ${() => css`
    background-color: #ffffff;
    color: #49454f;
    position: absolute;
    transform: translate(0, 16px);
    transform-origin: top left;
    transition: 0.2s ease-in-out;
    font-family: Work Sans;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.4rem;
    left: 1.6rem;

    span {
      color: #dc2626;
    }
  `}
`;

export const InputText = styled(InputMask)`
  ${() => css`
    font-size: 16px;
    font-weight: 600;
    background: transparent;
    border-radius: 4px 4px 0px 0px;
    border: 1px solid #79747e;
    height: 56px;
    outline: none;
    width: 100%;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 1.6rem;
    color: #1d1b20;
    font-family: Roboto;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.4rem;
  `}
`;

export const InputCurrency = styled(NumericFormat)`
  ${() => css`
    background: transparent;
    border: 0;
    height: 100%;
    outline: none;
    width: 100%;
    z-index: 1;
  `}
`;

export const Error = styled.div`
  ${() => css`
    color: #b3261e;
    font-family: Roboto;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.6rem;
    display: flex;
    margin-left: 1.6rem;
    margin-top: 0.4rem;
  `}
`;

export const Info = styled.div`
  ${() => css`
    font-family: Open Sans;
    font-weight: normal;
    font-size: 12px;
    color: #336636;

    margin-top: 4px;
  `}
`;

export const InputWrapper = styled.div`
  ${() => css`
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    position: relative;

    ${InputText},
    ${InputCurrency} {
      &:focus,
      &:not(:placeholder-shown) {
        border: 1px solid #2954fc;

        ~ ${Label} {
          color: #2954fc;
          line-height: 1.6rem;
          font-size: 1.2rem;
          transform: translate(0, -8px);
          background-color: #ffffff;
          z-index: 10;
          display: block;
          padding: 0 0.4rem;
          left: 1rem;
        }
      }

      ::placeholder {
        color: #336636;
        font-weight: normal;
        font-size: 16px;
        line-height: 22px;
        font-family: 'Santander Text';
      }
    }
  `}
`;

const wrapperModifiers = {
  error: () => css`
    ${InputText},
    ${InputCurrency} {
      border: 1px solid #b3261e !important;
    }
    ${Label} {
      color: #b3261e !important;
    }
  `,
  disabled: () => css`
    ${InputWrapper} {
      border-color: #e0e0e0;
    }

    ${Label} {
      label: #858585;
    }

    ${Label},
    ${InputText},
    ${InputCurrency} {
      color: #858585;
      cursor: not-allowed;
    }
  `
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ error, disabled, spacing }) => css`
    position: relative;

    margin-bottom: ${spacings[spacing || '0']};

    ${error && wrapperModifiers.error()}
    ${disabled && wrapperModifiers.disabled()}
  `}
`;

export const LeftIconWrapper = styled.div`
  position: absolute;
  right: 4px;
  top: 0;
`;

export const WrapperPasswordIcon = styled.div`
  position: absolute;
  right: 0.4rem;
  top: 0.5rem;
  z-index: 10;
`;
