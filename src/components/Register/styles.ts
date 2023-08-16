import styled from 'styled-components';

type ButtonSelectedProps = {
  yearly?: boolean;
  monthly?: boolean;
}

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

export const ButtonSelect = styled.button<ButtonSelectedProps>`
  width: 17.5rem;
  height: 4.5rem;

  font-family: Work Sans;
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 2.4rem;

  outline: none;
  border: none;

  background: ${({ yearly, monthly }) => ( yearly || monthly ) ? "#B9B9B8" : "#FFFFFF"};
  color: ${({ yearly, monthly }) => ( yearly || monthly ) ? "#0C0C0B" : "#2954FC"};
  transition: all 0.2s;
`;

export const PlanPrice = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
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
`;
