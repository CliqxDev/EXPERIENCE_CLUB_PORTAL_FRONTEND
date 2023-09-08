/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC } from 'react';
import Link from 'next/link';
import Button from 'components/ui/Button';
import * as S from './styles';

type CardProps = {
  title: string;
  titleCard: string;
  subTitleCard?: string;
  variant: 'sigin' | 'plan';
};

const CardLimitedRead: FC<CardProps> = ({
  title,
  titleCard,
  subTitleCard,
  variant
}) => (
  <S.Wrapper variant={variant || 'sigin'}>
    <S.BgImg />
    <S.Title>{title}</S.Title>
    <S.CardContent>
      <S.TitleCard>{titleCard}</S.TitleCard>
      <S.SubTitleCard>{subTitleCard}</S.SubTitleCard>
      {variant === 'sigin' && (
        <Link
          href="/register/user"
          style={{ textDecoration: 'none', width: '100%' }}
        >
          <Button fullwidth>Entrar</Button>
        </Link>
      )}
      {variant === 'plan' && (
        <Link href="/plan" style={{ textDecoration: 'none', width: '100%' }}>
          <Button fullwidth>Conheça nossos planos</Button>
        </Link>
      )}
    </S.CardContent>
  </S.Wrapper>
);

export default CardLimitedRead;
