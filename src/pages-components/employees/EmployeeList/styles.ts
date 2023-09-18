import styled, { css } from 'styled-components';

export const Wrapper = styled.main`
  width: 100%;
  padding: 4rem 2rem;
  background: #E8E8E8;
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
`;

export const Card = styled.div`
  width: 95%;
  height: 115px;
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 16px;
  margin-top: 16px;
  border-radius: 4px;
  background: #FFFF;
`;

export const EmployeeName = styled.h4`
  font-family: Work Sans/title/medium;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #2954FC;
  margin-top: 24px;
`;

export const WarningLicense = styled.h2`
  width: 100%;
  font-family: Work Sans/title/small;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #686866;
  margin-top: 14px;
`;

export const CardLicense = styled.div`
  width: 100%;
  height: 326px;
  border-radius: 4px;
  margin-top: 16px;
  padding: 2rem;
  background-color: #1D3CB3;
  background-image: url('/img/employee-bg.png');
  background-size: 100% 130px;
  background-position: bottom;
  background-repeat: no-repeat;
`;

export const AddEmployee = styled.div`
  display: flex;
  align-items: center;
`;

const variantLimited = {
  default: css``,
  limited: css`
    width: 104px;
    height: 64px;
  `
}

export const LimitEmployee = styled.div<{ variant: "default" | "limited"}>`
  width: 94px;
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
  ${({ variant }) => variant && variantLimited[variant]}
`;

const variants = {
  default: css`
    padding-left: 16px;
  `,
  add: css`
    width: 90%;
    font-family: Work Sans/title/medium;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #1D1D1B;
    margin-top: 16px;
  `,
}

export const TitleLimit = styled.h1<{variant: 'default' | 'add' }>`
  font-family: Work Sans/title/large;
  font-weight: 400;
  font-size: 22px;
  line-height: 28px;
  color: #BDCAFE;
  ${({ variant }) => variant && variants[variant]}
`;

const cardAddVariant = {
  default: css`
  `,
  limit: css`
    height: 110px;
  `,
}

export const CardAddEmployee = styled.div<{variant: 'default' | 'limit' }>`
  width: 100%;
  height: 152px;
  background: #EAEEFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  margin-top: 4rem;
  border-radius: 8px;
  ${({ variant }) => variant && cardAddVariant[variant]}
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
  margin: 14px auto;
  color: #FFFFFF;
  background: #2954FC;
`;

