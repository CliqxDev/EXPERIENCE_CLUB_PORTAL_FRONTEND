/* eslint-disable react/no-array-index-key */
import Image from 'next/image';

import Title from 'components/ui/Title';

import arrowRight from '../../../../public/img/arrow-right-blue.svg';
import bannerCard from '../../../../public/img/banner-card.png';
import readIcon from '../../../../public/img/read-icon.svg';

import * as S from './styles';

const listBanners = [
  {
    title: 'LEIA0',
    description:
      'Lorem ipsum dolor sit amet consectetur. Maecenas nulla vitae elit enim amet.'
  },
  {
    title: 'LEIA1',
    description:
      'Lorem ipsum dolor sit amet consectetur. Maecenas nulla vitae elit enim amet.'
  },
  {
    title: 'LEIA2',
    description:
      'Lorem ipsum dolor sit amet consectetur. Maecenas nulla vitae elit enim amet.'
  },
  {
    title: 'LEIA3',
    description:
      'Lorem ipsum dolor sit amet consectetur. Maecenas nulla vitae elit enim amet.'
  },
  {
    title: 'LEIA3',
    description:
      'Lorem ipsum dolor sit amet consectetur. Maecenas nulla vitae elit enim amet.'
  },
  {
    title: 'LEIA3',
    description:
      'Lorem ipsum dolor sit amet consectetur. Maecenas nulla vitae elit enim amet.'
  },
  {
    title: 'LEIA3',
    description:
      'Lorem ipsum dolor sit amet consectetur. Maecenas nulla vitae elit enim amet.'
  },
  {
    title: 'LEIA3',
    description:
      'Lorem ipsum dolor sit amet consectetur. Maecenas nulla vitae elit enim amet.'
  },
  {
    title: 'LEIA3',
    description:
      'Lorem ipsum dolor sit amet consectetur. Maecenas nulla vitae elit enim amet.'
  },
  {
    title: 'LEIA3',
    description:
      'Lorem ipsum dolor sit amet consectetur. Maecenas nulla vitae elit enim amet.'
  },
  {
    title: 'LEIA3',
    description:
      'Lorem ipsum dolor sit amet consectetur. Maecenas nulla vitae elit enim amet.'
  },
];

const Accompany = () => (
  <S.AccompanyWrapper>
    <Title variant="black400">Acompanhe</Title>

    <S.AccompanyList>
      {listBanners.map((cardContent, idx) => (
        <S.AccompanyCard key={idx}>
          <S.TopCard>
            <S.AccompanyTitle
              style={{
                color: '#686866',
                fontSize: '1.4rem',
                lineHeight: '2rem'
              }}
            >
              {cardContent.title}
            </S.AccompanyTitle>

            <Image src={readIcon} alt="Leia" width={16} height={16} />
          </S.TopCard>

          <Image src={bannerCard} alt="Banner" width={240} height={200} />

          <S.DescriptionCard>{cardContent.description}</S.DescriptionCard>

          <S.FooterCard>
            <S.AccompanyTitle
              style={{
                fontSize: '1.4rem',
                lineHeight: '2rem',
                marginRight: '1.6rem'
              }}
            >
              Veja
            </S.AccompanyTitle>

            <Image
              src={arrowRight}
              alt="Veja"
              width={16}
              height={16}
              style={{ marginTop: '2px' }}
            />
          </S.FooterCard>
        </S.AccompanyCard>
      ))}
    </S.AccompanyList>
  </S.AccompanyWrapper>
);

export default Accompany;
