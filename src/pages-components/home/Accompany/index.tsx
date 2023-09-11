import Image from 'next/image';

import { useEffect, useState } from 'react';

import { forEach, isEmpty, uniqueId } from 'lodash';
import Link from 'next/link';
import Title from 'components/ui/Title';

import { useCategory, useMedia, usePosts } from 'hook/selectors/postHooks';
import { sanitizeTextByMaxLength } from 'utils/formatString';
import readIcon from '../../../../public/img/read-icon.svg';
import arrowRight from '../../../../public/img/arrow-right-blue.svg';

import * as S from './styles';

type Card = {
  id: number;
  title: string;
  imgSrc: string;
  description: string;
  category: string;
};

const Accompany = () => {
  const { data: categoryData } = useCategory();
  const { data: posts } = usePosts();
  const { data: media } = useMedia();

  const [cardData, setCardData] = useState<Card[]>([]);

  useEffect(() => {
    if (!isEmpty(posts) && !isEmpty(media) && !isEmpty(categoryData)) {
      if (Object.keys(media).length === posts?.length) {
        const newCardData: Card[] = [];
        forEach(posts.slice(5), post => {
          newCardData.push({
            id: post.id,
            title: post.title.rendered,
            imgSrc:
              media[post.featured_media].media_details.sizes.medium?.source_url,
            description: sanitizeTextByMaxLength(post.excerpt.rendered),
            category: categoryData[post.categories[0]]
          });
        });
        setCardData(newCardData);
      }
    }
  }, [posts, media, categoryData]);

  return (
    <S.AccompanyWrapper>
      <Title variant="black400">Acompanhe</Title>

      <S.AccompanyList>
        {cardData.slice(0, 4).map(item => (
          <Link
            key={uniqueId()}
            href={`/post/${item.id}`}
            style={{ textDecoration: 'none' }}
          >
            <S.AccompanyCard>
              <S.TopCard>
                <S.AccompanyTitle
                  style={{
                    color: '#686866',
                    fontSize: '1.4rem',
                    lineHeight: '2rem'
                  }}
                >
                  {item.category}
                </S.AccompanyTitle>
                <Image src={readIcon} alt="Leia" />
              </S.TopCard>
              <img src={item.imgSrc} alt="card imagem" />
              <S.DescriptionCard
                dangerouslySetInnerHTML={{ __html: item.title }}
              />
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
          </Link>
        ))}
      </S.AccompanyList>
    </S.AccompanyWrapper>
  );
};

export default Accompany;
