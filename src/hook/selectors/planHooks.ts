import { CompaniesResponse, PlanResponse, SubscriptionUser } from 'flux/modules/plan/types';
import { useSelector } from 'flux/selector';
import { RootState } from 'flux/store';
import { IRequest } from 'models/iRequest';

export const usePlans = (): IRequest<PlanResponse> =>
  useSelector((state: RootState) => state.plan.plans);

export const useSelectedPlan = (): IRequest<PlanResponse> =>
  useSelector((state: RootState) => state.plan.selectedPlan);

export const useSubscriptionUserPlan = (): IRequest<SubscriptionUser> =>
  useSelector((state: RootState) => state.plan.subscriptionUserPlan);

export const useCompaniesUser = (): IRequest<CompaniesResponse> =>
  useSelector((state: RootState) => state.plan.companiesUser);
