import LinkMenu from 'components/MenuComponents/LinkMenu';
import { POST_CATEGORIES } from 'models/post';
import * as S from './styles';

const TrailsMyHome = () => (
  <S.Wrapper>
    <S.TitleSort>Minhas Trilhas</S.TitleSort>
    <S.WrapperTrail>
      {POST_CATEGORIES.map(({ id, label, color }) => (
        <LinkMenu key={id} variant="sort" color={color}>
          {label}
        </LinkMenu>
      ))}
    </S.WrapperTrail>
  </S.Wrapper>
);

export default TrailsMyHome;
