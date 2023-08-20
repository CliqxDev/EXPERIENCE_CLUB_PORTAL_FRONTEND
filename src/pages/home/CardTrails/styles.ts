import styled from 'styled-components';

export const Wrapper = styled.main`
  width: 100%;

  display: flex;
  flex-direction: column;
`;

export const ContentCard = styled.div`
  height: 26rem;

  display: flex;
  flex-direction: column;
  margin-top: 2rem;

  padding: 2rem;
  background: #FFFF;
  border-radius: 4px;
`;

export const ContentDescriptionCard = styled.div`
  display: flex;
  flex-direction: row;

  margin-top: 1.6rem;
`;

export const TileCardText = styled.h1`
  width: 34.8rem;
  height: 5.6rem;
  
  font-family: Work Sans;
  font-size: 2.2rem;
  font-weight: 400;
  line-height: 2.8rem;
  color: #1D1D1B;
`;

export const DescriptionCardText = styled.p`
  width: 21.6rem;
  height: 12rem;

  margin-left: 1rem;
  
  font-family: Roboto Slab;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2.4rem;
  color: #686866;
`;

export const FooterCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 1.4rem;
`;

export const Subject = styled.div`
  display: flex;
  align-items: center;
`;

export const SubjectText = styled.span`
  font-family: Work Sans;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2rem;

  margin-left: 1rem;
  color: #254CE5;
`;

export const ShowMore = styled.button`
  width: 12.5rem;
  height: 4.4rem;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 4rem auto;

  font-family: Work Sans;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2rem;
  color: #FFFF;

  outline: none;
  border: none;
  background: none;
  cursor: pointer;
`;
