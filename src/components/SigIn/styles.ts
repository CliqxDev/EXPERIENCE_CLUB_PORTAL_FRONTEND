import styled from 'styled-components';

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  padding: 2.4rem 3.2rem;
  position: absolute;
  z-index: 10;
  bottom: 1.6rem;
  left: 1.6rem;
  right: 1.6rem;
  border-radius: 4px;
  color: #4a4a49;
  font-family: Work Sans;
  font-style: normal;
  text-align: center;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;

  h1 {
    font-size: 2.4rem;
    font-weight: 400;
    line-height: 3.2rem;
  }

  h2 {
    font-size: 1.6rem;
    font-weight: 500;
    letter-spacing: 0.5px;
    line-height: 2.4rem;
    margin-bottom: 3.2rem;
  }

  button {
    width: 100%;
  }

  #register-btn {
    margin-top: 1.6rem;
    width: 100%;
    padding-left: 0;
    padding-right: 0;
  }
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin-bottom: 3.2rem;
  justify-content: space-between;
`;
