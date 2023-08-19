/* eslint-disable simple-import-sort/imports */
import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { forEach } from 'lodash';
import { redirect } from 'next/navigation';
import moment from 'moment';
import { toast } from 'react-hot-toast';
import { useAppDispatch } from 'hook/store';
import { personalDataSchema } from 'utils/schemas';

import Button from 'components/Button';
import Input from 'components/Input';
import { RequestStatus } from 'models/iRequest';

import { masks } from 'utils/masks';
import { createClient, clearCreateClient } from 'flux/modules/client/actions';
import { useCreateClient } from 'hook/selectors/clientHooks';
import RemovePhoneMask from 'utils/mask/removePhoneMask';
import PasswordRules from 'components/PasswordRules';
import { PasswordRule } from 'components/PasswordRules/types';
import Toaster from 'components/Toaster';
import { ClientPersonalDataPayload } from 'flux/modules/client/types';
import * as S from './styles';

const FormPersonalData = () => {
  const dispatch = useAppDispatch();
  const { status } = useCreateClient();

  const [passwordRule, setPasswordRule] = useState<PasswordRule>({
    length: 'default',
    letterAndNumber: 'default',
    upperCaseLetter: 'default',
    specialCharacter: 'default'
  });

  useEffect(() => {
    if (status === RequestStatus.error) {
      toast('Falha na integração');
    }

    if (status === RequestStatus.success) {
      dispatch(clearCreateClient());
      redirect('/register/email-verify');
    }
  }, [status]);

  const handleSubmit = () => {
    const request: ClientPersonalDataPayload = {
      password: formik.values.password,
      name: formik.values.name,
      email: formik.values.email
    };
    if (formik.values.birthDate) {
      request.date_birth = moment(formik.values.birthDate, 'DD/MM/YYYY').format(
        'YYYY-MM-DD'
      );
    }
    if (formik.values.role) {
      request.role = formik.values.role;
    }

    if (formik.values.cellphone) {
      request.phone = RemovePhoneMask(formik.values.cellphone);
    }
    dispatch(createClient.request(request));
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      cellphone: '',
      birthDate: '',
      role: '',
      name: '',
      password: '',
      confirmationPassword: ''
    },
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: handleSubmit,
    validationSchema: () => personalDataSchema
  });

  const isValidPasswordRule = () => {
    let isValid = true;
    forEach(passwordRule, rule => {
      if (rule !== 'done') {
        isValid = false;
      }
    });
    return isValid;
  };

  return (
    <S.Wrapper onSubmit={formik.handleSubmit}>
      <h1>Plano gratuito</h1>
      <h2>Informe seus dados abaixo</h2>
      <Input
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        label="Nome Completo"
        required
        id="name"
        name="name"
        placeholder=""
        errorMessage={(formik.touched.name && formik.errors.name) || ''}
        spacing="24"
      />
      <Input
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        label="E-mail"
        required
        id="email"
        name="email"
        placeholder=""
        errorMessage={(formik.touched.email && formik.errors.email) || ''}
        spacing="24"
      />
      <Input
        value={formik.values.cellphone}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        label="Telefone"
        id="cellphone"
        name="cellphone"
        placeholder=""
        errorMessage={
          (formik.touched.cellphone && formik.errors.cellphone) || ''
        }
        spacing="24"
        inputMode="numeric"
        mask={{ mask: masks.cel.mask, maskPlaceholder: '' }}
      />

      <Input
        value={formik.values.birthDate}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        label="Data de nascimento"
        id="birthDate"
        name="birthDate"
        placeholder=""
        errorMessage={
          (formik.touched.birthDate && formik.errors.birthDate) || ''
        }
        spacing="24"
        inputMode="numeric"
        mask={{ mask: masks.data.mask, maskPlaceholder: '' }}
      />
      <Input
        value={formik.values.role}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        label="Cargo"
        id="role"
        name="role"
        placeholder=""
        errorMessage={(formik.touched.role && formik.errors.role) || ''}
        spacing="24"
      />
      <Input
        required
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        label="Senha"
        id="password"
        name="password"
        placeholder=""
        errorMessage={(formik.touched.password && formik.errors.password) || ''}
        type="password"
      />

      <PasswordRules
        password={formik.values.password}
        onChangePassword={param => setPasswordRule(param)}
      />

      <Input
        required
        value={formik.values.confirmationPassword}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        label="Confirmação de senha"
        id="confirmationPassword"
        name="confirmationPassword"
        placeholder=""
        errorMessage={
          (formik.touched.confirmationPassword &&
            formik.errors.confirmationPassword) ||
          ''
        }
        spacing="24"
        type="password"
      />

      <S.TermsWrapper>
        Ao continuar, eu concordo que li e aceito os{' '}
        <span> Termos de uso </span>e a <span>Política de privacidade</span>.
      </S.TermsWrapper>

      <Button
        disabled={!(formik.isValid && formik.dirty) || !isValidPasswordRule()}
        type="submit"
      >
        Cadastrar
      </Button>
      <Toaster variant="error" />
    </S.Wrapper>
  );
};

export default FormPersonalData;
