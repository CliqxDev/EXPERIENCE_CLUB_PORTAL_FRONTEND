import styled from 'styled-components';

export const Wrapper = styled.main`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10;
  position: fixed;
  left: 0;
  top: 0;
  overflow: hidden;
`;

export const Content = styled.div`
  z-index: 100;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: #ffffff;
  border-radius: 16px 16px 0px 0px;
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 36px;
`;

export const Line = styled.div`
  width: 32px;
  height: 4px;
  border-radius: 100px;
  opacity: 0.4;
  background: #686866;
`;

export const OverlayContent = styled.div`
  width: 100%;
  height: 100%;
`;
