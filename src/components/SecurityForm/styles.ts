import { css, styled } from "styled-components";

export const ContentSecurity = styled.main`
  width: 90%;
  height: auto;

  margin: 2rem 2rem 1.4rem 2rem;

  background: #FFFF;
  border-radius: 4px;
`;

export const FormContent = styled.form`
  display: flex;
  flex-direction: column;

  padding: 2rem;
`;

export const Title = styled.h1`
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 2.4rem;

  color: #4A4A49;
  padding: 2rem 0 0 1.6rem;
`;

export const SaveButton = styled.button`
  width: 96%;
  height: 3.5rem;

  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  outline: none;
  border: none;
  border-radius: 8px;
  margin-top: 2rem;

  background: #1D1D1B;
  color: #FFFF;
  cursor: pointer;
`;

export const PasswordRulesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  padding-left: 0.4rem;
  padding-top: 0.4rem;
`;

const itemRuleVariant = {
  done: css`
    color: #15803d;
  `,
  error: css`
    color: #dc2626;
  `,
  default: css`
    color: #4a4a49;
  `
};

export const ItemRule = styled.span<{ variant: 'done' | 'error' | 'default' }>`
  font-family: Work Sans;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  text-align: left;

  ${({ variant }) => itemRuleVariant[variant]}
`;