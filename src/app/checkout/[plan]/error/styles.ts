import styled from 'styled-components';

export const Footer = styled.div`
  color: #686866;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.5px;
  background-color: #ffffff;
  padding: 1.2rem 1.6rem;
`;

export const Header = styled.div`
  padding: 1.6rem 0.9rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    margin-bottom: 0.4rem;
  }
`;

export const Action = styled.div`
  padding: 3.2rem 2.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 4px;

  h1 {
    color: #1d1d1b;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    margin-bottom: 0.4rem;
  }

  h2 {
    color: #4a4a49;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0.5px;
    margin-bottom: 2.4rem;
  }

  a {
    display: flex;
    text-decoration: none;
    width: 100%;
  }
`;
