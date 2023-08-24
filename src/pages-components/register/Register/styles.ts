import styled, { css } from 'styled-components';

import { SelectedTypePlan } from './types';

export const Wrapper = styled.main`
  #next-step {
    width: 100%;
  }
`;

export const SubtitleWrapper = styled.div`
  height: calc(100vh - 445px);
  display: flex;
  justify-content: center;
  flex-direction: column;
  overflow: auto;
  margin: 10px 0;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  margin: 1.6rem 0 0.4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button:not(:last-child) {
    margin-right: 0.4rem;
  }
`;

const buttonSelected = css`
  background: #b9b9b8;
  color: #0c0c0b;
`;

const buttonVariants = {
  YEARLY: css`
    ${buttonSelected}
  `,
  MONTHLY: css`
    ${buttonSelected}
  `,
  DEFAULT: css`
    background: #ffffff;
    color: #2954fc;
  `
};

export const ButtonSelect = styled.button<{ variant: SelectedTypePlan }>`
  height: 4.5rem;
  flex: 1;
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 2.4rem;
  outline: none;
  border: none;
  transition: all 0.2s;
  ${({ variant }) => buttonVariants[variant]}
`;

export const PlanPrice = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PriceForUsers = styled.div`
  width: 100%;
  height: 8rem;
  margin: 0 0 1rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h4 {
    width: 100%;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.6rem;
    color: #e8e8e8;
    text-align: left;
  }
`;

export const DescriptionPlan = styled.span`
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 2rem;
  color: #b9b9b8;
  text-align: left;
  margin: 0.8rem 0 1.6rem 0;
`;

export const EconomyPlan = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2rem;
  color: #e8e8e8;
  text-align: center;
  margin-top: 0.4rem;

  span {
    text-decoration: underline;
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background: #b9b9b8;
`;