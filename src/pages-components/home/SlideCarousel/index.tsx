import Image from 'next/image';

import { FC, useEffect, useState } from 'react';
import { isEmpty } from 'lodash';
import Link from 'next/link';
import parse from 'html-react-parser';
import { PostItem } from 'flux/modules/post/types';

import { useMedia } from 'hook/selectors/postHooks';
import { sanitizeTextByMaxLength } from 'utils/formatString';
import { useAppDispatch } from 'hook/store';
import { setShowShare } from 'flux/modules/post/actions';
import { findCategoryById } from 'models/post';
import articleIcon from '../../../../public/img/article.svg';
import shareIcon from '../../../../public/img/share.svg';

import * as S from './styles';

type Props = {
  post: PostItem;
};
const SlideCarousel: FC<Props> = ({ post }) => {
  const dispatch = useAppDispatch();
  const { data: mediaData } = useMedia();

  const [image, setImage] = useState('');

  const mediaSelect = (postParam: PostItem) => {
    if (!isEmpty(mediaData)) {
      const mediaPost = mediaData[postParam.featured_media];
      if (mediaPost) {
        return mediaData[postParam.featured_media].media_details.sizes.medium
          ?.source_url;
      }
    }
    return '';
  };

  useEffect(() => {
    if (!isEmpty(post)) {
      if (!isEmpty(mediaData)) {
        if (mediaData[post.featured_media]) {
          setImage(mediaSelect(post));
        }
      }
    }
  }, [post, mediaData]);

  return (
    <S.Wrapper>
      <Link href={`/post/${post.id}`} style={{ textDecoration: 'none' }}>
        {image && (
          <S.ImgPost>
            <img src={image} alt="Assunto" />
          </S.ImgPost>
        )}
      </Link>
      <S.WrapperContent>
        <Link href={`/post/${post.id}`} style={{ textDecoration: 'none' }}>
          <S.WrapperText>
            <S.Title>{post.title && <span>{parse(post.title.rendered)}</span>}</S.Title>

            <S.Description
              dangerouslySetInnerHTML={{
                __html: `${sanitizeTextByMaxLength(
                  post.excerpt.rendered,
                  100
                )}...`
              }}
            />
          </S.WrapperText>
        </Link>

        <S.FooterSlideWrapper>
          <S.FooterSlide>
            <Link href={`/post/${post.id}`} style={{ textDecoration: 'none' }}>
              <S.SubjectSection>
                <Image src={articleIcon} alt="Assunto" />
                <S.Span>{findCategoryById(post.categories[0]).label}</S.Span>
              </S.SubjectSection>
            </Link>
            <S.WrapperImagem onClick={() => dispatch(setShowShare(true))}>
              <Image src={shareIcon} alt="Compartilhar" />
            </S.WrapperImagem>
          </S.FooterSlide>
        </S.FooterSlideWrapper>
      </S.WrapperContent>
    </S.Wrapper>
  );
};

export default SlideCarousel;
