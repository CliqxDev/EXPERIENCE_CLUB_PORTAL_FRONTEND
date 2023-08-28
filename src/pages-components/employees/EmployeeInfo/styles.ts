import styled from 'styled-components';

export const Wrapper = styled.main`
  padding: 0 2rem;
`;

export const ContainerData = styled.div`
  height: auto;
  padding: 1.6rem;
  background: #ffff;
  border-radius: 4px;
`;

export const FormData = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 100%;
  height: 56px;
  border: 1px solid #1D1B201F;
  border-radius: 4px;
  padding-left: 16px;
  margin-bottom: 16px;
  outline: none;
`;

export const ToasterWrapper = styled.div`
  position: relative;
`;

export const DeleteAccount = styled.span`
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 2.4rem;
  color: #dc2626;
  cursor: pointer;
  position: fixed;
  bottom: 2rem;
  left: 0;
  right: 0;
`;
