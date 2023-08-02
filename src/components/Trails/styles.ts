import styled from 'styled-components';

export const Wrapper = styled.main`
  width: 100%;

  display: flex;
  flex-direction: column;

  padding: 1.6rem;

  background: #11236A;

  input[type="radio"] {
    display: none;
  }

  input[type="radio"]:checked + label {
    background: #2954FC;  
    border: none;
  }
`;

export const RadioLabel = styled.label`
  width: 14.7rem;
  height: 4rem;

  font-family: Work Sans;
  font-size: 1.4rem;
  font-weight: 500;
  color: #FFFFFF;

  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1.6rem;

  border: 1px solid #FFFFFF;
  border-radius: 8px; 
  background: transparent;
  cursor: pointer;

  input[type="radio"]:checked + label {
    background: #2954FC;  
    border: none;
  }
`;

export const ContentRadio = styled.div`
  display: flex;
  align-items: center;

  margin-top: 1rem;
`;

export const Title = styled.h1`
  font-family: Work Sans;
  font-size: 2.8rem;
  font-weight: 400;
  line-height: 3.6rem;
  color: #FFF;
`;
