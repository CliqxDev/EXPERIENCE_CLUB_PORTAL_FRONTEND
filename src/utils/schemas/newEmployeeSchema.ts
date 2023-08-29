import * as Yup from 'yup';

import ValidationRules from '../validations/validationsSchemas';

export const newEmployeeSchema = Yup.object().shape({
  name: ValidationRules.Required(),
  email: ValidationRules.Email(),
});
