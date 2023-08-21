import styled from 'styled-components';

export const TrailsButton = styled.div<{ backgroundColor: string }>`
  border-radius: 8px;
  padding: 0 24px;
  flex: 1;
  height: 40px;
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const TrailButtonText = styled.div`
  color: #ffffff;
  text-align: center;
  font-family: Work Sans;
  font-size: 14px;
  font-style: normal;
  line-height: 0.8;
`;

export const TrailButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;

export const Wrapper = styled.div<{ backgroundColor: string }>`
  display: flex;
  padding: 60px 8px 24px 16px;
  flex-direction: column;
  background-color: ${({ backgroundColor }) => backgroundColor};

  ${TrailsButton} {
    margin-right: 0.8rem;
  }
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
`;

export const CardTitle = styled.div`
  color: #0c0c0b;
  font-family: Work Sans;
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
  font-family: Roboto Slab;
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
  font-family: Work Sans;
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
  font-family: Work Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  display: flex;

  svg {
    margin-left: 8px;
  }
`;
