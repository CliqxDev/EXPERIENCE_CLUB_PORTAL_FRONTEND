/* eslint-disable import/no-anonymous-default-export */
import * as Yup from 'yup';

import { isDate, isPastDate, minDateForBirthDate } from './date';

export default {
  Required() {
    return Yup.string().required('Campo obrigatório.');
  },
  Email() {
    return Yup.string()
      .email('E-mail inválido.')
      .required('Campo obrigatório.');
  },
  DateNotFuture() {
    return Yup.string().test(
      'validDate',
      'Essa data não é compatível.',
      value => {
        if (value) {
          return (
            isDate(value) && isPastDate(value) && minDateForBirthDate(value)
          );
        }
        return true;
      }
    );
  },
  PasswordMatch() {
    return Yup.string()
      .oneOf([Yup.ref('password')], 'As senhas não conferem!')
      .required('Campo obrigatório.');
  }
};
