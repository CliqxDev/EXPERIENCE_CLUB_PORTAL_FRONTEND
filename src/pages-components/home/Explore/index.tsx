import Image from 'next/image';

import { FC, useEffect, useState } from 'react';
import { forEach, isEmpty, uniqueId } from 'lodash';
import Link from 'next/link';
import Title from 'components/ui/Title';

import { useMedia, usePosts } from 'hook/selectors/postHooks';
import { sanitizeTextByMaxLength } from 'utils/formatString';
import { useAppDispatch } from 'hook/store';
import { setShowShare } from 'flux/modules/post/actions';
import { Card, findCategoryById } from 'models/post';
import { PostItem } from 'flux/modules/post/types';
import shareIcon from '../../../../public/img/share-icon-black.svg';

import * as S from './styles';

type Props = {
  title: string;
  variant: 'scroll' | 'default';
};

const Explore: FC<Props> = ({ title, variant }) => {
  const { data: posts } = usePosts();
  const { data: media } = useMedia();
  const dispatch = useAppDispatch();

  const [cardData, setCardData] = useState<Card[]>([]);

  const mediaSelect = (post: PostItem) => {
    if (!isEmpty(media)) {
      const mediaPost = media[post.featured_media];
      if (mediaPost) {
        return media[post.featured_media].media_details.sizes[
          'independent-grid-small'
        ]?.source_url;
      }
    }
    return '';
  };

  useEffect(() => {
    if (!isEmpty(posts) && !isEmpty(media)) {
      if (Object.keys(media).length === posts?.length) {
        const newCardData: Card[] = [];
        forEach(posts.slice(5), post => {
          newCardData.push({
            id: post.id,
            title: sanitizeTextByMaxLength(post.title.rendered, 60),
            imgSrc: mediaSelect(post),
            description: sanitizeTextByMaxLength(post.excerpt.rendered),
            categoryId: post.categories[0]
          });
        });
        setCardData(newCardData);
      }
    }
  }, [posts, media]);

  return (
    <S.ExploreWrapper>
      <Title variant="black400">{title}</Title>

      <S.ListCard variant={variant}>
        {cardData.slice(0, 4).map(item => (
          <S.Card key={uniqueId()}>
            <Link href={`/post/${item.id}`}>
              <img src={item.imgSrc} alt="card imagem" />
              <S.DescriptionCard
                dangerouslySetInnerHTML={{ __html: `${item.title}...` }}
              />
            </Link>

            <S.FooterCard>
              <S.TextFooter>
                {findCategoryById(item.categoryId).label}
              </S.TextFooter>
              <Image
                src={shareIcon}
                alt="Compartilhar"
                onClick={() => dispatch(setShowShare(true))}
              />
            </S.FooterCard>
          </S.Card>
        ))}
      </S.ListCard>
    </S.ExploreWrapper>
  );
};

export default Explore;
