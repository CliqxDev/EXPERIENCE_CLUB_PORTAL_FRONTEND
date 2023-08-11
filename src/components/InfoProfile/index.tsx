/* eslint-disable jsx-a11y/label-has-associated-control */
import { Camera } from "lucide-react";
import Image from "next/image";

import colaboratorIcon from '../../../public/colaborator.svg'

import { Avatar, ChangeAvatar, ChangeAvatarLabel, ContainerInfo, Email, InfoContent, Name } from "./styles";

export function InfoProfile() {
  return (
    <ContainerInfo>

      <InfoContent>
        <Avatar />
        <ChangeAvatarLabel htmlFor="avatar">
          <Camera color="#2954FC" size={18} />
        </ChangeAvatarLabel>

        <ChangeAvatar
          name="avatar"
          id="avatar"
          type="file"
        />

        <div style={{ margin: '4rem 1.4rem' }}>
          <Name>Pedro Lucas Maranini Tosta</Name>
          <Email>pcosta@gmail.com</Email>
        </div>
      </InfoContent>

      <Image
        width={30}
        height={30}
        src={colaboratorIcon}
        style={{ position: 'sticky', margin: '1rem 1.2rem 0 -1.2rem' }}
        alt="Colaborador"
      />

    </ContainerInfo>
  );
}