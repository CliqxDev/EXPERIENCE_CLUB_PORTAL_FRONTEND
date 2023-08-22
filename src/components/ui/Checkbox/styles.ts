import styled from 'styled-components';

export const CheckboxWrapper = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  &:hover {
    background-color: #eaeeff;
  }
  &:focus {
    background-color: #6750a4;
  }
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  width: 18px;
  cursor: pointer;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  border: 2px solid #8c8c8c;
  z-index: 1;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  color: #8c8c8c;

  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2rem;
`;
