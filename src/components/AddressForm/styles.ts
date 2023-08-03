import { styled } from "styled-components";

export const ContentAddress = styled.main`
  width: 90%;
  height: auto;

  margin: 2rem 2rem 1.4rem 2rem;

  background: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
`;

export const FormAddress = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputAddress = styled.input`
  width: 90%;
  height: 4rem;

  margin-top: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.black200};
  border-radius: 4px;
  outline: none;

  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2.4rem;
  color: ${({ theme }) => theme.colors.black500};

  padding: 1.6rem;
`;

export const ContentState = styled.div`
  width: 90%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const SelectState = styled.select`
  width: 25%;
  height: 4rem;

  margin-top: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.black200};
  border-radius: 4px;
  outline: none;

  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2.4rem;
  color: ${({ theme }) => theme.colors.black500};

  padding-left: 1.6rem;
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
  margin: 3.5rem 0 2rem 0;

  background: ${({ theme }) => theme.colors.blue500 };
  color: ${({ theme }) => theme.colors.white };
  cursor: pointer;
`;