import { css, styled } from 'styled-components';
import { breakpoints } from 'styles';

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  overflow-x: auto;
  margin: 1.6rem;
  background: #e8e8e8;

  /* ${breakpoints.up('md')} {
    padding: 2rem 10rem 2rem 10rem;
  }

  ${breakpoints.up('lg')} {
    padding: 4rem 15rem 4rem 15rem;
  } */
`;

export const AdminUser = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  ${breakpoints.up('md')} {
    justify-content: center;
  }
`;

export const Admin = styled.div`
  width: 100%;
  display: flex;

  ${breakpoints.up('md')} {
    width: 1140px;
  }
`;

export const CardAdminUser = styled.div`
  display: flex;
  flex-direction: column;
  height: 95px;
  border-radius: 4px;
  padding: 16px;
  gap: 16px;
  background: #ffff;
  margin-bottom: 16px;

  p {
    font-family: Work Sans/title/medium;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #2954fc;
  }
`;

export const LibraryList = styled.div`
  overflow-y: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow-x: auto;
  margin-bottom: 16px;

  ${breakpoints.up('md')} {
    width: 100%;
    justify-content: center;
  }
`;

export const CardLibrary = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.6rem 2rem;
  margin: 2rem 0 2rem 0;
  background: #ffff;
`;

export const TitleTopCard = styled.h1`
  font-family: Work Sans/headline/medium;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: #4a4a49;
  text-transform: uppercase;
`;

export const TopCard = styled.div`
  width: 100%;
  height: 2.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const FooterCard = styled.div`
  width: 8.9rem;
  height: 4.4rem;
  margin-top: 2rem;
  display: flex;
  align-items: center;
`;

export const DescriptionCard = styled.p`
  width: 24rem;
  height: 11.2rem;
  font-size: 2.2rem;
  font-weight: 400;
  line-height: 2.8rem;
  margin-top: 1rem;
  color: #1d1d1b;
`;

export const ReadButtons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const buttonVariants = {
  blue400: css`
    background: #2954fc;
  `,
  blue500: css`
    background: #172e8b;
  `
};

export const Button = styled.button<{ variant: 'blue400' | 'blue500' }>`
  height: 40px;
  width: 100%;
  border-radius: 8px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: #ffff;

  ${({ variant }) => variant && buttonVariants[variant]}

  ${breakpoints.up('md')} {
    width: 200px;
  }
`;

export const AccompanyWrapper = styled.main`
  width: 100%;

  display: flex;
  flex-direction: column;

  overflow-x: auto;

  padding: 2rem 0 2rem 2rem;
  background: #f4f4f4;

  ${breakpoints.up('md')} {
    padding: 2rem 10rem 2rem 10rem;
  }

  ${breakpoints.up('lg')} {
    padding: 4rem 15rem 4rem 15rem;
  }
`;

export const AccompanyList = styled.div`
  width: 100%;
  overflow-y: hidden;

  display: flex;
  flex-direction: row;
  align-items: center;

  overflow-x: auto;
  gap: 1.6rem;

  ${breakpoints.up('md')} {
    width: 1140px;
    justify-content: center;
  }
`;

export const AccompanyTitle = styled.h1`
  font-size: 2.8rem;
  font-weight: 500;
  line-height: 3.6rem;

  color: #4a4a49;
`;

export const AccompanyCard = styled.div`
  width: 27.2rem;
  display: flex;
  flex-direction: column;

  padding: 2rem;
  margin: 2rem 0 2rem 0;
  background: #ffff;

  ${breakpoints.up('md')} {
    width: 26.9rem;
  }
`;

export const TitleTrailWrapper = styled.div`
  ${breakpoints.up('md')} {
    display: flex;
    justify-content: center;
  }
`;

export const TitleTrail = styled.div`
  color: #4a4a49;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 36px;

  ${breakpoints.up('md')} {
    width: 1140px;
  }
`;
