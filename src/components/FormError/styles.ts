import styled from 'styled-components';

export const ErrorBox = styled.div`
  border-radius: 4px;
  background: #ffffff;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.15);
  height: 64px;
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 0.8rem;
  left: 0;
  width: 100%;
  justify-content: center;
`;

export const ErrorMessage = styled.div`
  color: #1d1d1b;
  font-family: Work Sans;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.4rem;
  width: 324px;
  text-align: left;
`;

export const ErrorBoxIcon = styled.div`
  margin-left: 1.6rem;
  margin-right: 0.8rem;
`;
