import { styled } from 'styled-components';

export const ContentAddress = styled.main`
  width: 100%;
  height: auto;
  background: #ffff;
  border-radius: 4px;
  margin-top: 2.4rem;
`;

export const FormAddress = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

export const ContentState = styled.div`
  width: 100%;
  display: flex;

  #state {
    margin-right: 1.6rem;
  }
`;

export const SelectState = styled.select`
  width: 100%;
  height: 5.6rem;
  border: 1px solid #979796;
  border-radius: 4px;
  outline: none;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2.4rem;
  color: #1d1d1b;
  padding-left: 1.6rem;
  appearance: none;
`;
