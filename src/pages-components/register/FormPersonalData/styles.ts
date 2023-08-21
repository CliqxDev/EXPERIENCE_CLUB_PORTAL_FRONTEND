import styled, { css } from 'styled-components';

export const Wrapper = styled.form`
  padding: 3.2rem 2.4rem;
  background-color: #fff;

  h1 {
    font-size: 2.4rem;
    font-weight: 400;
    line-height: 3.2rem;
  }

  h2 {
    font-size: 1.6rem;
    font-weight: 500;
    letter-spacing: 0.5px;
    line-height: 2.4rem;
    margin-bottom: 3.2rem;
  }

  button {
    width: 100%;
  }

  #register-btn {
    margin-top: 1.6rem;
    width: 100%;
    padding-left: 0;
    padding-right: 0;
  }
`;

export const TermsWrapper = styled.div`
  color: #686866;

  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  margin-bottom: 1.6rem;

  span {
    cursor: pointer;
    color: #2954fc;
  }
`;

export const PasswordRulesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2.4rem;
  padding-left: 1.6rem;
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
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  text-align: left;

  ${({ variant }) => itemRuleVariant[variant]}
`;
