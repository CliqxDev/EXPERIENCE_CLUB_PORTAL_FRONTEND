import Link from 'next/link';
import LinkMenu from 'components/MenuComponents/LinkMenu';
import { POST_CATEGORIES } from 'models/post';
import * as S from './styles';

const TrailsMyHome = () => (
  <S.Wrapper>
    <S.TitleTrailWrapper>
      <S.TitleTrail>Minhas Trilhas</S.TitleTrail>
    </S.TitleTrailWrapper>
    <S.WrapperTrail>
      <S.Trail>
        {POST_CATEGORIES.map(({ id, label, color }) => (
          <Link key={id} href={`/category/${id}`} passHref>
            <LinkMenu variant="sort" color={color}>
              {label}
            </LinkMenu>
          </Link>
        ))}
      </S.Trail>
    </S.WrapperTrail>
  </S.Wrapper>
);

export default TrailsMyHome;
