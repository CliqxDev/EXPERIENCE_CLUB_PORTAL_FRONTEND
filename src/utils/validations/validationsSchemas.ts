/* eslint-disable import/no-anonymous-default-export */
import * as Yup from 'yup';

export default {
  Required() {
    return Yup.string().required('Campo obrigatório.');
  },
  Email() {
    return Yup.string()
      .email('E-mail inválido.')
      .required('Campo obrigatório.');
  },
  EmailNotRequired() {
    return Yup.string()
      .email('E-mail inválido.')
  },
  PasswordMatch() {
    return Yup.string()
      .required('Campo obrigatório.')
      .oneOf([Yup.ref('newPassword')], 'As senhas não conferem!');
  }
};
