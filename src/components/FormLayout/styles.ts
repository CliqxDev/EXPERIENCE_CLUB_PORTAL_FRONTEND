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
  `,
  simple: css`
    margin-top: 75px;
    width: 100%;
    background: transparent;
  `,
};

export const FormWrapper = styled.div<{ variant: 'bottom' | 'simple' }>`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  z-index: 10;
  border-radius: 4px;
  color: #4a4a49;
  font-family: Work Sans;
  font-style: normal;
  text-align: center;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  ${({ variant }) => FormWrapperVariants[variant]}
`;
