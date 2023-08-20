import {
  RecoveryPasswordSendEmailResponse,
  SigInResponse
} from 'flux/modules/auth/types';
import { ClientInfo } from 'flux/modules/client/types';
import { useSelector } from 'flux/selector';
import { RootState } from 'flux/store';
import { IRequest } from 'models/iRequest';

export const useSigIn = (): IRequest<SigInResponse> =>
  useSelector((state: RootState) => state.auth.sigIn);

export const useChangePassword = (): IRequest<undefined> =>
  useSelector((state: RootState) => state.auth.changePassword);

export const useClientInfo = (): IRequest<ClientInfo> =>
  useSelector((state: RootState) => state.auth.clientInfo);

export const useRecoveryPasswordSendEmail =
  (): IRequest<RecoveryPasswordSendEmailResponse> =>
    useSelector((state: RootState) => state.auth.recoveryPasswordSendEmail);
