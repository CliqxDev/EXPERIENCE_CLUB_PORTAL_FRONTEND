import styled, { css } from 'styled-components';

export const Wrapper = styled.div``;

const variants = {
  default: css`
    background: #2954fc;
    border: none;

    &:disabled {
      cursor: default;
      box-shadow: none;
      background: #e8e8e8;
      color: #1d1d1b;
    }

    &:not([disabled]):hover {
      background: #6750a4;
      box-shadow:
        0px 1px 3px 1px rgba(0, 0, 0, 0.15),
        0px 1px 2px 0px rgba(0, 0, 0, 0.3);
    }
  `,
  link: css`
    background: #ffffff;
    color: #2954fc;
    border: none;

    &:disabled {
      cursor: default;
      box-shadow: none;
      background: #e8e8e8;
      color: #1d1d1b;
    }

    &:not([disabled]):hover {
      background: rgba(103, 80, 164, 0.08);
      color: #6750a4;
    }
  `,
  secondary: css`
    background: #ffffff;
    color: #4a4a49;
    border: none;

    &:disabled {
      cursor: default;
      box-shadow: none;
      background: #e8e8e8;
      color: #686866;
      color: rgba(102, 104, 102, 0.38);
    }
  `
};

export const Button = styled.button<{
  variant: 'default' | 'link' | 'secondary';
}>`
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2.4rem;
  color: #ffffff;
  font-family: Work Sans;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 20px;
  border-radius: 8px;
  cursor: pointer;
  ${({ variant }) => variant && variants[variant]}
`;
