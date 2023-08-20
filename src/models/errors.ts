export type GenericError = {
  code: string;
  fields?: { [field: string]: string };
  message: string;
  type: string;
};

export enum GenericErrorType {
  EmDiaBadRequestException = 'EmDiaBadRequestException',
  LimitExceededException = 'LimitExceededException',
  NoResponseException = 'NoResponseException'
}

export enum LoginErrorType {
  NotAuthorizedException = 'NotAuthorizedException',
  UserNotFoundException = 'UserNotFoundException'
}

export enum ErrorMessage {
  email = 'Email já esta cadastrado',
  cellphone = 'Telefone já esta cadastrado',
  generic = 'Falha na integração'
}
