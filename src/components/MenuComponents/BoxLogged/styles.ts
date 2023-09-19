import styled, { css } from 'styled-components';
import { breakpoints } from 'styles';

const wrapperVariant = {
  default: css``,
  myHome: css`
    padding: 2.4rem 1.6rem;
  `
};

export const Wrapper = styled.main<{ variant: 'default' | 'myHome' }>`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  display: flex;
  cursor: pointer;

  ${({ variant }) => wrapperVariant[variant]}

  ${breakpoints.up('md')} {
    width: 380px;
  }
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

export const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6.4rem;
  height: 6.4rem;
  border-radius: 4px;
  background-color: #a7b9fe;
  font-size: 38px;
  margin-right: 1.2rem;
`;

export const RedirectProfile = styled.p`
  display: flex;
  align-items: center;
  margin-right: 2rem;

  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #2954fc;
    margin-right: 12px;
  }
`;
