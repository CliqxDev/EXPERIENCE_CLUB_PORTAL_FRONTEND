import { FC } from 'react';
import { POST_CATEGORIES } from 'models/post';
import * as S from './styles';

type TrailButtonProps = {
  variant?: string;
  color?: string;
};

const TrailsDesktop: FC<TrailButtonProps> = () => (
  <S.WrapperTrailDesktop>
    <S.WrapperTrail>
      {POST_CATEGORIES.map(({ id, label, color }) => (
        <S.TrailButton key={id} variant="sort" color={color}>
          <span>{label}</span>
        </S.TrailButton>
      ))}
    </S.WrapperTrail>
  </S.WrapperTrailDesktop>
);

export default TrailsDesktop;
