import { IRequest } from 'models/iRequest';
import { ClientInfo } from '../client/types';

export interface ChangePasswordRequest {
  old_password: string;
  new_password: string;
}

export interface Auth {
  clientInfo: IRequest<ClientInfo>;
  changePassword: IRequest<undefined>;
  sigIn: IRequest<SigInResponse>;
}

export type SigInRequest = {
  email: string;
  password: string;
};

export type RecoveryPasswordRequest = {
  password: string;
};

export interface SigInResponse {
  access: string;
  refresh: string;
}
