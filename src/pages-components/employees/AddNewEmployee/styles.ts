import styled from 'styled-components';

export const Wrapper = styled.main`
  height: 100vh;
  padding: 2rem;
`;

export const ContainerData = styled.div`
  height: auto;
  padding: 1.6rem;
  background: #ffff;
  border-radius: 4px;
`;

export const FormData = styled.form`
  display: flex;
  flex-direction: column;
`;

export const AddNewPhoto = styled.div`
  height: 12.4rem;

  display: flex;
  background: #FFFFFF;
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
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 99px;
  background: #ffff;
`;

export const AddPhoto = styled.p`
  font-family: Work Sans/title/medium;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #1D1D1B;
  margin: 8.5rem 0 0 1rem;
`;
