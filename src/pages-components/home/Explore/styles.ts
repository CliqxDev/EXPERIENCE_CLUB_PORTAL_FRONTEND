import styled from 'styled-components';

export const ExploreWrapper = styled.main`
  width: 100%;
  height: auto;

  padding: 2rem;
  background: #e8e8e8;

  @media (min-width: 1024px) {
    padding: 2rem 10rem 2rem 10rem;
  }

  @media (min-width: 1440px) {
    padding: 4rem 15rem 4rem 15rem;
  }
`;

export const ListCard = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    overflow-x: auto;
    gap: 1.6rem;
  }
`;

export const Card = styled.div`
  width: 96%;
  height: 28.5rem;
  margin-top: 2rem;

  display: flex;
  flex-direction: column;
  justify-self: center;

  border-radius: 4px;
  background: #fff;
  padding: 1rem;
  margin-bottom: 1rem;
`;

export const DescriptionCard = styled.p`
  width: 15rem;
  height: 10.5rem;
  margin-top: 1rem;

  font-size: 1.5rem;
  font-weight: 500;
  line-height: 2.6rem;

  color: #1d1d1b;
`;

export const FooterCard = styled.div`
  width: 100%;

  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TextFooter = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.8rem;

  color: #254ce5;
`;
