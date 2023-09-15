import styled from 'styled-components';
import { breakpoints } from 'styles';
import { roboto } from 'styles/fonts';

export const TrailsButton = styled.div<{ backgroundcolor: string }>`
  border-radius: 8px;
  padding: 0 24px;
  flex: 1;
  height: 40px;
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ backgroundcolor }) => backgroundcolor};
`;

export const TrailButtonText = styled.div`
  color: #ffffff;
  text-align: center;

  font-size: 14px;
  font-style: normal;
  line-height: 0.8;
`;

export const TrailButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;

  ${breakpoints.up('md')} {
    margin-left: 1rem;
  }
`;

export const WrapperMedia = styled.div`
  ${breakpoints.up('md')} {
    display: flex;
    align-items: center;
  }
`;

export const Wrapper = styled.div<{ backgroundcolor: string }>`
  display: flex;
  padding: 60px 16px 24px 16px;
  flex-direction: column;
  background-color: ${({ backgroundcolor }) => backgroundcolor};

  ${TrailsButton} {
    margin-right: 0.8rem;
  }

  ${breakpoints.up('md')} {
    padding: 4rem 10rem 4rem 10rem;
  }

  ${breakpoints.up('lg')} {
    padding: 4rem 15rem 4rem 15rem;
  }

  #skeleton-wrapper {
    margin-top: 4.2rem;
    background-color: ${({ backgroundcolor }) => backgroundcolor};

    ${breakpoints.up('md')} {
      flex-wrap: wrap;
      justify-content: center;
      margin-left: 1.4rem;
    }
  }
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
