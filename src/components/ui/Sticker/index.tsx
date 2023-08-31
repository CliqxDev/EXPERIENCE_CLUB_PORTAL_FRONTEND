import { FC, ReactNode } from 'react';
import * as S from './styles';

type Props = {
  children: ReactNode;
  bottom: string;
  padding?: string;
};

const Sticker: FC<Props> = ({ children, bottom, padding = '1.6rem' }) => (
  <S.StickWrapper bottom={bottom}>
    <S.Stick padding={padding}> {children}</S.Stick>
  </S.StickWrapper>
);

export default Sticker;
