import styled from 'styled-components';
import { roboto } from 'styles/fonts';

export const ShowMoreWrapper = styled.main`
  width: 100%;
  height: auto;
  background: #e8e8e8;
  padding: 2rem;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 24px;
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
