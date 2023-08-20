import * as Yup from 'yup';

import ValidationRules from '../validations/validationsSchemas';

export const resetPasswordSchema = Yup.object().shape({
  password: ValidationRules.Required(),
  confirmationPassword: ValidationRules.PasswordMatch()
});
