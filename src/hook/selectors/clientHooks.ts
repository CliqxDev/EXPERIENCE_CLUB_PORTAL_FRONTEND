import {
  Address,
  AssignNewsletterResponse,
  ClientInfoResponse,
  ClientPersonalDataResponse
} from 'flux/modules/client/types';
import { useSelector } from 'flux/selector';
import { RootState } from 'flux/store';
import { IRequest } from 'models/iRequest';

export const useClientInfo = (): IRequest<ClientInfoResponse> =>
  useSelector((state: RootState) => state.client.clientInfo);

export const useCreateClient = (): IRequest<ClientPersonalDataResponse> =>
  useSelector((state: RootState) => state.client.createClient);

export const useUpdateClient = (): IRequest<ClientPersonalDataResponse> =>
  useSelector((state: RootState) => state.client.updateClient);

export const useNewsLetter = (): IRequest<AssignNewsletterResponse> =>
  useSelector((state: RootState) => state.client.newsLetter);

export const useUpdateClientAddress = (): IRequest<Address> =>
  useSelector((state: RootState) => state.client.updateClientAddress);

export const useCreateClientAddress = (): IRequest<Address> =>
  useSelector((state: RootState) => state.client.createClientAddress);
