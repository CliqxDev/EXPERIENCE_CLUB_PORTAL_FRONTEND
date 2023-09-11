import styled from 'styled-components';
import { roboto } from 'styles/fonts';

export const Wrapper = styled.main`
  padding-bottom: 56px;
  position: relative;
`;

export const HeaderImage = styled.div`
  height: 689px;
  width: 100%;
  position: relative;
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

  background: linear-gradient(
    360deg,
    #1d1d1b 45.21%,
    rgba(29, 29, 27, 0) 80.16%
  );
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

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3.2rem 1.6rem;
`;

export const Content = styled.div`
  color: #1d1d1b;
  font-family: ${roboto.style.fontFamily};
  font-size: 20px;
  font-style: normal;
  font-weight: 350;
  line-height: 33px;
  letter-spacing: 0.8px;
  max-height: 450px;
  z-index: -1;

  img {
    width: 100%;
    height: auto;
  }
`;


export const Action = styled.div`
  display: flex;
  width: 100%;
  position: fixed;
  bottom: 0;
  background-color: #ffffff;
  justify-content: space-around;
  align-items: center;
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
  background: #1D3CB3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: Work Sans/title/large;
  font-weight: 400;
  font-size: 22px;
  line-height: 28px;
  color: #EAEEFF;
  padding: 0 2rem 0 1rem;
  position: fixed;
  bottom: 0;
  z-index: 2;
`;
