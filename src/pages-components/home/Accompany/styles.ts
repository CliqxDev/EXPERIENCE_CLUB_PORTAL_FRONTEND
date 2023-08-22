import styled from 'styled-components';

export const AccompanyWrapper = styled.main`
  width: 100%;
  height: 59rem;

  display: flex;
  flex-direction: column;

  overflow-x: auto;

  padding: 2rem 0 2rem 2rem;
  background: #e8e8e8;

  @media (min-width: 1024px) {
    padding: 2rem 10rem 2rem 10rem;
  }

  @media (min-width: 1440px) {
    padding: 4rem 15rem 4rem 15rem;
  }
`;

export const AccompanyList = styled.div`
  width: auto;
  overflow-y: hidden;

  display: flex;
  flex-direction: row;
  align-items: center;

  overflow-x: auto;
  gap: 1.6rem;
`;

export const AccompanyTitle = styled.h1`
  font-size: 2.8rem;
  font-weight: 500;
  line-height: 3.6rem;

  color: #4a4a49;
`;

export const AccompanyCard = styled.div`
  width: 27.9rem;
  height: 44rem;

  display: flex;
  flex-direction: column;

  padding: 2rem;
  margin: 2rem 0 2rem 0;
  background: #ffff;
`;

export const TopCard = styled.div`
  width: 100%;
  height: 2.4rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 1rem;
`;

export const FooterCard = styled.div`
  width: 8.9rem;
  height: 4.4rem;

  margin-top: 2rem;

  display: flex;
  align-items: center;
`;

export const DescriptionCard = styled.p`
  width: 24rem;
  height: 11.2rem;

  font-size: 2.2rem;
  font-weight: 400;
  line-height: 2.8rem;

  margin-top: 1rem;
  color: #1d1d1b;
`;
