import Image from 'next/image';

import Title from 'components/Title';

import bannerCard from '../../../../public/img/banner-card.png';
import shareIcon from '../../../../public/img/share-icon-black.svg';

import * as S from './styles';

const showMoreContent = [
  {
    banner: <Image width={150} height={150} src={bannerCard} alt="Banner" />,
    title: 'Lorem ipsum dolor sit amet consecter.',
    description:
      'JPMorgan Chase’s head of global real estate explains how and why the company is.',
    type: 'Tecnologia',
    iconType: (
      <Image
        src={shareIcon}
        alt="Compartilhar"
        style={{ marginRight: '1rem' }}
      />
    )
  },
  {
    banner: <Image width={150} height={150} src={bannerCard} alt="Banner" />,
    title: 'Lorem ipsum dolor sit amet consecter.',
    description:
      'JPMorgan Chase’s head of global real estate explains how and why the company is.',
    type: 'Tecnologia',
    iconType: (
      <Image
        src={shareIcon}
        alt="Compartilhar"
        style={{ marginRight: '1rem' }}
      />
    )
  },
  {
    banner: <Image width={150} height={150} src={bannerCard} alt="Banner" />,
    title: 'Lorem ipsum dolor sit amet consecter.',
    description:
      'JPMorgan Chase’s head of global real estate explains how and why the company is.',
    type: 'Tecnologia',
    iconType: (
      <Image
        src={shareIcon}
        alt="Compartilhar"
        style={{ marginRight: '1rem' }}
      />
    )
  },
  {
    banner: <Image width={150} height={150} src={bannerCard} alt="Banner" />,
    title: 'Lorem ipsum dolor sit amet consecter.',
    description:
      'JPMorgan Chase’s head of global real estate explains how and why the company is.',
    type: 'Tecnologia',
    iconType: (
      <Image
        src={shareIcon}
        alt="Compartilhar"
        style={{ marginRight: '1rem' }}
      />
    )
  }
];

const ShowMore = () => (
  <S.ShowMoreWrapper>
    <Title variant="black400">Veja Mais</Title>
    <S.ListCard>
      {showMoreContent.map(card => (
        <S.ContentCard key={card.title}>
          <S.TopContent>
            {card.banner}
            <S.Descriptions>
              <S.TitleBanner>{card.title}</S.TitleBanner>
              <S.DescriptionBanner>{card.description}</S.DescriptionBanner>
            </S.Descriptions>
          </S.TopContent>
          <S.FooterCard>
            <S.TextFooter>{card.type}</S.TextFooter>
            {card.iconType}
          </S.FooterCard>
        </S.ContentCard>
      ))}
    </S.ListCard>
  </S.ShowMoreWrapper>
);

export default ShowMore;
