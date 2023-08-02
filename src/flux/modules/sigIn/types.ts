export type SigInRequest = {
  email: string;
  password: string;
};

export interface SigInResponse {
  access: string;
  refresh: string;
}
