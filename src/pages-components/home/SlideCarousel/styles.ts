import styled from 'styled-components';
import { breakpoints } from 'styles';

export const Wrapper = styled.main`
  width: 100%;
  background: #000000;
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Title = styled.h1`
  font-size: 2.4rem;
  font-weight: 400;
  line-height: 3.2rem;
  color: #ffff;
  padding: 0 1.6rem;
`;

export const Description = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.4rem;
  margin-top: 1.6rem;
  color: #ffff;
  padding: 0 1.6rem;
`;
export const FooterSlideWrapper = styled.div`
  height: 250px;
  display: flex;
  flex-direction: column-reverse;
`;

export const FooterSlide = styled.div`
  padding: 0 1.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2.4rem 0;
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

export const WrapperText = styled.div`
  position: absolute;
  top: -32%;
  left: 0;
  width: 100%;
  background: linear-gradient(0deg, #000000 60.94%, rgba(29, 29, 27, 0) 100%);

  ${breakpoints.up('md')} {
    position: relative;
    margin-top: -32px;
    padding-top: 32px;
  }
`;
export const WrapperContent = styled.div`
  position: relative;
`;

export const WrapperImagem = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
