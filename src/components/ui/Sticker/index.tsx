import { FC, ReactNode } from 'react';
import * as S from './styles';

type Props = {
  children: ReactNode;
  bottom: string;
};

const Sticker: FC<Props> = ({ children, bottom }) => (
  <S.StickWrapper bottom={bottom}>
    <S.Stick>{children}</S.Stick>
  </S.StickWrapper>
);

export default Sticker;
