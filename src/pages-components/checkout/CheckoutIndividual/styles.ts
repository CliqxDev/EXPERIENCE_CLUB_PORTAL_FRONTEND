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
  height: 300px;
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
  height: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.5rem 1.6rem;

`;
