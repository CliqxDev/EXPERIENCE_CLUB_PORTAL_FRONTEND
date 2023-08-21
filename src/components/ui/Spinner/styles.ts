import styled, { keyframes } from 'styled-components';

export const Overlay = styled.div`
  background-color: #000000;
  color: ${props => props.color};
  display: flex;
  font-size: 1.2em;
  height: 100%;
  left: 0;
  opacity: 0.7;
  position: absolute;
  text-align: center;
  top: 0;
  transition: opacity 1ms ease-out;
  width: 100%;
  z-index: 1000;

  &.loading-overlay-transition-appear.loading-overlay-transition-appear-active,
  &.loading-overlay-transition-enter.loading-overlay-transition-enter-active {
    opacity: 0;
    transition: opacity 0.5s ease-in;
  }

  &.loading-overlay-transition-exit.loading-overlay-transition-exit-active {
    opacity: 0;
    transition: opacity 0.5s ease-in;
  }
`;

export const Content = styled.div`
  margin: auto;
`;

export const StyledSpinner = styled.div`
  margin: 0px auto 10px auto;
  max-height: 100%;
  position: relative;
  width: 55px;

  &:before {
    content: '';
    display: block;
    padding-top: 100%;
  }
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  
  to {
    transform: rotate(360deg);
  }
`;

export const SpinnerSvg = styled.svg`
  animation: ${rotate360} 2s linear infinite;
  bottom: 0;
  height: 100%;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  transform-origin: center center;
  width: 100%;
`;

const spinnerDash = keyframes`
  0% {
    stroke-dasharray: 1,200;
    stroke-dashoffset: 0;
  }
  
  50% {
    stroke-dasharray: 89,200;
    stroke-dashoffset: -35px;
  }

  100% {
    stroke-dasharray: 89,200;
    stroke-dashoffset: -124px;
  }
`;

export const SpinnerCircle = styled.circle`
  animation: ${spinnerDash} 1.5s ease-in-out infinite;
  stroke: ${props => props.color};
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  stroke-linecap: round;
`;

export const Container = styled.div<{ overflow: string }>`
  display: flex;
  overflow: ${({ overflow }) => overflow};
  position: absolute;
  width: 100%;
  flex-direction: column;
`;
