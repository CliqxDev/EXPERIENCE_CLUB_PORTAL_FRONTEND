import { Camera } from 'lucide-react';
// import Image from 'next/image';

import { sanitizeAvatar } from 'utils/formatString';
import { useClientInfo } from 'hook/selectors/authHooks';
import * as S from './styles';

const ProfileHeader = () => {
  const { data } = useClientInfo();
  return (
    <S.ContainerInfo>
      <S.InfoContent>
        <S.Avatar>{sanitizeAvatar(data?.name || '')}</S.Avatar>
        <S.ChangeAvatarLabel htmlFor="avatar">
          <Camera color="#2954FC" size={18} />
        </S.ChangeAvatarLabel>

        <div style={{ margin: '5.5rem 1.4rem' }}>
          <S.Text style={{ fontWeight: 500 }}>{data?.name}</S.Text>
          <S.Text>{data?.email}</S.Text>
        </div>
      </S.InfoContent>
      {/* 
      <Image
        width={30}
        height={30}
        src="/user-group.svg"
        style={{ position: 'sticky', margin: '1rem 1.2rem 0 -1.2rem' }}
        alt="Colaborador"
      /> */}
    </S.ContainerInfo>
  );
};

export default ProfileHeader;
