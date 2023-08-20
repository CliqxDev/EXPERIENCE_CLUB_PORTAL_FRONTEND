import { IRequest } from 'models/iRequest';
import { ClientInfo } from '../client/types';

export interface ChangePasswordRequest {
  old_password: string;
  new_password: string;
}

export type SigInRequest = {
  email: string;
  password: string;
};

export type ResetPasswordRequest = {
  password: string;
};

export type ResetPasswordResponse = {
  message: string;
};

export type RecoveryPasswordSendEmailRequest = {
  email: string;
};

export type RecoveryPasswordSendEmailResponse = {
  message: string;
};

export interface SigInResponse {
  access: string;
  refresh: string;
}

export interface Auth {
  clientInfo: IRequest<ClientInfo>;
  changePassword: IRequest<undefined>;
  sigIn: IRequest<SigInResponse>;
  recoveryPasswordSendEmail: IRequest<RecoveryPasswordSendEmailRequest>;
  resetPassword: IRequest<ResetPasswordResponse>;
}
