export type SigInRequest = {
  email: string;
  password: string;
};

export type SigIn = {
  token: string;
  validated: boolean;
};

export interface SigInResponse {
  data: SigIn;
}
