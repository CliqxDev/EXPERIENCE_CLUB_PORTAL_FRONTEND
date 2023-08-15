/* eslint-disable import/no-anonymous-default-export */
import * as Yup from 'yup';

import { isDate, isPastDate, minDateForBirthDate } from './date';

export default {
  Required() {
    return Yup.string().required('Campo vazio');
  },
  Email() {
    return Yup.string().email('E-mail incorreto').required('Campo vazio');
  },
  DateNotFuture() {
    return Yup.string().test(
      'validDate',
      'Essa data não é compatível',
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
  EmailNotRequired() {
    return Yup.string()
      .email('E-mail inválido.')
  },
  PasswordMatch() {
    return Yup.string()
      .oneOf([Yup.ref('password')], 'As senhas não estão iguais')
      .required('Campo vazio');
  }
};
