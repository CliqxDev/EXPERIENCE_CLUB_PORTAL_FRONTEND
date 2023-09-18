import styled from 'styled-components';

export const StickWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.6rem;
`;

export const Stick = styled.div<{ padding: string }>`
  background-color: #eaeeff;

  z-index: 100;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: ${({ padding }) => padding};
  border-radius: 4px;
  max-width: 500px;

  h1 {
    color: #1d1d1b;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
  }

  h2 {
    color: #5476fd;
    text-align: center;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 32px;
  }
`;
