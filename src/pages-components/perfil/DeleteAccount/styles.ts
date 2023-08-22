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

export const Title = styled.h1`
  color: #1d1d1b;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
`;

export const Form = styled.form`
  padding: 1.6rem;
`;

export const Subtitle = styled.h2`
  color: #686866;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 1.6rem;
`;

export const AlertMessage = styled.span`
  color: #dc2626;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;

export const Action = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-around;
  margin-top: 1.6rem;

  div:not(:last-child) {
    margin-right: 1.6rem;
  }
`;

export const OverlayContent = styled.div`
  width: 100%;
  height: 100%;
`;
