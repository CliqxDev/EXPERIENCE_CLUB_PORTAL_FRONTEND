import * as Yup from 'yup';

import ValidationRules from '../validations/validationsSchemas';

export const checkoutCorpSchema = Yup.object().shape({
  cnpj: ValidationRules.Cnpj(),
  company: ValidationRules.Required(),
  role: ValidationRules.Required()
});
