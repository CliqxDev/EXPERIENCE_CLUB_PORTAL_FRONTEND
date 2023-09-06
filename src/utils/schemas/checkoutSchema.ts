import * as Yup from 'yup';

import ValidationRules from '../validations/validationsSchemas';

export const checkoutSchema = Yup.object().shape({
  cpf: ValidationRules.Cpf()
});
