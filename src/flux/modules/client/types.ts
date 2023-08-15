import { IRequest } from 'models/iRequest';

export interface ClientInfoResponse {
  id: number;
  address?: string;
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

export interface ClientPersonalDataPayload {
  password: string;
  name: string;
  email: string;
  phone?: string;
  date_birth?: string;
  role?: string;
}

type Address = {
  id: number;
  cep: string;
  address: string;
  number: string;
  district: string;
  complement: string;
  state: string;
  city: string;
  user: number;
};

export interface ClientPersonalDataResponse {
  id: number;
  address?: Address;
  qtd_posts_read_month: number;
  last_login?: string;
  name: string;
  email: string;
  phone: string;
  date_birth: string;
  role: string;
  is_active: boolean;
  is_premium: boolean;
  is_admin: boolean;
}

export interface AssignNewsletterRequest {
  email: string;
  name: string;
}

export interface AssignNewsletterResponse {
  success: string;
}

export interface Client {
  clientInfo: IRequest<ClientInfoResponse>;
  createClient: IRequest<ClientPersonalDataResponse>;
}
