import InputMask from 'react-input-mask';
import { NumericFormat } from 'react-number-format';
import styled, { css } from 'styled-components';
import { spacings } from 'utils';

import { roboto } from 'styles/fonts';
import { Variant } from './types';

interface WrapperProps {
  error?: string;
  disabled?: boolean;
  spacing?: string;
  fullwidth?: string;
  variant: Variant;
}

const labelVariants = {
  default: css`
    background-color: #ffffff;
    color: #49454f;
  `,
  transparent: css`
    background-color: transparent;
    color: #ffffff;
  `,
  transparent2: css`
    background-color: transparent;
    color: #ffffff;
  `
};

export const Label = styled.label<{ variant: Variant }>`
  ${({ variant }) => css`
    position: absolute;
    transform: translate(0, 16px);
    transform-origin: top left;
    transition: 0.2s ease-in-out;

    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.4rem;
    left: 1.6rem;

    span {
      color: #dc2626;
    }

    ${labelVariants[variant]}
  `}
`;

const inputTextVariants = {
  default: css`
    border: 1px solid #79747e;
    color: #1d1b20;

    &:disabled {
      border-color: rgba(185, 185, 184, 1);
      opacity: 0.38;
      user-select: none;
    }
  `,
  transparent: css`
    border: 1px solid #ffffff;
    color: #ffffff;
  `,
  transparent2: css`
    border: 1px solid #ffffff;
    color: #ffffff;
  `
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment, spaced-comment
//@ts-ignore
export const InputText = styled(InputMask)<{ variant: Variant }>`
  ${({ variant }) => css`
    font-size: 16px;
    background: transparent;
    border-radius: 4px 4px 0px 0px;
    height: 56px;
    outline: none;
    width: 100%;
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

    ${inputTextVariants[variant]}
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

const errorVariants = {
  default: css`
    color: #b3261e;
  `,
  transparent: css`
    color: #ffffff;
  `,
  transparent2: css`
    color: #ffffff;
  `
};

export const Error = styled.div<{ variant: Variant }>`
  ${({ variant }) => css`
    font-family: ${roboto.style.fontFamily};
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.6rem;
    display: flex;
    margin-left: 1.6rem;
    margin-top: 0.4rem;
    ${errorVariants[variant]}
  `}
`;

export const Info = styled.div`
  ${() => css`
    font-weight: normal;
    font-size: 12px;
    color: #336636;

    margin-top: 4px;
  `}
`;

const inputWrapperVariants = {
  default: css`
    background-color: #ffffff;
    ${InputText},
    ${InputCurrency} {
      &:focus,
      &:not(:placeholder-shown) {
        border: 1px solid #2954fc;

        ~ ${Label} {
          color: #2954fc;
          background-color: #ffffff;
        }
      }

      ::placeholder {
        color: #336636;
      }
    }
  `,
  transparent: css`
    background-color: transparent;
    ${InputText},
    ${InputCurrency} {
      &:focus,
      &:not(:placeholder-shown) {
        border: 1px solid #ffffff;
        ~ ${Label} {
          background-color: #5476fd;
          color: #ffffff;
        }
      }

      ::placeholder {
        color: #ffffff;
      }
    }
  `,
  transparent2: css`
    background-color: transparent;
    ${InputText},
    ${InputCurrency} {
      &:focus,
      &:not(:placeholder-shown) {
        border: 1px solid #ffffff;
        ~ ${Label} {
          background-color: #254ce5;
          color: #ffffff;
        }
      }

      ::placeholder {
        color: #ffffff;
      }
    }
  `
};

export const InputWrapper = styled.div<{
  variant: Variant;
  disabled?: boolean;
}>`
  ${({ variant, disabled }) => css`
    display: flex;
    flex-direction: column;
    position: relative;

    ${InputText},
    ${InputCurrency} {
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

    input::-ms-reveal,
    input::-ms-clear {
      display: none;
    }

    ${!disabled && inputWrapperVariants[variant]}
  `}
`;

const wrapperModifiersErrorVariant = {
  default: css`
    ${Label} {
      color: #b3261e !important;
    }
  `,
  transparent: css`
    ${Label} {
      color: #ffffff !important;
    }
  `,
  transparent2: css`
    ${Label} {
      color: #ffffff !important;
    }
  `
};

const wrapperModifiers = {
  error: (variant: Variant) => css`
    ${InputText},
    ${InputCurrency} {
      border: 1px solid #b3261e !important;
    }
    ${wrapperModifiersErrorVariant[variant]}
  `,
  disabled: () => css`
    ${InputWrapper} {
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
  ${({ error, disabled, spacing, fullwidth, variant }) => css`
    position: relative;

    margin-bottom: ${spacings[spacing || '0']};

    ${error && wrapperModifiers.error(variant)}
    ${disabled && wrapperModifiers.disabled()}
    width: ${fullwidth}
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
