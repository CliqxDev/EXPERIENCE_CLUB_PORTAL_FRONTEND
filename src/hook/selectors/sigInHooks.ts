import { SigInResponse } from 'flux/modules/sigIn/types';
import { useSelector } from 'flux/selector';
import { RootState } from 'flux/store';
import { IRequest } from 'models/iRequest';

export const useSigIn = (): IRequest<SigInResponse> =>
  useSelector((state: RootState) => state.sigIn);
