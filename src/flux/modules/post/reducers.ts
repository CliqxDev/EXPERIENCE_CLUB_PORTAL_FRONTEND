import { Action, createReducer } from 'typesafe-actions';
import { RequestStatus } from 'models/iRequest';
import {
  media as mediaAction,
  posts,
  columnists as columnistsAction,
  mediaById as mediaByIdAction,
  mediaCategory as mediaCategoryAction,
  postById as postByIdAction,
  postSearch as postSearchAction,
  clearPostById,
  setShowShare,
  postByCategories,
  clearPostCategory,
  clearMediaCategory
} from './actions';
import { Post } from './types';

const initialState: Post = {
  general: { data: null, message: null, status: RequestStatus.idle },
  mediaById: { data: null, message: null, status: RequestStatus.idle },
  mediaCategory: { data: null, message: null, status: RequestStatus.idle },
  columnists: { data: null, message: null, status: RequestStatus.idle },
  postById: { data: null, message: null, status: RequestStatus.idle },
  postSearch: { data: null, message: null, status: RequestStatus.idle },
  postCategories: { data: null, message: null, status: RequestStatus.idle },
  media: { data: null, message: null, status: RequestStatus.idle },
  showShare: ''
};

const postReducer = createReducer<Post, Action>(initialState)
  .handleAction(postSearchAction.request, state => ({
    ...state,
    postSearch: {
      data: null,
      message: null,
      status: RequestStatus.fetching
    }
  }))
  .handleAction(postSearchAction.success, (state, action) => ({
    ...state,
    postSearch: {
      data: action.payload,
      message: null,
      status: RequestStatus.success
    }
  }))
  .handleAction(postSearchAction.failure, state => ({
    ...state,
    postSearch: {
      data: null,
      message: null,
      status: RequestStatus.error
    }
  }))
  .handleAction(mediaCategoryAction.request, state => ({
    ...state,
    mediaCategory: {
      data: null,
      message: null,
      status: RequestStatus.fetching
    }
  }))
  .handleAction(mediaCategoryAction.success, (state, action) => ({
    ...state,
    mediaCategory: {
      data: { ...state.mediaCategory.data, ...action.payload },
      message: null,
      status: RequestStatus.success
    }
  }))
  .handleAction(mediaCategoryAction.failure, (state, action) => ({
    ...state,
    mediaCategory: {
      data: null,
      message: action.payload.message,
      status: RequestStatus.error
    }
  }))
  .handleAction(postByCategories.request, state => ({
    ...state,
    postCategories: {
      data: state.postCategories.data,
      message: null,
      status: RequestStatus.fetching
    }
  }))
  .handleAction(postByCategories.success, (state: any, action) => {
    let newState = [...action.payload];
    if (state.postCategories) {
      if (state.postCategories.data) {
        newState = [...state.postCategories.data, ...action.payload];
      }
    }

    return {
      ...state,
      postCategories: {
        data: newState,
        message: null,
        status: RequestStatus.success
      }
    };
  })
  .handleAction(postByCategories.failure, state => ({
    ...state,
    postCategories: {
      data: state.postCategories.data,
      message: null,
      status: RequestStatus.error
    }
  }))
  .handleAction(mediaByIdAction.request, state => ({
    ...state,
    mediaById: {
      data: null,
      message: null,
      status: RequestStatus.fetching
    }
  }))
  .handleAction(mediaByIdAction.success, (state, action) => ({
    ...state,
    mediaById: {
      data: action.payload,
      message: null,
      status: RequestStatus.success
    }
  }))
  .handleAction(mediaByIdAction.failure, state => ({
    ...state,
    mediaById: {
      data: null,
      message: null,
      status: RequestStatus.error
    }
  }))
  .handleAction(postByIdAction.request, state => ({
    ...state,
    postById: {
      data: null,
      message: null,
      status: RequestStatus.fetching
    }
  }))
  .handleAction(postByIdAction.success, (state, action) => ({
    ...state,
    postById: {
      data: action.payload,
      message: null,
      status: RequestStatus.success
    }
  }))
  .handleAction(postByIdAction.failure, state => ({
    ...state,
    postById: {
      data: null,
      message: null,
      status: RequestStatus.error
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
  .handleAction(columnistsAction.success, (state, action) => ({
    ...state,
    columnists: {
      data: action.payload,
      message: null,
      status: RequestStatus.success
    }
  }))
  .handleAction(columnistsAction.failure, state => ({
    ...state,
    columnists: {
      data: null,
      message: null,
      status: RequestStatus.error
    }
  }))
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
  }))
  .handleAction(clearPostById, state => ({
    ...state,
    postById: {
      data: null,
      message: null,
      status: RequestStatus.idle
    }
  }))
  .handleAction(clearPostCategory, state => ({
    ...state,
    postCategories: {
      data: null,
      message: null,
      status: RequestStatus.idle
    }
  }))
  .handleAction(clearMediaCategory, state => ({
    ...state,
    mediaCategory: {
      data: null,
      message: null,
      status: RequestStatus.idle
    }
  }))
  .handleAction(setShowShare, (state, action) => ({
    ...state,
    showShare: action.payload
  }));

export default postReducer;
