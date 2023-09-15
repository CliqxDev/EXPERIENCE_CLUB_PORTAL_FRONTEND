import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  padding: 1.6rem 0;
  max-width: 500px;
`;

export const Box = styled.div`
  border-radius: 4px;
  background-color: #ffffff;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #eaeeff;
  padding: 1.6rem;
  align-items: flex-end;

  h2 {
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
  }
`;

export const HeaderDescription = styled.div`
  display: flex;
  flex-direction: column;
  color: #2954fc;
  text-align: right;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  p {
    span {
      font-size: 14px;
    }

    strong {
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.6rem;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid #e8e8e8;
  padding: 0.4rem 0;

  p {
    color: #686866;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
  }
`;

export const Total = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin-top: 1.6rem;
`;

export const TotalLabel = styled.div`
  color: #686866;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px;
  flex: 1;
`;

export const TotalDescription = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;

  color: #4a4a49;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: 0.5px;
  p {
    span {
      font-size: 14px;
    }

    strong {
      color: #1d1d1b;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
    }
  }
`;
