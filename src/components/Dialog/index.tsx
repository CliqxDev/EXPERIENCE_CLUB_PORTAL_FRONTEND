import { FC, ReactNode, useEffect, useState } from 'react';
import * as S from './styles';

type Props = {
  onClose: () => void;
  show: boolean;
  children: ReactNode;
};

const Dialog: FC<Props> = ({ onClose, show, children }) => {
  const [showParam, setShowParam] = useState(false);

  useEffect(() => {
    setShowParam(show);
  }, [show]);

  return (
    <>
      {showParam && (
        <S.Wrapper>
          <S.OverlayContent onClick={onClose} />
          <S.Content>
            <S.Top>
              <S.Line />
            </S.Top>
            {children}
          </S.Content>
        </S.Wrapper>
      )}
    </>
  );
};
export default Dialog;
