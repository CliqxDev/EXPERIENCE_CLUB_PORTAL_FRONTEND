import {
  ColumnistsResponse,
  MediaResponse,
  PostCategoryResponse,
  PostItem,
  PostResponse
} from 'flux/modules/post/types';
import { useSelector } from 'flux/selector';
import { RootState } from 'flux/store';
import { IRequest } from 'models/iRequest';

export const usePosts = (): IRequest<PostResponse> =>
  useSelector((state: RootState) => state.post.general);

export const useMedia = (): IRequest<MediaResponse> =>
  useSelector((state: RootState) => state.post.media);

export const useColumnist = (): IRequest<ColumnistsResponse> =>
  useSelector((state: RootState) => state.post.columnists);

export const usePostById = (): IRequest<PostItem> =>
  useSelector((state: RootState) => state.post.postById);

export const useMediaById = (): IRequest<MediaResponse> =>
  useSelector((state: RootState) => state.post.mediaById);

export const useShowShare = (): number | string =>
  useSelector((state: RootState) => state.post.showShare);

export const usePostSearch = (): IRequest<PostResponse> =>
  useSelector((state: RootState) => state.post.postSearch);

export const usePostCategories = (): IRequest<PostCategoryResponse> =>
  useSelector((state: RootState) => state.post.postCategories);

export const useMediaCategory = (): IRequest<MediaResponse> =>
  useSelector((state: RootState) => state.post.mediaCategory);
