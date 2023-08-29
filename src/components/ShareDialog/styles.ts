import styled from 'styled-components';

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 1.6rem;
`;

export const ContentWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 406px;
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  padding: 0 0.8rem;
`;

export const Title = styled.h1`
  color: #1d1d1b;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
`;

export const Subtitle = styled.h2`
  color: #686866;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 1.6rem;
`;

export const Button = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: #eaeeff;
  outline: none;
  border: none;
  height: 40px;
  cursor: pointer;
`;

export const SocialMediaWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  flex-wrap: wrap;
`;

export const ButtonSocialMediaWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.6rem;
`;

export const ButtonSocialMedia = styled.div`
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 82px;
  height: 84px;
  cursor: pointer;
  flex-direction: column;
`;

export const ImageWrapper = styled.div`
  border-radius: 8px;
  background: #e8e8e8;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  margin-bottom: 1.2rem;
`;
