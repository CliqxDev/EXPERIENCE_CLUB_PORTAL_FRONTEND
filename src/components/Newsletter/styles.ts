import styled from 'styled-components';

export const NewsletterWrapper = styled.main`
  width: 100%;
  height: 38.8rem;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  background-image: url('/img/newsletter-bg.png');
  background-size: 100% 38.8rem;
  background-repeat: no-repeat;
`;

export const FormWrapper = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  width: 36rem;
  height: 5rem;

  padding-left: 1rem;
  margin-top: 2rem;
  color: #FFFF;

  outline: none;
  background: none;
  border: 1px solid #FFFF;
  border-radius: 4px;

  &::placeholder {
    color: #FFFF;
  }
`;

export const CheckboxContainer = styled.div`
  width: 36rem;
  height: 5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  margin: 1rem auto;
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  width: 1.8rem;
  height: 1.8rem;
`;

export const CustomizeLabel = styled.label`
  width: 31.6rem;
  margin-left: 1rem;

  font-family: Work Sans;
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 2rem;

  color: #FFFF;
`;
