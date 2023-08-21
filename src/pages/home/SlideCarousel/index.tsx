import Image from 'next/image';

import { FC, useEffect, useState } from 'react';
import { isEmpty } from 'lodash';
import { PostItem } from 'flux/modules/post/types';
import { useCategory, useMedia } from 'hook/selectors/postHooks';
import articleIcon from '../../../../public/img/article.svg';
import shareIcon from '../../../../public/img/share.svg';

import * as S from './styles';

type Props = {
  post: PostItem;
};
const SlideCarousel: FC<Props> = ({ post }) => {
  const { data: mediaData } = useMedia();
  const { data: category } = useCategory();

  const [image, setImage] = useState('');

  useEffect(() => {
    if (!isEmpty(post)) {
      if (!isEmpty(mediaData)) {
        if (mediaData[post.featured_media]) {
          setImage(
            mediaData[post.featured_media].media_details.sizes.medium.source_url
          );
        }
      }
    }
  }, [post, mediaData]);

  return (
    <S.Wrapper>
      {image && <img src={image} alt="Assunto" />}
      <S.WrapperContent>
        <S.WrapperText>
          <S.Title>{post.title.rendered}</S.Title>

          <S.Description>
            Suspendisse potenti. Sed eleifend aliquam ultricies. Sed facilisis,
            justo in sodales sagittis, nunc purus dictum elit,
          </S.Description>
        </S.WrapperText>
        <S.FooterSlideWrapper>
          <S.FooterSlide>
            <S.SubjectSection>
              <Image src={articleIcon} alt="Assunto" />
              {category && <S.Span>{category[post.categories[0]]}</S.Span>}
            </S.SubjectSection>

            <Image
              src={shareIcon}
              alt="Compartilhar"
              style={{ width: '15%' }}
            />
          </S.FooterSlide>
        </S.FooterSlideWrapper>
      </S.WrapperContent>
    </S.Wrapper>
  );
};

export default SlideCarousel;
