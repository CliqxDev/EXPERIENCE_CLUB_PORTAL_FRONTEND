import { IRequest } from 'models/iRequest';
import { Address } from '../address/types';

export interface ClientInfo {
  id: number;
  address?: Address;
  qtd_posts_read_month: number;
  last_login: string;
  name: string;
  email: string;
  phone: string;
  date_birth?: string;
  role: string;
  is_active: boolean;
  is_premium: boolean;
  is_admin: boolean;
}

export interface ClientInfoRequest {
  id?: number;
  password: string;
  name: string;
  email: string;
  phone?: string;
  date_birth?: string;
  role?: string;
}

export interface ChangePasswordRequest {
  old_password: string;
  new_password: string;
}

export interface AssignNewsletterRequest {
  email: string;
  name: string;
}

export interface AssignNewsletterResponse {
  success: string | null;
}

export interface ClientDeleteResponse {
  success: string | null;
}

export type AssignNewsletterResponseAPI = {
  data: AssignNewsletterResponse;
};

export interface Client {
  createClient: IRequest<ClientInfo>;
  updateClient: IRequest<ClientInfo>;
  deleteClient: IRequest<ClientDeleteResponse>;
  newsLetter: IRequest<AssignNewsletterResponse>;
}
