import styled, { css } from 'styled-components';
import { breakpoints } from 'styles';

export const Wrapper = styled.main`
  width: 100%;
  background: #e8e8e8;
`;

export const Plan = styled.div`
  padding: 0 1.6rem;
  width: 100%;

  ${breakpoints.up('md')} {
    width: auto;
    padding: 0;
  }
`;

export const InfoClient = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${breakpoints.up('md')} {
    flex-direction: row;
    justify-content: space-between;
    width: 1140px;
  }
`;

export const InfoClientWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;

  ${breakpoints.up('md')} {
    margin-top: 2.6rem;
    flex-direction: row;
    justify-content: center;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${breakpoints.up('md')} {
    align-items: center;
    justify-content: center;
    margin-top: 1.6rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${breakpoints.up('md')} {
    flex-direction: row;
    justify-content: space-between;
    width: 1140px;

    #news-letter-wrapper {
      height: 361px;
      justify-content: center;
    }
  }
`;

export const CardLicense = styled.div`
  width: 100%;
  height: 326px;
  margin-top: 16px;
  margin-bottom: 32px;
  padding: 2.4rem;
  background-color: #1d3cb3;
  background-image: url('/img/employee-bg.png');
  background-size: 100% 130px;
  background-position: bottom;
  background-repeat: no-repeat;

  ${breakpoints.up('md')} {
    margin-top: 0%;
    margin-right: 1.6rem;
    height: 361px !important;
  }
`;

export const AddEmployee = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

export const LimitEmployee = styled.div`
  width: 64px;
  height: 64px;
  background: #11236a;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
  color: #bdcafe;
  border-radius: 4px;
`;

const titleVariant = {
  default: css``,
  black: css`
    color: #1d1d1b;
  `
};

export const TitleLimit = styled.h1<{ variant: 'default' | 'black' }>`
  color: #bdcafe;
  font-size: 22px;
  font-weight: 400;
  line-height: 28px;
  margin-left: 1.2rem;

  ${({ variant }) => variant && titleVariant[variant]}
`;

export const SubTitle = styled.h1`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.5px;
  margin-left: 1.2rem;
  color: #1d1d1b;
  margin-top: 3rem;
`;

const cardVariants = {
  default: css``,
  large: css``
};

export const CardAddEmployee = styled.div<{ variant: 'default' | 'large' }>`
  width: 100%;
  background: #eaeeff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  margin-top: 4rem;
  padding: 1.2rem;

  ${({ variant }) => variant && cardVariants[variant]}
`;

export const AddButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
  background: #2954fc;
  height: 40px;
  margin-top: 1.6rem;
`;
