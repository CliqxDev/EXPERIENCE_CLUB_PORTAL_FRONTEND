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
  margin: 2rem 0 1rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const buttonSelected = css`
  background: #B9B9B8;
  color: #0C0C0B;
`;

const buttonVariants = {
  YEARLY: css`
   ${buttonSelected}
  `,
  MONTHLY: css`
   ${buttonSelected}
  `,
  DEFAULT: css`
    background: #FFFFFF;
    color: #2954FC;
  `,
}

export const ButtonSelect = styled.button<{ variant: SelectedTypePlan }>`
  width: 17.5rem;
  height: 4.5rem;
  font-family: Work Sans;
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
    font-family: Work Sans/body/small;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.6rem;
    color: #E8E8E8;
    text-align: left;
  }
`;

export const DescriptionPlan = styled.span`
  font-family: Work Sans;
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 2rem;
  color: #B9B9B8;
  text-align: left;
  margin: 1.6rem 0 1.6rem 0;
`;

export const EconomyPlan = styled.p`
  font-family: Work Sans/label/large;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2rem;
  color: #E8E8E8;
  text-align: center;
  margin-top: 1.6rem;

  span {
    text-decoration: underline;
  }
`;

export const Line = styled.div`
  width: 100%; 
  height: 1px;
  background: #B9B9B8;
`;

export const RegisterFreePlan = styled.div`
  width: 100%;
  height: 10.8rem;
  border-radius: 4px;
  padding: 2.4rem;
  margin-top: 2rem;
  background: #B9B9B8;
  font-family: Work Sans;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2rem;
  text-align: left;

  p {
    color: #0C0C0B;
  }

  span {
    color: #2954FC;
    text-decoration: underline;
  }
`;
