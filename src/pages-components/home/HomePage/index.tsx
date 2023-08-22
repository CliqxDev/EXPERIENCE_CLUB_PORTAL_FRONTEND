import { useEffect } from 'react';
import { forEach } from 'lodash';
import Accompany from 'pages-components/home/Accompany';
import CarouselSlide from 'pages-components/home/Carousel';
import Explore from 'pages-components/home/Explore';
import Formats from 'pages-components/home/Formats';
import Header from 'components/Header';
import Newsletter from 'pages-components/home/Newsletter';
import Trails from 'pages-components/home/Trails';

import { useAppDispatch } from 'hook/store';
import { category, columnists, media, posts } from 'flux/modules/post/actions';
import { usePosts } from 'hook/selectors/postHooks';
import * as S from './styles';

const HomePage = () => {
  const { data: postsData } = usePosts();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (postsData) {
      if (postsData.length) {
        forEach(postsData, post =>
          dispatch(media.request(post.featured_media))
        );
      }
    }
  }, [postsData]);

  useEffect(() => {
    if (postsData) {
      if (postsData.length) {
        forEach(postsData, post =>
          dispatch(media.request(post.featured_media))
        );
      }
    }
  }, [postsData]);

  useEffect(() => {
    dispatch(posts.request());
    dispatch(category.request());
    dispatch(columnists.request());
  }, [dispatch]);
  return (
    <S.Wrapper>
      <Header />
      <CarouselSlide />
      <Trails />
      <Accompany />
      <Newsletter />
      <Explore />
      <Formats />
    </S.Wrapper>
  );
};
export default HomePage;
