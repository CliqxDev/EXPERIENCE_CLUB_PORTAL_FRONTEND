import styled from 'styled-components';

export const NewsletterWrapper = styled.main<{ islogged: string }>`
  width: 100%;
  height: ${({ islogged }) => islogged};
  padding: 1rem 2.4rem 2.4rem 2.4rem;
  background-image: url('/img/newsletter-bg.png');
  background-size: 100% 38.8rem;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormWrapper = styled.form`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CheckboxContainer = styled.div`
  width: 36rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  width: 1.8rem;
  height: 1.8rem;
`;

export const CustomizeLabel = styled.label`
  width: 31.6rem;
  margin-left: 1rem;

  font-size: 1.2rem;
  font-weight: 500;
  line-height: 2rem;

  color: #ffff;
`;

export const MessageWrapper = styled.div`
  width: 100%;
  height: 38.8rem;
  padding: 1rem 2.4rem 2.4rem 2.4rem;
  background-image: url('/img/newsletter-bg.png');
  background-size: 100% 38.8rem;
  background-repeat: no-repeat;
  align-items: center;
  display: flex;
`;

export const MessageBox = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  background-color: #ffffff;
  width: 100%;
  align-items: center;
  text-align: center;
  height: 220px;
`;

export const MessageHeader = styled.div`
  background-color: #eaeeff;
  padding: 1.6rem;

  h1 {
    color: #4a4a49;

    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
  }

  h2 {
    color: #5476fd;
    text-align: center;

    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 32px;
  }
`;

export const MessageContent = styled.div`
  padding: 1.2rem 1.6rem;
  p {
    color: #686866;
    text-align: center;

    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0.5px;
  }
`;

export const MessageSuccess = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  background-color: #ffffff;
  width: 100%;
  align-items: center;
  text-align: center;
  height: 200px;
`;
