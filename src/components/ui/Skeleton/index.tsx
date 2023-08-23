import * as S from './styles';

export const SkeletonHome = () => (
  <S.LoaderWrapper>
    <S.Placeholder className="slider" />
    <S.Box>
      <S.Placeholder
        className="circle"
        style={{ width: 110, borderRadius: '10px' }}
      />
    </S.Box>
    <S.Content>
      <S.Placeholder className="input" />
      <S.Placeholder className="button" />
      <S.Placeholder className="button" />
      <S.Placeholder className="card" />
    </S.Content>
  </S.LoaderWrapper>
);
