/* eslint-disable no-nested-ternary */
import { styled } from "styled-components";

export const Wrapper = styled.main`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow-y: auto;

  background: #E8E8E8;
`;

export const DeleteAccount = styled.span`
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 2rem;

  color: #DC2626;
  cursor: pointer;
`;