import styled from 'styled-components';

export const ExploreWrapper = styled.main`
  width: 100%;
  height: auto;

  padding: 2rem;
  background: #E8E8E8;
`;

export const ListCard = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const Card = styled.div`
  width: 96%;
  height: 28.5rem;
  margin-top: 2rem;

  display: flex;
  flex-direction: column;
  justify-self: center;

  border-radius: 4px;
  background: #FFF;
  padding: 1rem;
`;

export const DescriptionCard = styled.p`
  width: 15rem;
  height: 10.5rem;
  margin-top: 1rem;

  font-family: Work Sans;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 2.6rem;

  color: #0C0C0B;
`;

export const FooterCard = styled.div`
  width: 100%;

  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TextFooter = styled.p`
  font-family: Work Sans;
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.8rem;

  color: #254CE5;
`;
