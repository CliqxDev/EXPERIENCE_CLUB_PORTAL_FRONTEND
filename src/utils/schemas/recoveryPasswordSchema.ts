import * as Yup from 'yup';

import ValidationRules from '../validations/validationsSchemas';

export const recoveryPasswordSchema = Yup.object().shape({
  email: ValidationRules.Email()
});
