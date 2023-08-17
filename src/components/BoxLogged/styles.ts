import styled from 'styled-components';

export const Wrapper = styled.main`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  display: flex;
  cursor: pointer;
`;

export const WrapperUserColumn = styled.div`
  display: flex;
  height: 6.4rem;
  align-items: center;
`;

export const WrapperUserData = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    color: #1d1d1b;
    font-family: Work Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0.5px;
  }

  h3 {
    color: #686866;
    font-family: Work Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
  }
`;

export const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6.4rem;
  height: 6.4rem;
  border-radius: 4px;
  background-color: #a7b9fe;
  font-family: Work Sans;
  font-size: 38px;
  margin-right: 1.2rem;
`;
