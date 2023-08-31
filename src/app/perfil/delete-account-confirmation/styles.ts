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
  padding: 1.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Action = styled.div`
  padding: 3.2rem 2.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  border-radius: 4px;

  a {
    display: flex;
    text-decoration: none;
    width: 100%;
  }
`;
