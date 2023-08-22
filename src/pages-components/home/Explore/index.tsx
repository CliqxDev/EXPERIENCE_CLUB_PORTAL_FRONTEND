/* eslint-disable react/no-array-index-key */
import Image from 'next/image';

import Title from 'components/ui/Title';

import bookmarkIcon from '../../../../public/img/bookmark-add.svg';
import bannerExplore from '../../../../public/img/explore-bg.png';
import shareIcon from '../../../../public/img/share-icon-black.svg';

import * as S from './styles';

const listCardsExplore = [
  {
    description: 'Lorem ipsum dolor sit amet consectetur. Lorem ipsum do.',
    footerSubject: 'Tecnologia'
  },
  {
    description: 'Lorem ipsum dolor sit amet consectetur. Lorem ipsum do.',
    footerSubject: 'Tecnologia'
  },
  {
    description: 'Lorem ipsum dolor sit amet consectetur. Lorem ipsum do.',
    footerSubject: 'Tecnologia'
  },
  {
    description: 'Lorem ipsum dolor sit amet consectetur. Lorem ipsum do.',
    footerSubject: 'Tecnologia'
  },
  {
    description: 'Lorem ipsum dolor sit amet consectetur. Lorem ipsum do.',
    footerSubject: 'Tecnologia'
  },
  {
    description: 'Lorem ipsum dolor sit amet consectetur. Lorem ipsum do.',
    footerSubject: 'Tecnologia'
  }
];

const Explore = () => (
  <S.ExploreWrapper>
    <Title variant="black400">Explore</Title>

    <S.ListCard>
      {listCardsExplore.map((card, idx) => (
        <S.Card key={idx}>
          <Image src={bannerExplore} alt="Banner" width={148} height={112} />
          <S.DescriptionCard>{card.description}</S.DescriptionCard>

          <S.FooterCard>
            <S.TextFooter>{card.footerSubject}</S.TextFooter>
            <Image src={bookmarkIcon} alt="Bookmark" width={14} height={14} />
            <Image src={shareIcon} alt="Compartilhar" />
          </S.FooterCard>
        </S.Card>
      ))}
    </S.ListCard>
  </S.ExploreWrapper>
);

export default Explore;
