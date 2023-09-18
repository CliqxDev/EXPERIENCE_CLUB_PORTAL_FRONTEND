import styled from 'styled-components';
import { breakpoints } from 'styles';

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

  ${breakpoints.up('md')} {
    justify-content: center;
    height: 389px;
  }
`;

export const FormWrapper = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  ${breakpoints.up('md')} {
    flex-direction: row;

    #input-wrapper {
      height: 76px;
      width: 270px;
      margin-right: 1.6rem;
    }

    #wrapper-button {
      width: 160px;
      margin: 0;
      height: 76px;

      margin-bottom: 1.2rem;

      button {
        height: 56px !important;
        margin: 0 !important;
      }
    }
  }
`;

export const CheckboxContainer = styled.div`
  width: 36rem;
  display: flex;
  align-items: center;
  justify-content: center;

  ${breakpoints.up('md')} {
    position: absolute;
    bottom: -10px;
    left: 10px;
    width: 100%;
  }
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

  ${breakpoints.up('md')} {
    width: 100%;
  }
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
`;

export const WrapperTitle = styled.div`
  ${breakpoints.up('md')} {
    h1 {
      margin-right: 0;
      margin-bottom: 26px;
    }
  }
`;

export const FormDesk = styled.div``;
