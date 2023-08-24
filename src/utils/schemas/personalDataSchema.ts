import * as Yup from 'yup';

import ValidationRules from '../validations/validationsSchemas';

export const personalDataSchema = Yup.object().shape({
  name: ValidationRules.Required(),
  email: ValidationRules.Email(),
  birthDate: ValidationRules.DateNotFuture(),
  password: ValidationRules.Required(),
  confirmationPassword: ValidationRules.PasswordMatch(),
  cellphone: ValidationRules.CellPhoneNotRequired()
});
