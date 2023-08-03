import { styled } from "styled-components";

export const ContentSecurity = styled.main`
  width: 90%;
  height: auto;

  margin: 2rem 2rem 1.4rem 2rem;

  background: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
`;

export const ContainerInput = styled.div`
  width: 90%;
  height: 4rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border: 1px solid ${({ theme }) => theme.colors.black200};
  border-radius: 4px;
  outline: none;

  margin: 1rem 1.6rem;
`;

export const InputPassword = styled.input`
  width: 85%;
  height: 3.5rem;

  border: none;
  border-radius: none;
  outline: none;

  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2.4rem;
  color: ${({ theme }) => theme.colors.black500};

  padding-left: 1.6rem;
`;

export const Title = styled.h1`
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 2.4rem;

  color: ${({ theme }) => theme.colors.black400};
  margin: 1rem 1.6rem;
`;

export const SaveButton = styled.button`
  width: 90%;
  height: 3.5rem;

  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  outline: none;
  border: none;
  border-radius: 8px;
  margin: 1.6rem;

  background: ${({ theme }) => theme.colors.blue500 };
  color: ${({ theme }) => theme.colors.white };
  cursor: pointer;
`;

export const AlertPassword = styled.span`
  display: flex;
  flex-direction: column;

  font-size: 1rem;
  font-weight: 500;
  line-height: 1.6rem;

  color: ${({ theme }) => theme.colors.black400};
  margin: 0.1rem 1.6rem;
`;