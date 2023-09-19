import styled from 'styled-components';
import { breakpoints } from 'styles';
import { roboto } from 'styles/fonts';

export const Wrapper = styled.main`
  padding-bottom: 56px;
  position: relative;
`;

export const HeaderImage = styled.div`
  height: 689px;
  width: 100%;
  position: relative;

  ${breakpoints.up('md')} {
    display: none;
  }
`;

export const GradientTop = styled.div`
  background: linear-gradient(0deg, rgba(29, 29, 27, 0) 0%, #1d1d1b 86.23%);
  height: 72px;
  width: 100%;
  position: absolute;
  top: -17px;
  z-index: 10;
`;

export const BannerDesktop = styled.div`
  display: none;

  ${breakpoints.up('md')} {
    display: flex;
    flex-direction: column;

    #desktop-header-wrapper {
      z-index: 10;
      background-color: transparent;
      justify-content: center;
    }

    #desktop-header {
      width: 1140px;
      background-color: transparent;

      #box-sign-desktop {
        padding-right: 0;
      }
    }
  }
`;

export const HeaderDesktop = styled.div`
  width: 100%;
  background: #0c0c0b;
  display: flex;
  text-align: left;
  height: 501px;
  justify-content: center;
`;

export const Gradient = styled.div`
  position: absolute;
  top: 0;
  height: 105px;
  left: 0;
  width: 100%;
  background: linear-gradient(0deg, rgba(29, 29, 27, 0) 0%, #1d1d1b 72.23%);
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4.8rem 2.4rem 3.2rem 2.4rem;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  align-items: baseline;

  span {
    color: #d9d9d9;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 48px;
    letter-spacing: 1px;
  }

  background: linear-gradient(360deg, #1d1d1b 55%, rgba(29, 29, 27, 0) 95%);
`;

export const Image = styled.div<{ $backgroundImage: string }>`
  background-image: url(${({ $backgroundImage }) => $backgroundImage});
  width: 100%;
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  height: 689px;
`;

export const ButtonCategoryWrapper = styled.div<{ $background: string }>`
  display: flex;
  padding: 12px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background: ${({ $background }) => $background || '#11236A'};
  margin-bottom: 1.6rem;
`;

export const ButtonCategory = styled.div`
  color: #ffffff;
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0.4px;
  text-transform: uppercase;
`;

export const ExcerptWrapper = styled.div<{ $background: string }>`
  padding: 3.2rem 2.4rem;
  background: ${({ $background }) => $background || '#11236A'};

  ${breakpoints.up('md')} {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

export const ExcerptWrapperDesk = styled.div<{ $background: string }>`
  ${breakpoints.up('md')} {
    width: 1140px;
  }
`;

export const Excerpt = styled.div`
  color: #ffffff;
  font-family: ${roboto.style.fontFamily};
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 42px;
  letter-spacing: 1px;
  margin-bottom: 1.6rem;

  ${breakpoints.up('md')} {
    max-width: 75rem;
  }
`;

export const Text = styled.div`
  color: #b9b9b8;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.5px;
`;

export const DateHourTextWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.6rem;
`;

export const Divider = styled.div`
  background-color: rgba(185, 185, 184, 1);
  width: 1px;
  height: 1.6rem;
  margin: 0 1.6rem;
`;

export const ContentWrapper = styled.div<{ fontSize: number }>`
  display: flex;
  flex-direction: column;
  padding: 3.2rem 1.6rem;

  p {
    margin-bottom: 2.4rem;
    font-size: ${({ fontSize }) => fontSize}px;
  }

  ${breakpoints.up('md')} {
    align-items: center;
  }
`;

export const Post = styled.div`
  color: #1d1d1b;
  font-family: ${roboto.style.fontFamily};
  font-size: 20px;
  font-style: normal;
  font-weight: 350;
  line-height: 33px;
  letter-spacing: 0.8px;

  img {
    width: 100%;
    height: auto;
  }

  ${breakpoints.up('md')} {
    width: 75rem;

    img {
      max-width: 75rem;
      height: auto;
    }
  }
`;

export const Content = styled.div`
  position: relative;

  ${breakpoints.up('md')} {
    width: 75rem;
  }
`;

export const Action = styled.div`
  display: flex;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #ffffff;
  justify-content: space-around;
  align-items: center;
  z-index: 1;

  ${breakpoints.up('md')} {
    width: 100px;
    display: flex;
    position: absolute;
    flex-direction: column;
    top: 0;
    justify-content: flex-start;
    width: 94px;
    height: 230px;
    right: -82px;
    left: auto;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  padding: 0.8rem;
`;

export const Button = styled.div`
  color: #686866;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  margin: 0 4px;
  z-index: 100;
`;

export const LimitedRead = styled.div`
  width: 100%;
  height: 60px;
  border-radius: 8px 8px 0px 0px;
  background: #1d3cb3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: Work Sans/title/large;
  font-weight: 400;
  font-size: 22px;
  line-height: 28px;
  color: #eaeeff;
  padding: 0 2rem 0 1rem;
  position: fixed;
  bottom: 0;
  z-index: 2;
`;

export const BoxBlock = styled.div`
  width: 100%;
  height: 379px;
`;

export const ImgPost = styled.div`
  max-width: 950px;
`;

export const WrapperImage = styled.div`
  position: relative;
  display: flex;
  width: 1140px;

  #banner {
    height: 501px;
    width: auto !important;
  }
`;

export const Title = styled.h1`
  color: #ffffff;
  font-size: 40px;
  font-weight: 600;
  line-height: 43px;
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
  width: 260px;
  margin-left: 70px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  ${breakpoints.up('lg')} {
    margin-left: 0px;
    width: 460px;
  }
`;

export const GradientDesk = styled.div`
  width: 260px;

  ${breakpoints.up('lg')} {
    width: 460px;
  }
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

export const TextWrapper = styled.div`
  width: 260px;

  ${breakpoints.up('lg')} {
    width: 460px;
  }
  position: absolute;
  height: 100%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  margin-bottom: 48px;
  justify-content: flex-end;
`;
