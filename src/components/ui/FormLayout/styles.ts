import styled, { css } from 'styled-components';
import { breakpoints } from 'styles';

const WrapperVariants = {
  bottom: css``,
  center: css``,
  simple: css`
    padding: 16px;
  `
};

export const Wrapper = styled.main<{ variant: 'bottom' | 'simple' | 'center' }>`
  background-image: url('/img/form-layout-background.svg');
  width: 100%;
  min-height: 100vh;
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  ${breakpoints.up('md')} {
    background-repeat: repeat;
    background-size: contain;
  }

  ${({ variant }) => WrapperVariants[variant]}
`;

export const Header = styled.div`
  background-color: transparent;
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
    background: transparent;

    ${breakpoints.up('md')} {
      position: unset;
      width: 558px;
    }
  `,
  simple: css`
    margin-top: 75px;
    width: 100%;
    background-color: transparent;
  `,
  center: css`
    width: 100%;
    background-color: #ffffff;
  `
};

export const FormWrapper = styled.div<{
  variant: 'bottom' | 'simple' | 'center';
}>`
  background: transparent;
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
`;
