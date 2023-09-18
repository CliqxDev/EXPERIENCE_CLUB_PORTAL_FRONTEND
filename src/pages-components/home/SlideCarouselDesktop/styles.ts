import styled from 'styled-components';
import { breakpoints } from 'styles';

export const Wrapper = styled.main`
  width: 100%;
  background: #0c0c0b;
  display: flex;
  text-align: left;
  height: 460px;
  justify-content: end;
`;

export const ImgPost = styled.div`
  max-width: 950px;

  /* #banner    ${breakpoints.up('md')} {
      height: 415px;
      width: 800px;
    }
  } */
`;
export const WrapperImage = styled.div`
  position: relative;
  display: flex;
  #banner {
    height: 460px;
    width: auto !important;
  }
`;

export const Title = styled.h1`
  color: #ffffff;
  font-size: 40px;
  font-weight: 600;
  line-height: 43px;
  margin-top: 112px;
`;

export const Description = styled.p`
  font-size: 21px;
  font-style: normal;
  font-weight: 400;
  line-height: 23px;
  margin-top: 1.6rem;
  color: #ffff;
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
  justify-content: center;
  width: 48px;
  height: 48px;
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
    /* position: relative; */
    /* top: 0; */
    /* background: transparent; */
    position: relative;
    margin-top: -32px;
    padding-top: 32px;
  }
`;

export const WrapperContent = styled.div`
  width: 460px;
  position: absolute;
  height: 100%;
  ${breakpoints.up('lg')} {
    left: -327px;
  }
`;

export const Gradient = styled.div`
  width: 460px;
  position: absolute;
  height: 100%;
  background: linear-gradient(
    90deg,
    #0c0c0b 0%,
    rgba(14, 14, 13, 0.8) 25.59%,
    rgba(18, 18, 17, 0.5) 64.08%,
    rgba(29, 29, 27, 0) 100%
  );
`;

export const WrapperShare = styled.div``;

export const WrapperAction = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: -54px;
  bottom: 86px;
`;
