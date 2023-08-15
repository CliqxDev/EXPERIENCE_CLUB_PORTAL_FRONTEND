import styled from 'styled-components';


export const ExploreCards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1.6rem;
  margin: 4rem 0 4rem 0;
`;

export const TopExplore = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TitleExplore = styled.h1`
  font-family: Work Sans/headline/medium;
  font-size: 2.8rem;
  font-weight: 400;
  line-height: 3.6rem;

  color: #E8E8E8;
`;

export const InfoCard = styled.div`
  width: 100%;
  height: 40rem;

  border-radius: 4px;
  margin-top: 2rem;
  background: #FFFF;
`;

export const TitleCard = styled.h1`
  width: 34rem;

  font-family: Work Sans/title/large;
  font-size: 2.2rem;
  font-weight: 400;
  line-height: 2.8rem;
  padding: 1rem 0 1rem 1.6rem;

  color: #0C0C0B;
`;

export const DescriptionCard = styled.p`
  width: 34rem;

  font-family: Work Sans/title/large;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.4rem;
  padding: 0 0 1rem 1.6rem;

  color: #4A4A49;
`;

export const FooterCard = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.6rem;
`;

export const NameColumnistFooter = styled.span`
  font-family: Work Sans/label/large;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2rem;

  color: #254CE5;
`;
