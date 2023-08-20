import * as Yup from 'yup';

import ValidationRules from '../validations/validationsSchemas';

export const recoveryPassword = Yup.object().shape({
  email: ValidationRules.Email()
});
