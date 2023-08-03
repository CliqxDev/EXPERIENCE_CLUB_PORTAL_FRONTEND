/* eslint-disable simple-import-sort/imports */
/* eslint-disable @typescript-eslint/no-floating-promises */
import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { isEmpty } from 'lodash';
import { clearSigIn, sigIn } from 'flux/modules/sigIn/actions';
import { useAppDispatch } from 'hook/store';
import { sigInSchema } from 'utils/schemas';
import { useSigIn } from 'hook/selectors/sigInHooks';

import Button from 'components/Button';
import Checkbox from 'components/Checkbox';
import Input from 'components/Input';
import { RequestStatus } from 'models/iRequest';

import * as S from './styles';

type UserType = {
  email: string;
  password: string;
};

const SigIn = () => {
  const dispatch = useAppDispatch();
  const { status, message, data } = useSigIn();
  const [checkboxStatus, setCheckboxStatus] = useState<boolean | undefined>(
    false
  );

  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (status === RequestStatus.error) {
      if (message === 'Request failed with status code 401') {
        setErrorMessage(
          'E-mail ou senha incorretos. Confirme suas informações ou crie uma conta.'
        );
      } else {
        setErrorMessage('Falha ao tentar efetuar o login');
      }
    }

    if (status === RequestStatus.success && !isEmpty(data)) {
      if (!data.validated) {
        // navigate('/alterar-senha');
      } else {
        // login(data.token);
        dispatch(clearSigIn());
        // navigate('/transacoes');
      }
    }
  }, [status, message, data]);

  useEffect(() => {
    const localStorageUser = localStorage.getItem('REMEMBER_SIGN');
    if (localStorageUser !== null) {
      const user: UserType = JSON.parse(localStorageUser);
      formik.setFieldValue('email', user.email, false);
      formik.setFieldValue('password', user.password, false);

      setCheckboxStatus(true);
    }
  }, []);

  const handleSubmit = () => {
    dispatch(
      sigIn.request({
        email: formik.values.email,
        password: formik.values.password
      })
    );
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: handleSubmit,
    validationSchema: () => sigInSchema
  });
  return (
    <S.Wrapper onSubmit={formik.handleSubmit}>
      <h1>Entre no seu perfil</h1>
      <h2>e nunca mais perca um conteúdo</h2>
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
        required
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        label="Senha"
        id="password"
        name="password"
        placeholder=""
        errorMessage={(formik.touched.password && formik.errors.password) || ''}
        spacing="24"
        type="password"
      />
      <S.Row>
        <Checkbox
          defaultChecked={checkboxStatus}
          onChangeChecked={(checked: boolean) => {
            setCheckboxStatus(checked);
            if (checked) {
              localStorage.setItem(
                'REMEMBER_SIGN',
                JSON.stringify({
                  email: formik.values.email,
                  password: formik.values.password
                })
              );
            } else {
              localStorage.removeItem('REMEMBER_SIGN');
            }
          }}
        >
          Lembrar-me
        </Checkbox>
        <Button variant="link">Redefinir senha</Button>
      </S.Row>
      <Button disabled={!(formik.isValid && formik.dirty)} type="submit">
        Entrar
      </Button>
      <Button id="register-btn" variant="link">
        Ainda não possui uma conta? Clique aqui
      </Button>
      {errorMessage && (
        <S.ErrorBox>
          <S.ErrorBoxIcon>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 1C4.13438 1 1 4.13438 1 8C1 11.8656 4.13438 15 8 15C11.8656 15 15 11.8656 15 8C15 4.13438 11.8656 1 8 1ZM10.5844 10.6594L9.55313 10.6547L8 8.80313L6.44844 10.6531L5.41563 10.6578C5.34688 10.6578 5.29063 10.6031 5.29063 10.5328C5.29063 10.5031 5.30156 10.475 5.32031 10.4516L7.35313 8.02969L5.32031 5.60938C5.30143 5.58647 5.29096 5.5578 5.29063 5.52812C5.29063 5.45937 5.34688 5.40312 5.41563 5.40312L6.44844 5.40781L8 7.25938L9.55156 5.40938L10.5828 5.40469C10.6516 5.40469 10.7078 5.45937 10.7078 5.52969C10.7078 5.55937 10.6969 5.5875 10.6781 5.61094L8.64844 8.03125L10.6797 10.4531C10.6984 10.4766 10.7094 10.5047 10.7094 10.5344C10.7094 10.6031 10.6531 10.6594 10.5844 10.6594Z"
                fill="#DC2626"
              />
            </svg>
          </S.ErrorBoxIcon>
          <S.ErrorMessage> {errorMessage}</S.ErrorMessage>
        </S.ErrorBox>
      )}
    </S.Wrapper>
  );
};

export default SigIn;
