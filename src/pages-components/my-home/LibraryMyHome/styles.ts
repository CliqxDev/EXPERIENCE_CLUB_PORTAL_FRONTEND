import { css, styled } from "styled-components";
import { breakpoints } from "styles";

export const Wrapper = styled.main`
  width: 90%;
  height: 59rem;
  display: flex;
  flex-direction: column;
  overflow-x: auto;
  margin: 2rem;
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
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const CardAdminUser = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  height: 95px;
  border-radius: 4px;
  padding: 16px;
  gap: 16px;
  background: #FFFF;
  margin-bottom: 16px;

  p {
    font-family: Work Sans/title/medium;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #2954FC;
  }
`;

export const LibraryList = styled.div`
  width: auto;
  overflow-y: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow-x: auto;
  gap: 1.6rem;
  margin-bottom: 16px;
`;

export const CardLibrary = styled.div`
  width: 28rem;
  height: 40rem;
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
  color: #4A4A49;
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
`;

const buttonVariants = {
  blue400: css`
    background: #2954FC;
  `,
  blue500: css`
    background: #172E8B;
  `,
}

export const Button = styled.button<{ variant: "blue400" | "blue500"}>`
  width: 95%;
  height: 40px;
  border-radius: 8px;
  border: none;
  outline: none;
  gap: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  font-family: Work Sans/label/large;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: #FFFF;

  ${({ variant }) => variant && buttonVariants[variant]}
`;