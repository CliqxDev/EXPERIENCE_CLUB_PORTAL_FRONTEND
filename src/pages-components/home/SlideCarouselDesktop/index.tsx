import Image from 'next/image';
import parse from 'html-react-parser';

import { FC, useEffect, useState } from 'react';
import { isEmpty } from 'lodash';
import Link from 'next/link';
import { PostItem } from 'flux/modules/post/types';

import { useMedia } from 'hook/selectors/postHooks';
import { sanitizeTextByMaxLength } from 'utils/formatString';
import { useAppDispatch } from 'hook/store';
import { setShowShare } from 'flux/modules/post/actions';
import articleIcon from '../../../../public/img/article.svg';
import shareIcon from '../../../../public/img/share.svg';

import * as S from './styles';

type Props = {
  post: PostItem;
};
const SlideCarouselDesktop: FC<Props> = ({ post }) => {
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
      <S.WrapperImage>
        <S.WrapperContent>
          <S.TextWrapper>
            <Link href={`/post/${post.id}`} style={{ textDecoration: 'none' }}>
              <S.Title>{parse(post.title.rendered)}</S.Title>

              <S.Description
                dangerouslySetInnerHTML={{
                  __html: `${sanitizeTextByMaxLength(
                    post.excerpt.rendered,
                    100
                  )}...`
                }}
              />
            </Link>

            <S.WrapperAction>
              <Link
                href={`/post/${post.id}`}
                style={{ textDecoration: 'none' }}
              >
                <S.SubjectSection>
                  <Image src={articleIcon} alt="Assunto" />
                </S.SubjectSection>
              </Link>
              <S.SubjectSection onClick={() => dispatch(setShowShare(true))}>
                <Image src={shareIcon} alt="Compartilhar" />
              </S.SubjectSection>
            </S.WrapperAction>
          </S.TextWrapper>
        </S.WrapperContent>

        <Link href={`/post/${post.id}`} style={{ textDecoration: 'none' }}>
          {image && (
            <S.ImgPost>
              <S.Gradient />
              {/* <S.Gradient2 /> */}
              <img id="banner" src={image} alt="Assunto" />
            </S.ImgPost>
          )}
        </Link>
      </S.WrapperImage>
    </S.Wrapper>
  );
};

export default SlideCarouselDesktop;
