export type Rule = 'done' | 'error' | 'default';

export type PasswordRule = {
  length: Rule;
  letterAndNumber: Rule;
  upperCaseLetter: Rule;
  specialCharacter: Rule;
};

export type Props = {
  password: string;
  onChangePassword: (passwordRule: PasswordRule) => void; 
}