import styled from 'styled-components';

export const InfoColumnistsWrapper = styled.main`
  width: 100%;
  height: auto;

  background: rgb(41,84,252);
  background: linear-gradient(180deg, rgba(41,84,252,1) 0%, rgba(0,0,0,1) 7%);
`;

export const InfoColumnist = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  padding-top: 8rem;
`;

export const NameColumnist = styled.h1`
  font-family: Work Sans/title/medium;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 2.4rem;

  color: #BDCAFE;
  padding-top: 2rem;
`;

export const DescriptionColumnist = styled.p`
  width: 32rem;
  height: 12rem;

  font-family: Work Sans/label/large;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2rem;

  color: #FFFF;
  padding-top: 1rem;
`;
