import { sanitizeAvatar } from 'utils/formatString';
import { useClientInfo } from 'hook/selectors/authHooks';
import * as S from './styles';

const ProfileHeader = () => {
  const { data } = useClientInfo();
  return (
    <S.ContainerInfo>
      <S.InfoContent>
        <S.Avatar>{sanitizeAvatar(data?.name || '')}</S.Avatar>

        <S.ContentText>
          <S.Text style={{ fontWeight: 500 }}>{data?.name}</S.Text>
          <S.Text>{data?.email}</S.Text>
        </S.ContentText>
      </S.InfoContent>
    </S.ContainerInfo>
  );
};

export default ProfileHeader;
