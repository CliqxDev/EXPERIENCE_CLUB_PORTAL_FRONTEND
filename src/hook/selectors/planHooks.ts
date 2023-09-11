import { PlanResponse } from 'flux/modules/plan/types';
import { useSelector } from 'flux/selector';
import { RootState } from 'flux/store';
import { IRequest } from 'models/iRequest';

export const usePlans = (): IRequest<PlanResponse> =>
  useSelector((state: RootState) => state.plan.plans);

export const useSelectedPlan = (): IRequest<PlanResponse> =>
  useSelector((state: RootState) => state.plan.selectedPlan);
