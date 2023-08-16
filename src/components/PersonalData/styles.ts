import { styled } from "styled-components";

type ButtonProps = {
  disabled: boolean;
}

export const ContainerPersonalData = styled.div`
  width: 90%;
  height: auto;
  padding: 1.4rem 0 1.6rem 1.6rem;

  margin: 2rem;

  background: #FFFF;
  border-radius: 4px;
`;

export const Title = styled.h1`
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2.4rem;

  color: #1D1D1B;
`;

export const FormData = styled.form`
  display: flex;
  flex-direction: column;

  margin-top: 2rem;
`;

export const InputData = styled.input`
  width: 95%;
  height: 4rem;

  border: 1px solid #1D1D1B;
  border-radius: 4px;
  outline: none;

  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2.4rem;
  color: #1D1D1B;

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

  background: ${({ disabled }) => (disabled ? '#E8E8E8' : '#1D1D1B')};
  color: ${({ disabled }) => (disabled ? '#1D1D1B' : '#FFFFFF')};
  cursor: pointer;
`;