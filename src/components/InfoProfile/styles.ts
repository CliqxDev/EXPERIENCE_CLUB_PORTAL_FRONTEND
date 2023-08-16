import { styled } from "styled-components";

export const ContainerInfo = styled.main`
  width: 90%;
  height: 12.4rem;

  display: flex;
  justify-content: space-between;
  margin: 2rem 2rem 1.4rem 2rem;

  background: #FFFF;
  border-radius: 4px;
`;

export const Avatar = styled.div`
  width: 9.2rem;
  height: 9.2rem;

  background: #A7B9FE;
  border-radius: 4px;

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
  background: #FFFF;
`;

export const InfoContent = styled.div`
  width: 100%;

  display: flex;
`;

export const Name = styled.p`
  width: 18rem;
  height: auto;

  font-size: 1.6rem;
  font-weight: 500;
  line-height: 2.4rem;

  color: #1D1D1B;
`;

export const Email = styled.p`
  width: 18rem;
  height: 2.4rem;

  font-size: 1.2rem;
  font-weight: 200;
  line-height: 2.4rem;

  color: #1D1D1B;
`;