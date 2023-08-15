import * as Yup from 'yup';

import ValidationRules from '../validations/validationsSchemas';

export const personalDataProfileSchema = Yup.object().shape({
  telephone: ValidationRules.Required(),
});
