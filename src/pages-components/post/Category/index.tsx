/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import parse from 'html-react-parser';

import { findIndex, forEach, isEmpty, uniqueId } from 'lodash';
import Link from 'next/link';
import { useParams } from 'next/navigation';

import {
  useMediaCategory,
  useMedia,
  usePostCategories,
  useShowShare
} from 'hook/selectors/postHooks';
import { sanitizeTextByMaxLength } from 'utils/formatString';
import { useAppDispatch } from 'hook/store';
import {
  clearMediaCategory,
  clearPostCategory,
  mediaCategory,
  postByCategories,
  setShowShare
} from 'flux/modules/post/actions';
import { Card, findCategoryById } from 'models/post';
import { RequestStatus } from 'models/iRequest';
import { SkeletonTrailList } from 'components/ui/Skeleton';
import { ItemPostCategoryResponse, PostItem } from 'flux/modules/post/types';
import ShareDialog from 'components/ShareDialog';
import * as S from './styles';
import PostHeader from '../PostHeader';
import HeaderDesktopPost from '../PostHeader/Desktop';

const Category = () => {
  const { id }: any = useParams();
  const dispatch = useAppDispatch();
  const showShare = useShowShare();

  const { data: posts, status: statusCategory } = usePostCategories();
  const { data: dataMedia, status: statusMedia } = useMediaCategory();
  const { data: listMedia, status: statusListMedia } = useMedia();

  const [cardData, setCardData] = useState<Card[]>([]);
  const [page, setPage] = useState(1);
  const [postCart, setPostCard] = useState<ItemPostCategoryResponse>({
    data: [],
    pageNumber: 0
  });

  const isLoading =
    statusCategory === RequestStatus.fetching ||
    statusMedia === RequestStatus.fetching;

  const isFullMedia =
    dataMedia && Object.keys(dataMedia).length === posts?.length;

  useEffect(() => {
    if (posts === null || posts.length === 0) {
      setCardData([]);
      setPostCard({
        data: [],
        pageNumber: 0
      });
      dispatch(postByCategories.request({ category: id, page: 1 }));
    }

    if (posts) {
      if (posts?.length > 0) {
        const idx = findIndex(posts, ['pageNumber', page]);
        if (idx !== -1) {
          setPostCard({
            pageNumber: page,
            data: posts[idx].data
          });
        }
      }
    }
  }, [posts]);

  const mediaSelect = (post: PostItem) => {
    if (!isEmpty(post)) {
      if (!isEmpty(dataMedia)) {
        const mediaPost = dataMedia[post.featured_media];
        if (mediaPost) {
          return dataMedia[post.featured_media].media_details.sizes.thumbnail
            ?.source_url;
        }
      }

      if (!isEmpty(listMedia)) {
        const mediaPost = listMedia[post.featured_media];
        if (mediaPost) {
          return listMedia[post.featured_media].media_details.sizes.medium
            ?.source_url;
        }
      }
    }
    return '';
  };

  useEffect(() => {
    if (postCart) {
      if (postCart?.data.length && !isEmpty(dataMedia)) {
        if (
          Object.keys(dataMedia).length === postCart?.data.length &&
          page === postCart.pageNumber
        ) {
          const newCardData: Card[] = [];
          forEach(postCart.data, post => {
            newCardData.push({
              id: post.id,
              title: post.title.rendered,
              imgSrc: mediaSelect(post),
              description: sanitizeTextByMaxLength(post.excerpt.rendered),
              categoryId: parseInt(id, 10)
            });
          });
          setCardData([]);
          setCardData([...newCardData]);
        }
      }
    }
  }, [postCart, dataMedia]);

  useEffect(() => {
    if (postCart) {
      if (postCart.data.length && !isFullMedia) {
        forEach(postCart.data, post =>
          dispatch(mediaCategory.request(post.featured_media))
        );
      }
    }
  }, [postCart]);

  useEffect(() => {
    dispatch(clearMediaCategory());
    dispatch(clearPostCategory());
    setPostCard({
      data: [],
      pageNumber: 0
    });

    return () => {
      setPostCard({
        data: [],
        pageNumber: 0
      });
      dispatch(clearMediaCategory());
      dispatch(clearPostCategory());
    };
  }, []);

  const handleShowMore = () => {
    setPostCard({
      data: [],
      pageNumber: 0
    });
    const newPage = page + 1;
    setPage(newPage);
    dispatch(clearMediaCategory());

    dispatch(postByCategories.request({ category: id, page: newPage }));
  };
  return (
    <S.Wrapper>
      <S.HeaderWrapper
        backgroundcolor={findCategoryById(parseInt(id, 10)).color}
      >
        <S.Header backgroundcolor={findCategoryById(parseInt(id, 10)).color}>
          <PostHeader />
          <HeaderDesktopPost />
        </S.Header>
      </S.HeaderWrapper>
      <S.TitleWrapper>
        <S.DesktopTitle color={findCategoryById(parseInt(id, 10)).color}>
          <S.Title>Acompanhe todas as tendências do</S.Title>
          <h2>{findCategoryById(parseInt(id, 10)).label}</h2>
        </S.DesktopTitle>
        <S.Gradient />
      </S.TitleWrapper>
      <S.Content>
        <S.Text>
          Explore
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_3902_41366"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="24"
              height="24"
            >
              <rect width="24" height="24" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_3902_41366)">
              <path
                d="M13.5004 12.8269V19.5H10.5005V12.8269L3.96973 4.5H20.0407L13.5004 12.8269ZM12.0004 12.3L16.9504 5.99997H7.05043L12.0004 12.3Z"
                fill={findCategoryById(parseInt(id, 10)).color}
              />
            </g>
          </svg>
        </S.Text>
        {(isLoading || cardData.length === 0) && <SkeletonTrailList />}
        <S.CardWrapper>
          {cardData.map(item => (
            <S.Card key={uniqueId()}>
              <Link
                href={`/post/${item.id}`}
                style={{ textDecoration: 'none' }}
              >
                <S.CardTitle>{parse(item.title)}</S.CardTitle>
                <S.Row>
                  <S.ImageWrapper>
                    <img src={item.imgSrc} alt="card imagem" />
                  </S.ImageWrapper>
                  <S.Subtitle
                    dangerouslySetInnerHTML={{
                      __html: item.description
                    }}
                  />
                </S.Row>
              </Link>
              <S.CardCategoryWrapper>
                <S.CardCategory>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="mask0_2582_25402"
                      x="0"
                      y="0"
                      width="24"
                      height="24"
                    >
                      <rect width="24" height="24" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_2582_25402)">
                      <path
                        d="M5.61538 20C5.17114 20 4.79086 19.8418 4.47453 19.5255C4.15818 19.2091 4 18.8289 4 18.3846V5.61537C4 5.17114 4.15818 4.79086 4.47453 4.47452C4.79086 4.15817 5.17114 4 5.61538 4H18.3846C18.8289 4 19.2091 4.15817 19.5255 4.47452C19.8418 4.79086 20 5.17114 20 5.61537V18.3846C20 18.8289 19.8418 19.2091 19.5255 19.5255C19.2091 19.8418 18.8289 20 18.3846 20H5.61538ZM5.61538 19H18.3846C18.5641 19 18.7115 18.9423 18.8269 18.8269C18.9423 18.7115 19 18.5641 19 18.3846V7H5V18.3846C5 18.5641 5.05769 18.7115 5.17308 18.8269C5.28846 18.9423 5.43589 19 5.61538 19ZM7.5 11.5C7.35833 11.5 7.23958 11.452 7.14375 11.3561C7.04792 11.2601 7 11.1412 7 10.9993C7 10.8575 7.04792 10.7388 7.14375 10.6433C7.23958 10.5478 7.35833 10.5 7.5 10.5H16.5C16.6417 10.5 16.7604 10.548 16.8562 10.6439C16.9521 10.7399 17 10.8588 17 11.0007C17 11.1425 16.9521 11.2612 16.8562 11.3567C16.7604 11.4522 16.6417 11.5 16.5 11.5H7.5ZM7.5 15.5C7.35833 15.5 7.23958 15.452 7.14375 15.3561C7.04792 15.2601 7 15.1412 7 14.9993C7 14.8575 7.04792 14.7388 7.14375 14.6433C7.23958 14.5478 7.35833 14.5 7.5 14.5H12.5C12.6417 14.5 12.7604 14.548 12.8562 14.644C12.9521 14.7399 13 14.8588 13 15.0007C13 15.1425 12.9521 15.2612 12.8562 15.3567C12.7604 15.4522 12.6417 15.5 12.5 15.5H7.5Z"
                        fill="#254CE5"
                      />
                    </g>
                  </svg>
                  {findCategoryById(item.categoryId).label}
                </S.CardCategory>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => dispatch(setShowShare(item.id))}
                >
                  <mask
                    id="mask0_2582_25361"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                  >
                    <rect width="24" height="24" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_2582_25361)">
                    <path
                      d="M17.7511 21.5C16.9875 21.5 16.3381 21.2326 15.8029 20.6979C15.2676 20.1632 15 19.5139 15 18.75C15 18.6251 15.0099 18.4959 15.0298 18.3621C15.0497 18.2284 15.0795 18.1051 15.1192 17.9923L7.72305 13.6615C7.45895 13.9243 7.15831 14.1298 6.82113 14.2779C6.48394 14.4259 6.12689 14.5 5.74997 14.5C4.98609 14.5 4.33679 14.2327 3.80207 13.6982C3.26736 13.1637 3 12.5147 3 11.7511C3 10.9875 3.26736 10.3381 3.80207 9.80288C4.33679 9.26763 4.98609 9 5.74997 9C6.12689 9 6.48394 9.07403 6.82113 9.2221C7.15831 9.37018 7.45895 9.57563 7.72305 9.83845L15.1192 5.50768C15.0795 5.39486 15.0497 5.27158 15.0298 5.13783C15.0099 5.00409 15 4.87481 15 4.74997C15 3.98609 15.2673 3.33679 15.8018 2.80207C16.3363 2.26736 16.9853 2 17.7489 2C18.5124 2 19.1618 2.26725 19.6971 2.80175C20.2323 3.33625 20.5 3.98528 20.5 4.74885C20.5 5.51242 20.2326 6.16183 19.6979 6.69708C19.1632 7.23233 18.5139 7.49995 17.75 7.49995C17.3731 7.49995 17.016 7.42592 16.6788 7.27785C16.3416 7.12977 16.041 6.92432 15.7769 6.6615L8.38073 10.9923C8.42048 11.1051 8.45028 11.2282 8.47015 11.3615C8.49002 11.4947 8.49995 11.6236 8.49995 11.748C8.49995 11.8724 8.49002 12.0019 8.47015 12.1365C8.45028 12.2711 8.42048 12.3949 8.38073 12.5077L15.7769 16.8385C16.041 16.5756 16.3416 16.3702 16.6788 16.2221C17.016 16.074 17.3731 16 17.75 16C18.5139 16 19.1632 16.2673 19.6979 16.8018C20.2326 17.3363 20.5 17.9853 20.5 18.7489C20.5 19.5124 20.2327 20.1618 19.6982 20.6971C19.1637 21.2323 18.5147 21.5 17.7511 21.5ZM17.75 6C18.0974 6 18.3926 5.87853 18.6356 5.63558C18.8785 5.39261 19 5.09741 19 4.74997C19 4.40254 18.8785 4.10734 18.6356 3.86437C18.3926 3.62142 18.0974 3.49995 17.75 3.49995C17.4025 3.49995 17.1073 3.62142 16.8644 3.86437C16.6214 4.10734 16.5 4.40254 16.5 4.74997C16.5 5.09741 16.6214 5.39261 16.8644 5.63558C17.1073 5.87853 17.4025 6 17.75 6ZM5.74997 13C6.09741 13 6.39261 12.8785 6.63558 12.6356C6.87853 12.3926 7 12.0974 7 11.75C7 11.4025 6.87853 11.1073 6.63558 10.8644C6.39261 10.6214 6.09741 10.5 5.74997 10.5C5.40254 10.5 5.10734 10.6214 4.86438 10.8644C4.62143 11.1073 4.49995 11.4025 4.49995 11.75C4.49995 12.0974 4.62143 12.3926 4.86438 12.6356C5.10734 12.8785 5.40254 13 5.74997 13ZM17.75 20C18.0974 20 18.3926 19.8785 18.6356 19.6356C18.8785 19.3926 19 19.0974 19 18.75C19 18.4025 18.8785 18.1073 18.6356 17.8644C18.3926 17.6214 18.0974 17.5 17.75 17.5C17.4025 17.5 17.1073 17.6214 16.8644 17.8644C16.6214 18.1073 16.5 18.4025 16.5 18.75C16.5 19.0974 16.6214 19.3926 16.8644 19.6356C17.1073 19.8785 17.4025 20 17.75 20Z"
                      fill="#1A1A19"
                    />
                  </g>
                </svg>
              </S.CardCategoryWrapper>
            </S.Card>
          ))}
        </S.CardWrapper>
      </S.Content>
      <ShareDialog id={showShare} onClose={() => dispatch(setShowShare(''))} />
    </S.Wrapper>
  );
};
export default Category;
