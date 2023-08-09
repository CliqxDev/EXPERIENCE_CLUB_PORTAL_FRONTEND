import * as Yup from 'yup';

import ValidationRules from '../validations/validationsSchemas';

export const sigInSchema = Yup.object().shape({
  email: ValidationRules.Email(),
  password: ValidationRules.Required()
});
