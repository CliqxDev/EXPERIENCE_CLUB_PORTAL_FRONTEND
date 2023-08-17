import { styled } from 'styled-components';

export const PlanWrapper = styled.main`
  height: 11rem;
  padding: 2rem;
  background-image: url('./imgs/bg-plan.png');
  background-repeat: no-repeat;
  background-size: 100%;
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
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.4rem;
  margin-top: 0.6rem;
  color: #ffff;
`;

export const Row = styled.p`
  display: flex;
  justify-content: space-between;
`;
