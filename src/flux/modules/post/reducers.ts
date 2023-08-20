import { Action, createReducer } from 'typesafe-actions';
import { RequestStatus } from 'models/iRequest';
import { media as mediaAction, posts } from './actions';
import { Post } from './types';

const initialState: Post = {
  general: { data: null, message: null, status: RequestStatus.idle },
  media: { data: null, message: null, status: RequestStatus.idle }
};

const postReducer = createReducer<Post, Action>(initialState)
  .handleAction(posts.request, state => ({
    ...state,
    general: {
      data: null,
      message: null,
      status: RequestStatus.fetching
    }
  }))
  .handleAction(posts.success, (state, action) => ({
    ...state,
    general: {
      data: action.payload,
      message: null,
      status: RequestStatus.success
    }
  }))
  .handleAction(posts.failure, (state, action) => ({
    ...state,
    general: {
      data: null,
      message: action.payload.message,
      status: RequestStatus.error
    }
  }))
  .handleAction(mediaAction.request, state => ({
    ...state,
    media: {
      data: null,
      message: null,
      status: RequestStatus.fetching
    }
  }))
  .handleAction(mediaAction.success, (state, action) => ({
    ...state,
    media: {
      data: { ...state.media.data, ...action.payload },
      message: null,
      status: RequestStatus.success
    }
  }))
  .handleAction(mediaAction.failure, (state, action) => ({
    ...state,
    media: {
      data: null,
      message: action.payload.message,
      status: RequestStatus.error
    }
  }));

export default postReducer;
