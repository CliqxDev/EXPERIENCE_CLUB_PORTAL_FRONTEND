import styled, { css } from 'styled-components';
import { breakpoints } from 'styles';

export const ExploreWrapper = styled.main`
  width: 100%;
  height: auto;

  padding: 2rem;
  background: #e8e8e8;

  ${breakpoints.up('md')} {
    padding: 2rem 10rem 2rem 10rem;
  }

  ${breakpoints.up('lg')} {
    padding: 4rem 15rem 4rem 15rem;
  }
`;

export const Card = styled.div`
  width: 166px;
  height: 273px;
  margin-top: 2rem;

  display: flex;
  flex-direction: column;
  justify-self: center;
  border-radius: 4px;
  background: #fff;
  padding: 1rem;
  margin-bottom: 1rem;
`;

const listCardVariants = {
  default: css`
    display: grid;
    grid-template-columns: 1fr 1fr;
  `,
  scroll: css`
    display: flex;
    overflow: scroll;

    ${Card}:not(:last-child) {
      margin-right: 1.6rem;
    }
  `
};

export const ListCard = styled.div<{ variant: 'default' | 'scroll' }>`
  width: 100%;
  ${({ variant }) => listCardVariants[variant]}

  ${breakpoints.up('md')} {
    display: flex;
    flex-direction: row;
    align-items: center;
    overflow-x: auto;
    gap: 1.6rem;
  }
`;

export const DescriptionCard = styled.p`
  margin-top: 1rem;
  height: 120px;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 2.6rem;
  color: #1d1d1b;
`;

export const FooterCard = styled.div`
  width: 100%;
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TextFooter = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.8rem;
  color: #254ce5;
`;
