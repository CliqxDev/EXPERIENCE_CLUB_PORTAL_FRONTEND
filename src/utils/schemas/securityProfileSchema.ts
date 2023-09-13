import * as Yup from 'yup';

import ValidationRules from '../validations/validationsSchemas';

export const securityProfileSchema = Yup.object().shape({
  currentPassword: ValidationRules.Required(),
  password: ValidationRules.Required(),
  confirmPassword: ValidationRules.PasswordMatch(),
});
