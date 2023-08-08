import styled from 'styled-components';

export const Wrapper = styled.main`
  position: absolute;
  z-index: 10;
  bottom: 1.6rem;
  left: 1.6rem;
  right: 1.6rem;
  border-radius: 4px;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;

  #next-step {
    width: 100%;
  }
`;

export const SubtitleWrapper = styled.div`
  height: calc(100vh - 445px);
  display: flex;
  justify-content: center;
  flex-direction: column;
  overflow: auto;
  margin: 10px 0;
`;
