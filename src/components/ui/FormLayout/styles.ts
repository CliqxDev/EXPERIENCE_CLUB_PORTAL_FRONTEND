import styled, { css } from 'styled-components';

const WrapperVariants = {
  bottom: css``,
  simple: css`
    padding: 16px;
  `
};

export const Wrapper = styled.main<{ variant: 'bottom' | 'simple' }>`
  background-image: url('/img/form-layout-background.svg'),
    url('/img/form-layout-img.svg');
  width: 100%;
  min-height: 100vh;
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;

  ${({ variant }) => WrapperVariants[variant]}
`;

export const Header = styled.div`
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
  width: 100%;
  position: absolute;
  padding: 0 1.6rem;
  left: 0;
`;

const FormWrapperVariants = {
  bottom: css`
    position: absolute;
    bottom: 1.6rem;
    left: 1.6rem;
    right: 1.6rem;
    background-color: #ffffff;
  `,
  simple: css`
    margin-top: 75px;
    width: 100%;
    background-color: transparent;
  `
};

export const FormWrapper = styled.div<{ variant: 'bottom' | 'simple' }>`
  display: flex;
  flex-direction: column;
  z-index: 10;
  border-radius: 4px;
  color: #4a4a49;
  font-style: normal;
  text-align: center;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  ${({ variant }) => FormWrapperVariants[variant]}

  @media (min-width: 1024px) {
    width: 100%;
    position: sticky;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)
  }
`;