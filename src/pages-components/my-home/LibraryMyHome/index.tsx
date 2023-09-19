import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { forEach, isEmpty, uniqueId } from 'lodash';
import { useClientInfo } from 'hook/selectors/authHooks';
import { Card, findCategoryById } from 'models/post';
import { useAppDispatch } from 'hook/store';
import { usePosts, useMedia } from 'hook/selectors/postHooks';
import { sanitizeTextByMaxLength } from 'utils/formatString';
import { posts, media } from 'flux/modules/post/actions';
import { PostItem } from 'flux/modules/post/types';
import * as S from './styles';
import employeesIcon from '../../../../public/img/employees-icon-blue.svg';
import shareIcon from '../../../../public/img/share-icon-blue.svg';
import readIcon from '../../../../public/img/read-icon.svg';
import arrowRight from '../../../../public/img/arrow-right-blue.svg';

const LibraryMyHome = () => {
  const { data } = useClientInfo();
  const { data: postsData } = usePosts();
  const { data: dataMedia } = useMedia();

  const dispatch = useAppDispatch();

  const [cardData, setCardData] = useState<Card[]>([]);

  const userIsAdmin = data?.is_admin;

  const isFullMedia =
    dataMedia && Object.keys(dataMedia).length === postsData?.length;

  useEffect(() => {
    if (postsData) {
      if (postsData.length && !isFullMedia) {
        forEach(postsData, post =>
          dispatch(media.request(post.featured_media))
        );
      }
    }
  }, [postsData]);

  useEffect(() => {
    if (postsData === null) {
      dispatch(posts.request());
    }
  }, [postsData]);

  const mediaSelect = (post: PostItem) => {
    if (!isEmpty(dataMedia)) {
      const mediaPost = dataMedia[post.featured_media];
      if (mediaPost) {
        return dataMedia[post.featured_media].media_details.sizes.medium
          ?.source_url;
      }
    }
    return '';
  };

  useEffect(() => {
    if (!isEmpty(postsData) && !isEmpty(dataMedia)) {
      if (Object.keys(dataMedia).length === postsData?.length) {
        const newCardData: Card[] = [];
        forEach(postsData.slice(5), post => {
          newCardData.push({
            id: post.id,
            title: sanitizeTextByMaxLength(post.title.rendered, 65),
            imgSrc: mediaSelect(post),
            description: sanitizeTextByMaxLength(post.excerpt.rendered),
            categoryId: post.categories[0]
          });
        });
        setCardData(newCardData);
      }
    }
  }, [postsData, dataMedia]);

  return (
    <S.Wrapper>
      {userIsAdmin === true && (
        <S.AdminUser>
          <S.Admin>
            <Link
              href="/employees"
              style={{ textDecoration: 'none', width: '100%' }}
            >
              <S.CardAdminUser>
                <Image src={employeesIcon} alt="Colaboradores" />
                <p style={{ marginTop: '8px' }}>Colaboradores</p>
              </S.CardAdminUser>
            </Link>
            <S.CardAdminUser style={{ marginLeft: 8, width: '100%' }}>
              <Image src={shareIcon} alt="Colaboradores" />
              <p>Compartilhados</p>
            </S.CardAdminUser>
          </S.Admin>
        </S.AdminUser>
      )}

      <S.TitleTrailWrapper>
        <S.TitleTrail>Biblioteca</S.TitleTrail>
      </S.TitleTrailWrapper>
      <S.LibraryList>
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
                    {findCategoryById(item.categoryId).label}
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
      </S.LibraryList>

      <S.ReadButtons>
        <S.Button variant="blue400" type="button" style={{ marginRight: 16 }}>
          Ler Depois
        </S.Button>
        <S.Button variant="blue500" type="button">
          Favoritos
        </S.Button>
      </S.ReadButtons>
    </S.Wrapper>
  );
};

export default LibraryMyHome;
