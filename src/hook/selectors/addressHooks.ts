import { Address, AddressViaCepResponse } from 'flux/modules/address/types';
import { useSelector } from 'flux/selector';
import { RootState } from 'flux/store';
import { IRequest } from 'models/iRequest';

export const useAddress = (): IRequest<AddressViaCepResponse> =>
  useSelector((state: RootState) => state.address.viaCep);

export const useUpdateClientAddress = (): IRequest<Address> =>
  useSelector((state: RootState) => state.address.updateClientAddress);

export const useCreateClientAddress = (): IRequest<Address> =>
  useSelector((state: RootState) => state.address.createClientAddress);
