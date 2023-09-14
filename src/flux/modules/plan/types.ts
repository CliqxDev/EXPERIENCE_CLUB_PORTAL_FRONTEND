import { IRequest } from 'models/iRequest';

export type Plan = {
  id: number;
  link: string;
  name: string;
  price: number;
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

export type PlanRequest = {
  type: number;
  qtd_members: number;
};

export interface SubscriptionUser {
  qtd_members: number;
  subscription_plan: number;
}

export interface SubscriptionUserRequest {
  qtd_members: number;
  subscription_plan: number;
}

export interface CompaniesRequest {
  cnpj: string;
  company_name: string;
  qtd_members: number;
}

export interface CompaniesResponse {
  id: number;
  cnpj: string;
  company_name: string;
  qtd_members: number;
}

export type PlanResponse = Plan[];

export type Plans = {
  plans: IRequest<PlanResponse>;
  selectedPlan: IRequest<PlanResponse>;
  subscriptionUserPlan: IRequest<SubscriptionUser>;
  companiesUser: IRequest<CompaniesResponse>;
};
