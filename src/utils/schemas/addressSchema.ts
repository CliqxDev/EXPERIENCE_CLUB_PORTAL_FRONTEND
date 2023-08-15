import * as Yup from 'yup';

import ValidationRules from '../validations/validationsSchemas';

export const addressSchema = Yup.object().shape({
  cep: ValidationRules.Required(),
  address: ValidationRules.Required(),
  number: ValidationRules.Required(),
  district: ValidationRules.Required(),
  city: ValidationRules.Required(),
});
