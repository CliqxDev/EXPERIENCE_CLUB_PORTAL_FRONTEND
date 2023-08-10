import { styled } from "styled-components";

export const AssignWrapper = styled.main`
  width: 35rem;
  height: 24rem;

  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  border-radius: 4px;
`;

export const TopCard = styled.div`
  height: 13rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 4px 4px 0 0;

  background: #EAEEFF;
`;

export const Title = styled.h1`
  width: 32rem;
  font-family: Work Sans;
  font-size: 2.4rem;
  font-weight: 400;
  line-height: 3.2rem;

  color: #4A4A49;
`;

export const SubTitle = styled.h2`
  font-family: Work Sans;
  font-size: 2.4rem;
  font-weight: 500;
  line-height: 3.2rem;

  color: #5476FD;
`;

export const Message = styled.p`
  width: 32rem;
  font-family: Work Sans;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 2.4rem;

  color: #686866;
`;

export const FooterCard = styled.div`
  height: 10rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0 0 4px 4px;

  background: #FFFF;
`;