import { PostResponse } from 'flux/modules/post/types';
import { useSelector } from 'flux/selector';
import { RootState } from 'flux/store';
import { IRequest } from 'models/iRequest';

export const usePosts = (): IRequest<PostResponse> =>
  useSelector((state: RootState) => state.post.general);
