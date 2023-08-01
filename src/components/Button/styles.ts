import styled from 'styled-components';

export const Wrapper = styled.div`
  button:hover {
    background: #6750a4;
    box-shadow:
      0px 1px 3px 1px rgba(0, 0, 0, 0.15),
      0px 1px 2px 0px rgba(0, 0, 0, 0.3);
  }
`;

export const Button = styled.button`
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2.4rem;
  color: #ffffff;
  font-family: Work Sans;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 20px;
  border-radius: 8px;
  background: #2954fc;
  border: none;
  cursor: pointer;
`;
