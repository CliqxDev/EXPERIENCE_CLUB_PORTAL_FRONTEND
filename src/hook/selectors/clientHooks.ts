import {
  AssignNewsletterResponse,
  ClientCheckoutIndividualInfo,
  ClientDeleteResponse,
  ClientInfo
} from 'flux/modules/client/types';
import { useSelector } from 'flux/selector';
import { RootState } from 'flux/store';
import { IRequest } from 'models/iRequest';

export const useCreateClient = (): IRequest<ClientInfo> =>
  useSelector((state: RootState) => state.client.createClient);

export const useUpdateClient = (): IRequest<ClientInfo> =>
  useSelector((state: RootState) => state.client.updateClient);

export const useNewsLetter = (): IRequest<AssignNewsletterResponse> =>
  useSelector((state: RootState) => state.client.newsLetter);

export const useDeleteClient = (): IRequest<ClientDeleteResponse> =>
  useSelector((state: RootState) => state.client.deleteClient);

export const useCheckoutIndividualClient = (): IRequest<ClientCheckoutIndividualInfo> =>
  useSelector((state: RootState) => state.client.checkoutIndividual);
