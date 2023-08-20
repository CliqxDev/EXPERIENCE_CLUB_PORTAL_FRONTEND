import styled from 'styled-components';

export const Wrapper = styled.main`
  width: 100%;
  height: 60rem;

  padding: 2rem;
  margin-top: -4rem;
  background: #000000;

  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Title = styled.h1`
  width: 38rem;

  font-size: 2.4rem;
  font-weight: 400;
  line-height: 3.2rem;

  margin-top: 20rem;

  color: #ffff;
`;

export const Description = styled.p`
  width: 38rem;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.4rem;

  margin-top: 1.6rem;

  color: #ffff;
`;

export const FooterSlide = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 6rem;
`;

export const SubjectSection = styled.div`
  display: flex;
  align-items: center;
`;

export const Span = styled.span`
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2rem;

  margin-left: 0.5rem;

  color: #ffff;
`;
