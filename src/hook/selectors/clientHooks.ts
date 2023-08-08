import { ClientInfoResponse } from 'flux/modules/client/types';
import { useSelector } from 'flux/selector';
import { RootState } from 'flux/store';
import { IRequest } from 'models/iRequest';

export const useClientInfo = (): IRequest<ClientInfoResponse> =>
  useSelector((state: RootState) => state.client);
