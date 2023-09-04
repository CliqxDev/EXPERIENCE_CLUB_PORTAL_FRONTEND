import { styled } from 'styled-components';
import { roboto } from 'styles/fonts';

export const PlanWrapper = styled.main`
  width: 100%;
  height: 12rem;
  padding: 2rem;
  background-image: url('./imgs/bg-plan.png');
  background-repeat: no-repeat;
  background-size: 100% 12rem;
  margin-top: 1.6rem;
`;

export const Title = styled.h1`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.4rem;
  color: #ffff;
`;

export const Description = styled.p`
  width: 15rem;
  font-family: ${roboto.style.fontFamily};
  font-size: 1.1rem;
  font-weight: 400;
  line-height: 1.4rem;
  margin-top: 0.2rem;
  color: #ffff;
`;

export const Row = styled.p`
  display: flex;
  justify-content: space-between;
`;

export const ButtonPlan = styled.button`
  width: 145px;
  height: 60px;
  border-radius: 8px;
  border: none;
  outline: none;
  color: #ffffff;
  background: #2954fc;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -2rem;
`;
