import { IRequest } from 'models/iRequest';

export interface PostResponse {
  text: string;
}

export interface Post {
  general: IRequest<PostResponse>;
}
