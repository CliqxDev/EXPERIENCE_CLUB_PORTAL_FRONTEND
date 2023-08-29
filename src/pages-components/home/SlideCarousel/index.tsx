import Image from 'next/image';

import { FC, useEffect, useState } from 'react';
import { isEmpty } from 'lodash';
import Link from 'next/link';
import { PostItem } from 'flux/modules/post/types';
import { useCategory, useMedia } from 'hook/selectors/postHooks';
import { sanitizeTextByMaxLength } from 'utils/formatString';
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
      <Link href={`/post/${post.id}`} style={{ textDecoration: 'none' }}>
        {image && <img src={image} alt="Assunto" />}
      </Link>
      <S.WrapperContent>
        <S.WrapperText>
          <S.Title>{post.title.rendered}</S.Title>

          <S.Description
            dangerouslySetInnerHTML={{
              __html: `${sanitizeTextByMaxLength(
                post.excerpt.rendered,
                100
              )}...`
            }}
          />
        </S.WrapperText>
        <S.FooterSlideWrapper>
          <S.FooterSlide>
            <S.SubjectSection>
              <Image src={articleIcon} alt="Assunto" />
              {category && <S.Span>{category[post.categories[0]]}</S.Span>}
            </S.SubjectSection>

            <Image src={shareIcon} alt="Compartilhar" />
          </S.FooterSlide>
        </S.FooterSlideWrapper>
      </S.WrapperContent>
    </S.Wrapper>
  );
};

export default SlideCarousel;
