import { IRequest } from 'models/iRequest';

export interface AddressViaCepResponse {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}

export type Address = {
  id?: number;
  cep?: string;
  address?: string;
  number?: string;
  district?: string;
  complement: string;
  state?: string;
  city?: string;
  user?: number;
};

export interface AddressReducerType {
  updateClientAddress: IRequest<Address>;
  createClientAddress: IRequest<Address>;
  viaCep: IRequest<AddressViaCepResponse>;
}
