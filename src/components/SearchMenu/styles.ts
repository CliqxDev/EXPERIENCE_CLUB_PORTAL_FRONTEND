import styled from 'styled-components';

export const Wrapper = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 72px;
  background-color: #ffffff;
  position: absolute;
  width: 100%;

  input:focus {
    border: 1px solid #2954fc;
  }
`;

export const Input = styled.input`
  height: 48px;
  border-radius: 4px;
  font-weight: 400;
  flex: 1;
  padding-left: 1.6rem;
  color: #1d1d1b;
  font-family: Work Sans;
  font-size: 1.6rem;
  font-weight: 400;
  outline: none;
`;
