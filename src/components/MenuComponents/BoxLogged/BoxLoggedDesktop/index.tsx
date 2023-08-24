
import { FC } from 'react';
import { sanitizeAvatar } from 'utils/formatString';
import { useClientInfo } from 'hook/selectors/authHooks';
import * as S from './styles';

type BoxLoggedDesktopProps = {
  onClick: () => void;
};

const BoxLoggedDesktop: FC<BoxLoggedDesktopProps> = ({ onClick }) => {
  const { data } = useClientInfo();

  return (
    <S.WrapperDesktop onClick={onClick}>
      <S.Avatar>{sanitizeAvatar(data?.name || '')}</S.Avatar>
    </S.WrapperDesktop>
  );
};
export default BoxLoggedDesktop;
