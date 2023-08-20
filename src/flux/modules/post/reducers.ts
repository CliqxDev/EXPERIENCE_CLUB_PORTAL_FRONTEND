import { Action, createReducer } from 'typesafe-actions';
import { RequestStatus } from 'models/iRequest';
import { posts } from './actions';
import { Post } from './types';

const initialState: Post = {
  general: { data: null, message: null, status: RequestStatus.idle }
};

const clientInfoReducer = createReducer<Post, Action>(initialState)
  .handleAction(posts.request, state => ({
    ...state,
    general: {
      data: null,
      message: null,
      status: RequestStatus.fetching
    }
  }))
  .handleAction(posts.success, state => ({
    ...state,
    general: {
      data: null,
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
  }));

export default clientInfoReducer;
