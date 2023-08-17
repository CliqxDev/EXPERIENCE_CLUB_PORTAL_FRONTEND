import { AddressViaCepResponse } from 'flux/modules/cep/types';
import { useSelector } from 'flux/selector';
import { RootState } from 'flux/store';
import { IRequest } from 'models/iRequest';

export const useAddress = (): IRequest<AddressViaCepResponse> =>
  useSelector((state: RootState) => state.cep);
