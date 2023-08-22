import styled from 'styled-components';

export const FormatsWrapper = styled.main`
  width: 100%;
  height: auto;

  padding: 2rem;
  background: #e8e8e8;
`;

export const ListCard = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 2rem;
`;

export const ContentCard = styled.div`
  width: 96%;
  height: 10rem;

  display: flex;
  flex-direction: column;
  justify-self: center;

  border-radius: 4px;
  background: #ffff;
  margin-top: 2rem;
  padding: 1rem;
`;

export const TopCard = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ActionTitle = styled.h1`
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 2rem;
  text-transform: uppercase;

  color: #686866;
`;

export const FormatsTitle = styled.p`
  font-weight: 400;
  font-size: 2.2rem;
  line-height: 2.8rem;
  margin-top: 3rem;

  color: #2954fc;
`;
