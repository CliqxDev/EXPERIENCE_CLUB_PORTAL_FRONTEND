import styled from 'styled-components';
import { breakpoints } from 'styles';

export const Title = styled.h1`
  color: #1d1d1b;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
`;

export const Form = styled.form`
  padding: 1.6rem;
`;

export const Subtitle = styled.h2`
  color: #686866;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 1.6rem;
`;

export const AlertMessage = styled.span`
  color: #dc2626;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;

export const Action = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-around;
  margin-top: 1.6rem;

  div:not(:last-child) {
    margin-right: 1.6rem;
  }

  ${breakpoints.up('md')} {
    position: absolute;
    bottom: 32px;
    left: 0;
    padding: 0 1.6rem;
  }
`;
