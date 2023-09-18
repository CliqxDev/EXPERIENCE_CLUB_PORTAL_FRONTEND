import { FC, ReactNode } from 'react';
import * as S from './styles';

type Props = {
  children: ReactNode;
  padding?: string;
};

const Sticker: FC<Props> = ({ children, padding = '1.6rem' }) => (
  <S.StickWrapper id="wrapper-sticker">
    <S.Stick padding={padding}> {children}</S.Stick>
  </S.StickWrapper>
);

export default Sticker;
