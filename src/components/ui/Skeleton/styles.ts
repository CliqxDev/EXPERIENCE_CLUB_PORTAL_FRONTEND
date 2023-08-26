import styled, { keyframes } from 'styled-components';

export const LoaderWrapper = styled.div`
  align-content: center;
  align-items: center;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  width: 100%;
  position: relative;
`;

export const LoaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const BoxImageInfo = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 2.4rem;
  width: 100%;

  svg {
    height: 16rem;
    pointer-events: none;
  }
`;

export const BoxPlaceholder = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  margin: 0 auto;
  width: 100%;

  &.col {
    flex-direction: column;
  }
`;

const placeHolderShimmer = keyframes`
  0% {
    background-position: -468px 0
  }

  100% {
    background-position: 468px 0
  }
`;

export const Placeholder = styled.div`
  animation-duration: 1.25s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: ${placeHolderShimmer};
  animation-timing-function: linear;
  background: linear-gradient(to right, #eeeeee 10%, #dddddd 18%, #eeeeee 33%);
  background-color: darkgray;
  background-size: 800px 104px;
  border-radius: 4px;
  height: 20px;
  margin-bottom: 2.4rem;
  position: relative;
  width: 100%;

  &.image {
    border-radius: 4px;
    height: 144px;
    margin-bottom: 3.2rem;
    width: 144px;
  }

  &.title {
    height: 36px;
    margin-bottom: 3.2rem;
  }

  &.paragraph {
    height: 16px;
  }

  &.button {
    height: 42px;
  }

  &.input {
    height: 55px;
  }

  &.card {
    height: 240px;
  }

  &.slider {
    height: 390px;
    margin-bottom: 1.4rem;
  }
  &.trails {
    height: 200px;
  }

  &.circle {
    height: 16px;
    margin-bottom: 1.4rem;
  }

  &.header-image {
    height: 550px;
    margin-bottom: 1.4rem;
  }

  &.header {
    height: 72px;
    margin-bottom: 1.4rem;
  }

  &.post-title {
    height: 150px;
  }

  &.action {
    height: 56px;
    position: fixed;
    bottom: 0;
    margin: 0;
  }
`;

export const Box = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  padding: 1.6rem;
`;
