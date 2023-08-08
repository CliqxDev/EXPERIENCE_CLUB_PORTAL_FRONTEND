import * as Yup from 'yup';

import ValidationRules from '../validations/validationsSchemas';

export const newsLetterSchema = Yup.object().shape({
  email: ValidationRules.EmailNotRequired(),
});
