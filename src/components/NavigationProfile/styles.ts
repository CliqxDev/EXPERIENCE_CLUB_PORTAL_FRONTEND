/* eslint-disable no-nested-ternary */
import { styled } from "styled-components";

type TitleProps = {
  profile?: boolean;
  address?: boolean;
  security?: boolean;
};

export const TopNavigation = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 1.6rem;
  gap: 8px;
`;

export const Titles = styled.span<TitleProps>`
  width: ${({ profile, address, security }) => (
    profile ? '4.4rem' :
      address ? '7.8rem' :
        security && '8.6rem'
  )}; 

  height: 4.8rem;
  font-size: 1.6rem;
  font-weight: 500;

  border-bottom: ${({ profile, address, security, theme }) => (
    profile ? `2px ${theme.colors.black200} solid` :
      address ? `2px ${theme.colors.black200} solid` :
        security ? `2px ${theme.colors.black200} solid` :
          'none'
  )};

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ profile, address, security, theme }) => (
    profile ? theme.colors.black500 :
      address ? theme.colors.black500 :
        security ? theme.colors.black500 :
          theme.colors.blue500
  )};
  
  padding: 1rem;
  gap: 10px;
  cursor: pointer;
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  margin-top: -1.6rem;

  background: ${({ theme }) => (theme.colors.black200)};
`;