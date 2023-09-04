import { styled } from 'styled-components';

export const ContainerInfo = styled.main`
  height: 12.4rem;

  display: flex;
  justify-content: space-between;
  background: #ffff;
  border-radius: 4px;
  margin-bottom: 1.6rem;
  margin-top: 2.4rem;
`;

export const Avatar = styled.div`
  width: 9.2rem;
  height: 9.2rem;
  background: #a7b9fe;
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 50px;
  margin: 1.6rem 0 1.6rem 1.6rem;
`;

export const ChangeAvatar = styled.input`
  width: 0;
  height: 0;

  visibility: invisible;
`;

export const ChangeAvatarLabel = styled.label`
  width: 2.4rem;
  height: 2.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 6.5rem -1rem;
  border-radius: 8px;
  background: #ffff;
`;

export const InfoContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const Text = styled.p`
  width: 18rem;
  font-size: 1.6rem;
  line-height: 2.4rem;
  color: #1d1d1b;
  font-weight: 400;
`;

export const ContentText = styled.div`
  margin: 5.5rem 1.4rem;
  overflow-wrap: anywhere;
  width: 60%;

  p {
    width: 100%;
  }
`;
