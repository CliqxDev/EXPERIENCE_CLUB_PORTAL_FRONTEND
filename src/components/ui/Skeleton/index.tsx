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

export const SkeletonPost = () => (
  <S.LoaderWrapper>
    <S.Placeholder className="header" />
    <S.Placeholder className="header-image" />
    <S.Placeholder className="post-title" />
    <S.Placeholder className="action" />
  </S.LoaderWrapper>
);

export const SkeletonPlan = () => (
  <S.LoaderWrapper>
    <S.Placeholder className="post-title" />
    <S.Placeholder className="input" />
    <S.Placeholder className="header-image" />
  </S.LoaderWrapper>
);

export const SkeletonCardList = () => (
  <S.CardLoaderWrapper id="skeleton-wrapper">
    <S.Placeholder className="card" />
    <S.Placeholder className="card" />
    <S.Placeholder className="card" />
  </S.CardLoaderWrapper>
);

export const SkeletonTrailList = () => (
  <S.CardLoaderWrapper id="skeleton-wrapper">
    <S.Placeholder className="cardTrail" />
    <S.Placeholder className="cardTrail" />
    <S.Placeholder className="cardTrail" />
    <S.Placeholder className="cardTrail" />
    <S.Placeholder className="cardTrail" />
    <S.Placeholder className="cardTrail" />
  </S.CardLoaderWrapper>
);
