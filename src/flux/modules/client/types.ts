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
  remaining_vacancy_count: number;
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

export type ClientCheckoutIndividualInfo = {
  id: number;
  link: string;
  name: string;
  price: string;
  type: number;
  period: number;
  description: string;
  is_active: boolean;
  qtd_gifts: number;
  qtd_min_members: number;
  qtd_max_members: number;
  qtd_max_installments: number;
  created_at: string;
  updated_at: string;
};

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
  checkoutIndividual: IRequest<ClientCheckoutIndividualInfo>;
}

export interface PostReadRequest {
  post_external_id: string;
}
