/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react'
import Image from 'next/image';

import arrowRight from '../../../public/img/arrow-right.svg'
import descriptionImg from '../../../public/img/description-card.png'
import shareIcon from '../../../public/img/share-icon-black.svg'
import subjectIcon from '../../../public/img/subject-icon.svg'

import * as S from './styles';

const listCards: Array<object> = [
  {
    title: 'Lorem ipsum dolor sit amet consectetur. Interdum ac.',
    img: <Image src="" alt="" />,
    description: 'JPMorgan Chase’s head of global real estate explains how and why the company is investing in tomorrow’s workplace.',
    iconSubject: <Image src="" alt="" />,
    subject: 'Reportagem',
    iconShare: <Image src="" alt="" />,
  },
  {
    title: 'Lorem ipsum dolor sit amet consectetur. Interdum ac.',
    img: <Image src="" alt="" />,
    description: 'JPMorgan Chase’s head of global real estate explains how and why the company is investing in tomorrow’s workplace.',
    iconSubject: <Image src="" alt="" />,
    subject: 'Reportagem',
    iconShare: <Image src="" alt="" />,
  },
  {
    title: 'Lorem ipsum dolor sit amet consectetur. Interdum ac.',
    img: <Image src="" alt="" />,
    description: 'JPMorgan Chase’s head of global real estate explains how and why the company is investing in tomorrow’s workplace.',
    iconSubject: <Image src="" alt="" />,
    subject: 'Reportagem',
    iconShare: <Image src="" alt="" />,
  },
  {
    title: 'Lorem ipsum dolor sit amet consectetur. Interdum ac.',
    img: <Image src="" alt="" />,
    description: 'JPMorgan Chase’s head of global real estate explains how and why the company is investing in tomorrow’s workplace.',
    iconSubject: <Image src="" alt="" />,
    subject: 'Reportagem',
    iconShare: <Image src="" alt="" />,
  },
  {
    title: 'Lorem ipsum dolor sit amet consectetur. Interdum ac.',
    img: <Image src="" alt="" />,
    description: 'JPMorgan Chase’s head of global real estate explains how and why the company is investing in tomorrow’s workplace.',
    iconSubject: <Image src="" alt="" />,
    subject: 'Reportagem',
    iconShare: <Image src="" alt="" />,
  },
  {
    title: 'Lorem ipsum dolor sit amet consectetur. Interdum ac.',
    img: <Image src="" alt="" />,
    description: 'JPMorgan Chase’s head of global real estate explains how and why the company is investing in tomorrow’s workplace.',
    iconSubject: <Image src="" alt="" />,
    subject: 'Reportagem',
    iconShare: <Image src="" alt="" />,
  },
  {
    title: 'Lorem ipsum dolor sit amet consectetur. Interdum ac.',
    img: <Image src="" alt="" />,
    description: 'JPMorgan Chase’s head of global real estate explains how and why the company is investing in tomorrow’s workplace.',
    iconSubject: <Image src="" alt="" />,
    subject: 'Reportagem',
    iconShare: <Image src="" alt="" />,
  },
  {
    title: 'Lorem ipsum dolor sit amet consectetur. Interdum ac.',
    img: <Image src="" alt="" />,
    description: 'JPMorgan Chase’s head of global real estate explains how and why the company is investing in tomorrow’s workplace.',
    iconSubject: <Image src="" alt="" />,
    subject: 'Reportagem',
    iconShare: <Image src="" alt="" />,
  },
  {
    title: 'Lorem ipsum dolor sit amet consectetur. Interdum ac.',
    img: <Image src="" alt="" />,
    description: 'JPMorgan Chase’s head of global real estate explains how and why the company is investing in tomorrow’s workplace.',
    iconSubject: <Image src="" alt="" />,
    subject: 'Reportagem',
    iconShare: <Image src="" alt="" />,
  },
  {
    title: 'Lorem ipsum dolor sit amet consectetur. Interdum ac.',
    img: <Image src="" alt="" />,
    description: 'JPMorgan Chase’s head of global real estate explains how and why the company is investing in tomorrow’s workplace.',
    iconSubject: <Image src="" alt="" />,
    subject: 'Reportagem',
    iconShare: <Image src="" alt="" />,
  },
  {
    title: 'Lorem ipsum dolor sit amet consectetur. Interdum ac.',
    img: <Image src="" alt="" />,
    description: 'JPMorgan Chase’s head of global real estate explains how and why the company is investing in tomorrow’s workplace.',
    iconSubject: <Image src="" alt="" />,
    subject: 'Reportagem',
    iconShare: <Image src="" alt="" />,
  },
]


const CardTrails = () => {
  const [showMore, setShowMore] = useState(false);

  const visibleListCard = showMore ? listCards : listCards.slice(0, 6)

  return (
    <S.Wrapper>
      {visibleListCard.map((card, idx: number) => (
        <S.ContentCard key={idx}>

          <S.TileCardText>Lorem ipsum dolor sit amet consectetur. Interdum ac.</S.TileCardText>
          <S.ContentDescriptionCard>
            <Image
              src={descriptionImg}
              alt="Descrição"
              width={120}
              height={120}
            />
            <S.DescriptionCardText>JPMorgan Chase’s head of global real estate explains how and why the company is investing in tomorrow’s workplace.</S.DescriptionCardText>
          </S.ContentDescriptionCard>

          <S.FooterCard>
            <S.Subject>
              <Image
                src={subjectIcon}
                alt="Assunto"
              />
              <S.SubjectText>Reportagem</S.SubjectText>
            </S.Subject>
            <Image
              src={shareIcon}
              alt="Compartilhar"
            />
          </S.FooterCard>
        </S.ContentCard>
      ))}
      {listCards.length > 6 && (
        <S.ShowMore onClick={() => setShowMore(true)}>
          Veja Mais
          <Image
            src={arrowRight}
            alt="Veja mais"
            style={{ marginLeft: '1rem' }}
          />
        </S.ShowMore>
      )}
    </S.Wrapper>
  )
};

export default CardTrails;