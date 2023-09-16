import styled from 'styled-components';
import { breakpoints } from 'styles';

export const Wrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 72px;
  background-color: #ffffff;
  width: 100%;
  display: none;

  ${breakpoints.up('md')} {
    display: flex;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1140px;
`;

export const WrapperUserColumn = styled.div`
  display: flex;
  height: 6.4rem;
  align-items: center;
`;

export const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  border-radius: 4px;
  background-color: #a7b9fe;
  font-size: 20px;
  margin-right: 1.2rem;
`;

export const WrapperUserData = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    color: #1d1d1b;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0.5px;
  }

  h3 {
    color: #686866;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
  }
`;
