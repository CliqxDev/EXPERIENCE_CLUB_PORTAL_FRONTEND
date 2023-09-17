import { styled } from 'styled-components';
import { roboto } from 'styles/fonts';
import { breakpoints } from 'styles';

export const PlanWrapper = styled.main`
  width: 100%;
  padding: 1rem 1.6rem;
  background-image: url('./imgs/bg-plan.png');
  background-repeat: no-repeat;
  background-size: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${breakpoints.up('md')} {
    width: 380px;
  }
`;

export const Title = styled.h1`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  letter-spacing: 0.5px;
  color: #ffff;
`;

export const Description = styled.p`
  width: 16rem;
  font-family: ${roboto.style.fontFamily};
  font-size: 1.1rem;
  margin-top: 0.2rem;
  color: #ffff;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
`;

export const ButtonPlan = styled.button`
  border-radius: 8px;
  padding: 1rem 2.4rem;
  border: none;
  outline: none;
  color: #ffffff;
  background: #1D3CB3;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.main`
  display: flex;
  flex-direction: column;
`;
