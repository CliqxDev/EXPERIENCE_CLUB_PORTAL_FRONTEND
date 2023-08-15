/* eslint-disable no-nested-ternary */
import { styled } from "styled-components";

type TitleProps = {
  profile?: boolean;
  address?: boolean;
  security?: boolean;
};

export const WrapperProfile = styled.main`
  width: 100%;
  height: 100vh;
  background: #E8E8E8;
`;

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

  height: 4.8rem;a
  font-size: 1.6rem;
  font-weight: 500;

  border-bottom: ${({ profile, address, security }) => (
    profile ? `2px #979796 solid` :
      address ? `2px #979796 solid` :
        security ? `2px #979796 solid` :
          'none'
  )};

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ profile, address, security }) => (
    profile ? '#1D1D1B' :
      address ? '#1D1D1B' :
        security ? '#1D1D1B' :
          '#2954FC'
  )};
  
  padding: 1rem;
  gap: 10px;
  cursor: pointer;
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  margin-top: -1.6rem;

  background: #979796;
`;