import styled from 'styled-components';

import { breakpoints } from 'styles';
import { roboto } from 'styles/fonts';

export const Wrapper = styled.main`
  padding-bottom: 56px;
  position: relative;
  background-color: #f5f5f5;
  min-height: 100vh;

  #skeleton-wrapper {
    background-color: #f5f5f5;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${breakpoints.up('md')} {
    flex-direction: row;
  }
`;

export const Header = styled.div`
  position: relative;
  min-height: 300px;
  width: 100%;
  padding: 4.8rem 2.4rem;
  justify-content: end;
  display: flex;
  flex-direction: column;
  background-color: #1d1d1b;

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
`;

export const HeaderWrapper = styled.div`
  background-color: #1d1d1b;
  display: flex;
  flex-direction: column;

  h2 {
    color: #2954fc;
    font-size: 31px;
    font-weight: 600;
    line-height: 48px;
    letter-spacing: 1px;
    overflow-wrap: anywhere;
  }

  ${breakpoints.up('md')} {
    align-items: center;
  }
`;

export const Title = styled.div`
  margin-top: 4.6rem;
  color: #ffffff;
  font-size: 32px;
  font-weight: 500;
  line-height: 48px;
  letter-spacing: 1px;

  ${breakpoints.up('md')} {
    margin-top: 0;
    margin-right: 2.4rem;
  }
`;

export const Content = styled.div`
  padding: 4.4rem 1.6rem;

  ${breakpoints.up('md')} {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

export const Text = styled.div`
  color: #4a4a49;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 36px;
  margin-bottom: 2.6rem;

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

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 24px;
  margin-bottom: 8rem;

  ${breakpoints.up('md')} {
    flex-direction: row;
    align-items: center;
    overflow-x: auto;
    gap: 1.6rem;
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
  justify-content: space-between;

  ${breakpoints.up('md')} {
    max-width: 360px;
  }
`;

export const CardTitle = styled.div`
  color: #0c0c0b;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.5px;
  margin-bottom: 0.8rem;
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
`;

export const Subtitle = styled.div`
  color: #4a4a49;
  font-family: ${roboto.style.fontFamily};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

export const ImageWrapper = styled.div`
  width: 150px;
  height: 150px;

  img {
    width: 150px;
    height: 150px;
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

export const Texts = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.6rem;
`;
