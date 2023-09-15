import styled from 'styled-components';

export const Wrapper = styled.main<{ variant: 'sigin' | 'plan' }>`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background: linear-gradient(180deg, rgba(29, 60, 179, 0) 0%, #1d3cb3 15%);
  position: fixed;
  bottom: 0;
`;

export const BgImg = styled.div`
  width: 100%;
  height: 130px;
  position: absolute;
  bottom: 0;
  background-image: url('/img/employee-bg.png');
  background-size: 100% 130px;
  background-position: bottom;
  background-repeat: no-repeat;
`;

export const Title = styled.h1`
  font-family: Work Sans/headline/large;
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
  padding: 8rem 2rem 2rem 2rem;
  color: #bdcafe;
`;

export const CardContent = styled.div`
  width: 100%;
  height: auto;
  border-radius: 8px;
  gap: 16px;
  background: #eaeeff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.6rem;
  z-index: 1;
`;

export const TitleCard = styled.h2`
  font-family: Work Sans/headline/large;
  font-weight: 400;
  font-size: 22px;
  line-height: 28px;
  padding: 0.6rem;
  color: #1d1d1b;
`;

export const SubTitleCard = styled.h3`
  font-family: Work Sans/title/small;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  padding: 0 0.6rem;
  color: #1d1d1b;
`;
