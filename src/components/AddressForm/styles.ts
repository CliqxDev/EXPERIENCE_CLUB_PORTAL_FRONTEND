import { styled } from "styled-components";

export const ContentAddress = styled.main`
  width: 90%;
  height: auto;

  margin: 2rem 2rem 1.4rem 2rem;

  background: #ffff;
  border-radius: 4px;
`;

export const FormAddress = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 2rem;
`;

export const ContentState = styled.div`
  width: 95%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const SelectState = styled.select`
  width: 25%;
  height: 5.6rem;

  border: 1px solid #979796;
  border-radius: 4px;
  outline: none;

  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2.4rem;
  color: #1D1D1B;

  padding-left: 1.6rem;
`;