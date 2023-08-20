/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';

import { FC, useEffect, useState } from 'react';
import { isEmpty } from 'lodash';
import { PostItem } from 'flux/modules/post/types';
import { useAppDispatch } from 'hook/store';
import { media } from 'flux/modules/post/actions';
import { useMedia } from 'hook/selectors/postHooks';
import { Category } from 'models/posts/category';
import articleIcon from '../../../../public/img/article.svg';
import shareIcon from '../../../../public/img/share.svg';

import * as S from './styles';

type Props = {
  post: PostItem;
};
const SlideCarousel: FC<Props> = ({ post }) => {
  const dispatch = useAppDispatch();
  const { data } = useMedia();

  const [image, setImage] = useState('');

  useEffect(() => {
    if (!isEmpty(post)) {
      dispatch(media.request(post.featured_media));
    }
  }, [post]);

  useEffect(() => {
    if (!isEmpty(post)) {
      if (!isEmpty(data)) {
        if (data[post.featured_media]) {
          setImage(
            data[post.featured_media].media_details.sizes.medium.source_url
          );
        }
      }
    }
  }, [post, data]);

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
              <S.Span>{Category[post.categories[0]]}</S.Span>
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
