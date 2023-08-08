import styled from 'styled-components';

export const ColumnistsWrapper = styled.main`
  width: 100%;
  height: 38.4rem;

  background: #FFFF;
`;

export const TopContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2rem;
  margin: 6rem 0 0 0;
`;

export const ShowMore = styled.span`
  font-family: Work Sans;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2rem;

  color: #172E8B;
`;

export const ListColumnists = styled.div`
  width: auto;
  height: 16rem;
  
  display: flex;
  flex-direction: row;
  align-items: center;

  overflow-x: auto;
  gap: 1.6rem;
`;

export const CardColumnists = styled.div`
  width: 24rem;
  height: 14.4rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-left: 2rem;
`;

export const InfoColumnists = styled.div`
  height: 9.2rem;

  display: flex;
  align-items: center;
`;

export const FooterCard = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
`;

export const Description = styled.p`
  width: 14rem; 
  height: 9.2rem;

  margin-left: 1rem;

  font-family: Work Sans;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 2.4rem;

  color: #1D1D1B;
`;

export const NameColumnist = styled.p`
  font-family: Work Sans;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2rem;

  color: #4A4A49;
`;
