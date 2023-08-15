import { styled } from "styled-components";

export const PlanWrapper = styled.main`
  width: 90%;
  height: 11rem;

  padding: 2rem;
  background-image: url('./imgs/bg-plan.png');
  background-repeat: no-repeat;
  background-size: 100%;

  margin: 2rem 2rem 1.4rem 2rem;
`;  

export const Title = styled.h1`
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 2.4rem;

  color: #FFFF;
`;

export const Description = styled.p`
  width: 15rem;

  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.4rem;

  margin-top: 0.6rem;

  color: #FFFF;
`;

export const ButtonPlan = styled.button`
  width: 13rem;
  height: 4rem;

  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2rem;

  background: #1D1D1B;
  color: #FFFF;

  outline: none;
  border: none;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  float: right;
  margin-top: -3rem;
  cursor: pointer;
`;