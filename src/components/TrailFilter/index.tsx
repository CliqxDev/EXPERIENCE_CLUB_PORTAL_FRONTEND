import { FC } from 'react';
import Link from 'next/link';
import { uniqueId } from 'lodash';
import Dialog from 'components/Dialog';
import LinkMenu from 'components/MenuComponents/LinkMenu';
import { POST_CATEGORIES } from 'models/post';
import * as S from './styles';

type Props = {
  onClose: () => void;
  show: boolean;
};

const TrailFilter: FC<Props> = ({ show, onClose }) => (
  <Dialog show={show} onClose={onClose}>
    <S.Wrapper>
      <S.Title>Trilhas</S.Title>
      <S.Subtitle>Navegue diretamente pelos temas do seu interesse </S.Subtitle>
      {POST_CATEGORIES.map(({ id, label, color }) => (
        <Link href={`/category/${id}`} passHref key={uniqueId()}>
          <LinkMenu variant="sort" color={color}>
            {label}
          </LinkMenu>
        </Link>
      ))}
    </S.Wrapper>
  </Dialog>
);
export default TrailFilter;
