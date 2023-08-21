import { Action, createReducer } from 'typesafe-actions';
import { RequestStatus } from 'models/iRequest';
import {
  media as mediaAction,
  posts,
  category as categoryAction,
  columnists as columnistsAction
} from './actions';
import { Post } from './types';

const initialState: Post = {
  general: { data: null, message: null, status: RequestStatus.idle },
  category: { data: null, message: null, status: RequestStatus.idle },
  columnists: { data: null, message: null, status: RequestStatus.idle },
  media: { data: null, message: null, status: RequestStatus.idle }
};

const postReducer = createReducer<Post, Action>(initialState)
  .handleAction(columnistsAction.request, state => ({
    ...state,
    columnists: {
      data: null,
      message: null,
      status: RequestStatus.fetching
    }
  }))
  .handleAction(columnistsAction.success, (state, action) => ({
    ...state,
    columnists: {
      data: action.payload,
      message: null,
      status: RequestStatus.success
    }
  }))
  .handleAction(columnistsAction.request, state => ({
    ...state,
    columnists: {
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
  }))
  .handleAction(categoryAction.request, state => ({
    ...state,
    category: {
      data: null,
      message: null,
      status: RequestStatus.fetching
    }
  }))
  .handleAction(categoryAction.success, (state, action) => ({
    ...state,
    category: {
      data: action.payload,
      message: null,
      status: RequestStatus.success
    }
  }))
  .handleAction(categoryAction.failure, (state, action) => ({
    ...state,
    category: {
      data: null,
      message: action.payload.message,
      status: RequestStatus.error
    }
  }));

export default postReducer;
