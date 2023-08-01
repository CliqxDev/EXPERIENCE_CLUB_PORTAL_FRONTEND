import { styled } from "styled-components";

type ButtonProps = {
  disabled: boolean;
}

export const ContainerPersonalData = styled.div`
  width: 90%;
  height: 23rem;
  padding: 1.4rem 0 1.6rem 1.6rem;

  margin-bottom: 2rem;

  background: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
`;

export const Title = styled.h1`
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2.4rem;

  color: ${({ theme }) => theme.colors.black500};
`;

export const ContentInputs = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 2rem;
`;

export const InputData = styled.input`
  width: 95%;
  height: 4rem;

  border: 1px solid ${({ theme }) => theme.colors.black200};
  border-radius: 4px;
  outline: none;

  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2.4rem;
  color: ${({ theme }) => theme.colors.black500};

  padding: 1.6rem;
`;

export const SaveButton = styled.button<ButtonProps>`
  width: 95%;
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
  margin-top: 2rem;

  background: ${({ theme, disabled }) => (disabled ? theme.colors.black50 : theme.colors.blue500)};
  color: ${({ theme, disabled }) => (disabled ? theme.colors.black500 : theme.colors.white)};
  cursor: pointer;
`;