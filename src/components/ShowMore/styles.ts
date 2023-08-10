import styled from 'styled-components';

export const ShowMoreWrapper = styled.main`
  width: 100%;
  height: auto;

  background: #E8E8E8;
  padding: 2rem;
`;

export const ListCard = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContentCard = styled.div`
  width: 96%;
  height: 22rem;

  background: #FFFF;
  margin-top: 2rem;
  padding: 1rem;
`;

export const TopContent = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
`;

export const Descriptions = styled.div`
  width: 100%;
  max-height: 15rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-left: 1rem;
`;

export const TitleBanner = styled.h1`
  font-family: Work Sans;
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 2.4rem;
  
  color: #0C0C0B;
`;

export const DescriptionBanner = styled.p`
  font-family: Work Sans;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 2.4rem;
  margin-top: 0.8rem;
  
  color: #4A4A49;
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
