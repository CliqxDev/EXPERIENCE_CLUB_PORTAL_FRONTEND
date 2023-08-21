import { css, styled } from 'styled-components';

export const PasswordRulesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  padding-left: 0.4rem;
  padding-top: 0.4rem;
  margin-bottom: 2.4rem;
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
