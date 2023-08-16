/* eslint-disable arrow-body-style */
import Image from 'next/image';

import bannerCard from '../../../public/img/banner-columnist.png';
import bookmarkIcon from '../../../public/img/bookmark-add.svg'
import filterIcon from '../../../public/img/filter-icon.svg';
import shareIcon from '../../../public/img/share-icon-black.svg';

import * as S from './styles';

const listCardsExplore = [
  {
    title: 'Lorem ipsum dolor sit amet consectetur.',
    description: 'JPMorgan Chase’s head of global real estate explains how and why the company is investing in tomorrow’s workplace.',
    nameColumnistFooter: 'Denize Bacoccina'
  },
  {
    title: 'Lorem ipsum dolor sit amet consectetur.',
    description: 'JPMorgan Chase’s head of global real estate explains how and why the company is investing in tomorrow’s workplace.',
    nameColumnistFooter: 'Denize Bacoccina'
  },
  {
    title: 'Lorem ipsum dolor sit amet consectetur.',
    description: 'JPMorgan Chase’s head of global real estate explains how and why the company is investing in tomorrow’s workplace.',
    nameColumnistFooter: 'Denize Bacoccina'
  },
  {
    title: 'Lorem ipsum dolor sit amet consectetur.',
    description: 'JPMorgan Chase’s head of global real estate explains how and why the company is investing in tomorrow’s workplace.',
    nameColumnistFooter: 'Denize Bacoccina'
  },
  {
    title: 'Lorem ipsum dolor sit amet consectetur.',
    description: 'JPMorgan Chase’s head of global real estate explains how and why the company is investing in tomorrow’s workplace.',
    nameColumnistFooter: 'Denize Bacoccina'
  },
  {
    title: 'Lorem ipsum dolor sit amet consectetur.',
    description: 'JPMorgan Chase’s head of global real estate explains how and why the company is investing in tomorrow’s workplace.',
    nameColumnistFooter: 'Denize Bacoccina'
  },
]

const CardColumnist = () => (
  <S.ExploreCards>
    <S.TopExplore>
      <S.TitleExplore>Explore</S.TitleExplore>
      <Image
        src={filterIcon}
        alt="Filtrar"
        style={{ marginRight: '1.4rem' }}
      />
    </S.TopExplore>

    {listCardsExplore.map((card) => {
      return (
        <S.InfoCard key={card.title}>
          <Image
            src={bannerCard}
            alt="Banner"
            style={{ width: '100%', borderRadius: '4px 4px 0 0' }}
          />
          <S.TitleCard>{card.title}</S.TitleCard>
          <S.DescriptionCard>{card.description}</S.DescriptionCard>

          <S.FooterCard>
            <S.NameColumnistFooter>{card.nameColumnistFooter}</S.NameColumnistFooter>
            <div>
              <Image
                src={bookmarkIcon}
                alt="Favoritar"
                style={{ marginRight: '3rem' }}
              />
              <Image
                src={shareIcon}
                alt="Compartilhar"
                style={{ marginRight: '1.4rem' }}
              />
            </div>
          </S.FooterCard>
        </S.InfoCard>
      )
    })}


  </S.ExploreCards>
);

export default CardColumnist;