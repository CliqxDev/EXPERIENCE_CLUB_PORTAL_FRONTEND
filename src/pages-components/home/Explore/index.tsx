import Image from 'next/image';

import { FC, useEffect, useState } from 'react';
import { forEach, isEmpty, uniqueId } from 'lodash';
import Title from 'components/ui/Title';

import { useCategory, useMedia, usePosts } from 'hook/selectors/postHooks';
import { sanitizeTextByMaxLength } from 'utils/formatString';
import shareIcon from '../../../../public/img/share-icon-black.svg';

import * as S from './styles';

type Card = {
  id: number;
  title: string;
  imgSrc: string;
  description: string;
  category: string;
};

type Props = {
  title: string;
  variant: 'scroll' | 'default';
};

const Explore: FC<Props> = ({ title, variant }) => {
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
            title: sanitizeTextByMaxLength(post.title.rendered, 60),
            imgSrc:
              media[post.featured_media].media_details.sizes[
                'independent-grid-small'
              ].source_url,
            description: sanitizeTextByMaxLength(post.excerpt.rendered),
            category: categoryData[post.categories[0]]
          });
        });
        setCardData(newCardData);
      }
    }
  }, [posts, media, categoryData]);

  return (
    <S.ExploreWrapper>
      <Title variant="black400">{title}</Title>

      <S.ListCard variant={variant}>
        {cardData.slice(0, 4).map(item => (
          <S.Card key={uniqueId()}>
            <img src={item.imgSrc} alt="card imagem" />
            <S.DescriptionCard
              dangerouslySetInnerHTML={{ __html: `${item.title}...` }}
            />
            <S.FooterCard>
              <S.TextFooter> {item.category}</S.TextFooter>
              <Image src={shareIcon} alt="Compartilhar" />
            </S.FooterCard>
          </S.Card>
        ))}
      </S.ListCard>
    </S.ExploreWrapper>
  );
};

export default Explore;
