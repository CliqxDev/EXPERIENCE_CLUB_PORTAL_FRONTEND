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
  PasswordMatch() {
    return Yup.string()
      .required('Campo obrigatório.')
      .oneOf([Yup.ref('newPassword')], 'As senhas não conferem!');
  }
};
