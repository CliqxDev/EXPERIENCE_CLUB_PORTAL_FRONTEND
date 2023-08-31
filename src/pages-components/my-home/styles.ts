import styled, { css } from 'styled-components';

export const Wrapper = styled.main`
  width: 100%;
  height: 100vh;
  background: #E8E8E8;
`;

export const Plan = styled.div`
  padding: 2rem;
`;

export const CardLicense = styled.div`
  width: 100%;
  height: 326px;
  margin-top: 16px;
  margin-bottom: 32px;
  padding: 2rem;
  background-color: #1D3CB3;
  background-image: url('/img/employee-bg.png');
  background-size: 100% 130px;
  background-position: bottom;
  background-repeat: no-repeat;
`;

export const AddEmployee = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const LimitEmployee = styled.div`
  width: 114px;
  height: 64px;
  background: #11236A;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Work Sans/headline/large;
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
  color: #BDCAFE;
`;

const titleVariant = {
  default: css``,
  black: css`
    color: #1D1D1B;
    padding: 10px;
  `,
}

export const TitleLimit = styled.h1<{variant: 'default' | 'black' }>`
  font-family: Work Sans/title/large;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  color: #BDCAFE;
  margin-left: 16px;

  ${({ variant }) => variant && titleVariant[variant]}
`;

export const SubTitle = styled.h1`
  font-family: Work Sans/title/medium;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  color: #1D1D1B;
  margin-left: 16px;
  padding: 10px;
`;

const cardVariants = {
  default: css``,
  large: css`
    height: 265px;
  `,
}

export const CardAddEmployee = styled.div<{variant: 'default' | 'large' }>`
  width: 100%;
  height: 164px;
  background: #EAEEFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  margin-top: 4rem;
  border-radius: 8px;

  ${({ variant }) => variant && cardVariants[variant]}
`;

export const AddButton = styled.button`
  width: 90%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 8px;
  font-family: Work Sans/label/large;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  margin: 10px auto;
  color: #FFFFFF;
  background: #2954FC;
`;
