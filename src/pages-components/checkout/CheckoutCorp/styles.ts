import styled from 'styled-components';

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #e8e8e8;
  align-items: center;
  a {
    text-decoration: none;
  }
`;

export const Header = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  max-width: 500px;
  padding: 0 1.2rem;
  align-items: center;
  background-color: #ffffff;
  justify-content: center;
  height: 7.2rem;

  button {
    position: absolute;
    top: 15px;
    left: 12px;
  }
`;

export const Form = styled.form`
  background-color: #ffffff;
  padding: 1.6rem;
  width: 100%;
  max-width: 500px;
`;

export const Title = styled.h1`
  color: #4a4a49;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.1px;
  margin-bottom: 2.4rem;
`;

export const Action = styled.div`
  max-width: 500px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.5rem 1.6rem;
`;

export const RadioGroup = styled.form`
  display: flex;
  color: #4a4a49;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 0.8rem;

  input[type='radio'] {
    accent-color: #2954fc;
  }

  label {
    margin-left: 0.8rem;
    margin-right: 1.6rem;
  }
`;
