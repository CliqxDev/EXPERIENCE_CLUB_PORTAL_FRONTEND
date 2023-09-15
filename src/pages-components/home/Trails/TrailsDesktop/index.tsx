/* eslint-disable react/jsx-no-undef */
import { FC } from 'react';
import Link from 'next/link';
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
          <Link href={`/category/${id}`} passHref>
            <span>{label}</span>
          </Link>
        </S.TrailButton>
      ))}
    </S.WrapperTrail>
  </S.WrapperTrailDesktop>
);

export default TrailsDesktop;
