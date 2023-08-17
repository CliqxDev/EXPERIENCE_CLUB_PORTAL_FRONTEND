import * as Yup from 'yup';

import ValidationRules from '../validations/validationsSchemas';

export const personalDataProfileSchema = Yup.object().shape({
  cellphone: ValidationRules.CellPhone()
});
