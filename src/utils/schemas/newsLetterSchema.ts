import * as Yup from 'yup';

import ValidationRules from '../validations/validationsSchemas';

export const newsLetterSchema = Yup.object().shape({
  name: ValidationRules.Required(),
  email: ValidationRules.Email()
});
