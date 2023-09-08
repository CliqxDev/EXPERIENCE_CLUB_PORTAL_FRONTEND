/* eslint-disable import/no-anonymous-default-export */
import * as Yup from 'yup';

import RemovePhoneMask from 'utils/mask/removePhoneMask';
import { isDate, isPastDate, minDateForBirthDate } from './date';
import { validCpf } from './cpf';
import { validCNPJ } from './cnpj';

export default {
  Required() {
    return Yup.string().required('Campo não pode estar vazio.');
  },
  Email() {
    return Yup.string()
      .email('E-mail incorreto')
      .required('Campo não pode estar vazio.');
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
    return Yup.string().email('E-mail inválido');
  },
  PasswordMatch() {
    return Yup.string()
      .oneOf([Yup.ref('password')], 'As senhas não estão iguais')
      .required('Campo não pode estar vazio.');
  },
  CellPhone() {
    return Yup.string()
      .required('Campo não pode estar vazio.')
      .test('len', 'Telefone inválido', cel => {
        if (cel) {
          const celClear = RemovePhoneMask(cel);
          const test = celClear.length >= 11;
          return test;
        }
        return false;
      });
  },
  CellPhoneNotRequired() {
    return Yup.string().test('len', 'Telefone inválido', cel => {
      if (cel) {
        const celClear = RemovePhoneMask(cel);
        if (celClear) {
          const test = celClear.length >= 11;
          return test;
        }
        return true;
      }
      return true;
    });
  },
  Cep() {
    return Yup.string()
      .required('Campo não pode estar vazio.')
      .test('validCep', 'CEP está incorreto.', value => {
        if (value) {
          const cepNoMask = value.replace('-', '');
          return cepNoMask.length === 8;
        }
        return false;
      });
  },
  Cpf() {
    return Yup.string()
      .required('Campo não pode estar vazio.')
      .test('cpf', 'Cpf inválido.', value => {
        if (value) {
          return validCpf(value);
        }
        return true;
      });
  },
  Cnpj() {
    return Yup.string()
      .required('Campo não pode estar vazio.')
      .test('Cnpj', 'Cnpj inválido.', value => validCNPJ(value));
  }
};
