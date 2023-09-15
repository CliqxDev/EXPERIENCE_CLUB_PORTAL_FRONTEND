import styled from 'styled-components';

import { breakpoints } from 'styles';
import { roboto } from 'styles/fonts';

export const Wrapper = styled.main`
  padding-bottom: 56px;
  position: relative;
  background-color: #1d1d1b;
  min-height: 100vh;

  #skeleton-wrapper {
    margin-top: 4.2rem;
    background-color: #1d1d1b;

    ${breakpoints.up('md')} {
      flex-wrap: wrap;
      justify-content: center;
      margin-left: 1.4rem;
    }
  }
`;

export const DesktopTitle = styled.div<{ color: string }>`
  display: flex;
  flex-direction: column;
  background-color: #1d1d1b;
  width: 100%;
  z-index: 2;

  h2 {
    z-index: 2;
    color: ${({ color }) => color};
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: 48px;
    letter-spacing: 1px;
  }

  ${breakpoints.up('md')} {
    max-width: 1140px;
    flex-direction: row;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #1d1d1b;
  padding: 0 2.4rem 4.8rem 2.4rem;
  width: 100%;
  height: 220px;
  z-index: 2;
  position: relative;

  ${breakpoints.up('md')} {
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

export const Header = styled.div<{ backgroundcolor: string }>`
  position: relative;
  min-height: 250px;
  width: 100%;
  justify-content: end;
  display: flex;
  flex-direction: column;
  background-color: ${({ backgroundcolor }) => backgroundcolor};

  #header {
    left: 0;
    top: 0;
  }

  ${breakpoints.up('md')} {
    max-width: 1140px;
    min-height: 260px;

    #header {
      display: none;
    }
  }

  #desktop-header-wrapper {
    background-color: transparent;
  }

  #desktop-header {
    background-color: transparent;
  }
`;

export const HeaderWrapper = styled.div<{ backgroundcolor: string }>`
  background-color: ${({ backgroundcolor }) => backgroundcolor};
  display: flex;
  flex-direction: column;

  ${breakpoints.up('md')} {
    align-items: center;
  }
`;

export const Title = styled.div`
  z-index: 2;
  color: #ffffff;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 48px;
  letter-spacing: 1px;

  ${breakpoints.up('md')} {
    margin-top: 0;
    margin-right: 1.4rem;
  }
`;

export const Content = styled.div`
  padding: 4.4rem 1.6rem;
  background-color: #1d1d1b;

  ${breakpoints.up('md')} {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

export const Text = styled.div`
  color: #e8e8e8;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 36px;
  margin-bottom: 2.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${breakpoints.up('md')} {
    display: flex;
    width: 100%;
    max-width: 1140px;
  }
`;

export const ShowMoreWrapper = styled.main`
  width: 100%;
  height: auto;
  background: #f4f4f4;
  padding: 2rem;
`;

export const Texts = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.6rem;
`;

export const Gradient = styled.div`
  background: linear-gradient(0deg, #1d1d1b 53.7%, rgba(29, 29, 27, 0) 95.21%);
  width: 100%;
  position: absolute;
  height: 430px;
  top: -208px;
  left: 0;
  z-index: 1;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 24px;

  ${breakpoints.up('md')} {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    max-width: 1140px;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  width: 100%;
  border-radius: 4px;
  min-height: 240px;
  padding: 16px 16px 0 16px;
  margin-top: 16px;

  ${breakpoints.up('md')} {
    max-width: 95%;
    height: 95%;
  }
`;

export const CardTitle = styled.div`
  color: #0c0c0b;

  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
  margin-top: 16px;
`;

export const Subtitle = styled.div`
  color: #4a4a49;
  font-family: ${roboto.style.fontFamily};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-left: 12px;
`;

export const ImageWrapper = styled.div`
  width: 120px;
  height: 120px;

  img {
    width: 120px;
  }
`;

export const CardCategoryWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-top: 14px;
  margin-bottom: 16px;
`;

export const CardCategory = styled.div`
  display: flex;
  align-items: center;
  color: #254ce5;
  text-align: center;

  font-size: 14px;
  font-style: normal;
  line-height: 20px;
`;

export const Action = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 34px;
  margin-bottom: 60px;
`;

export const Button = styled.div`
  cursor: pointer;
  color: #e8e8e8;
  text-align: center;

  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  display: flex;

  svg {
    margin-left: 8px;
  }
`;
