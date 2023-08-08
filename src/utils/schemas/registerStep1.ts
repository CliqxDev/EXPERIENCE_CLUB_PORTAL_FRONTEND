import * as Yup from 'yup';

import ValidationRules from '../validations/validationsSchemas';

export const registerStep1 = Yup.object().shape({
  name: ValidationRules.Required(),
  email: ValidationRules.Email(),
  birthDate: ValidationRules.Required(),
  password: ValidationRules.Required(),
  confirmationPassword: ValidationRules.Required()
});
