import { useState } from 'react';
import { useFormik } from 'formik';
import { isEmpty } from 'lodash';
import { assignNewsletter } from 'flux/modules/client/actions';
import { useNewsLetter } from 'hook/selectors/clientHooks';
import { useAppDispatch } from 'hook/store';
import { newsLetterSchema } from 'utils/schemas';
import { isAuthenticated } from 'utils/services/auth';

import Button from 'components/Button';
import Input from 'components/Input';
import Title from 'components/Title';

import { RequestStatus } from 'models/iRequest';
import { useClientInfo } from 'hook/selectors/authHooks';
import * as S from './styles';

const Newsletter = () => {
  const dispatch = useAppDispatch();
  const { data } = useClientInfo();
  const { status } = useNewsLetter();

  const [checked, setChecked] = useState<boolean | undefined>(false);

  const handleSubmit = () => {
    const requestClient = {
      email: !isEmpty(data) ? data.email : formik.values.email,
      name: !isEmpty(data) ? data.name : formik.values.name
    };
    dispatch(assignNewsletter.request(requestClient));
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: ''
    },
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: handleSubmit,
    validationSchema: () => (!isAuthenticated() ? newsLetterSchema : {})
  });

  const isDisabled = () => {
    const isLoading = status === RequestStatus.fetching;
    if (!isAuthenticated()) {
      return !(formik.isValid && formik.dirty) || !checked || isLoading;
    }
    return false || isLoading;
  };

  return (
    <>
      {status !== RequestStatus.error && status !== RequestStatus.success && (
        <S.NewsletterWrapper isLogged={isAuthenticated()}>
          <div style={{ width: 315 }}>
            <Title variant="lightCenter">
              Inscreva-se na nossa Newsletter!
            </Title>
          </div>
          <S.FormWrapper onSubmit={formik.handleSubmit}>
            {!isAuthenticated() && (
              <>
                <Input
                  fullWidth
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  label="Nome"
                  required
                  id="name"
                  name="name"
                  placeholder=""
                  errorMessage={
                    (formik.touched.name && formik.errors.name) || ''
                  }
                  spacing="12"
                  variant="transparent"
                />
                <Input
                  fullWidth
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  label="E-mail"
                  required
                  id="email"
                  name="email"
                  placeholder=""
                  errorMessage={
                    (formik.touched.email && formik.errors.email) || ''
                  }
                  spacing="12"
                  variant="transparent2"
                />
                <S.CheckboxContainer>
                  <S.Checkbox
                    name="checkbox"
                    id="checkbox"
                    type="checkbox"
                    defaultChecked={checked}
                    onChange={e => setChecked(e.target.checked)}
                  />
                  <S.CustomizeLabel htmlFor="checkbox">
                    Concordo com os{' '}
                    <span style={{ textDecoration: 'underline' }}>
                      termos de privacidade
                    </span>{' '}
                    e aceito receber newsletters.
                  </S.CustomizeLabel>
                </S.CheckboxContainer>
              </>
            )}
            <Button
              style={{ width: '36.4rem', height: '4rem', margin: '2rem auto' }}
              variant="secondary"
              onClick={handleSubmit}
              disabled={isDisabled()}
            >
              Cadastrar
            </Button>
          </S.FormWrapper>
        </S.NewsletterWrapper>
      )}
      {status === RequestStatus.error && (
        <S.MessageWrapper>
          <S.MessageBox>
            <S.MessageHeader>
              <h1>Já existe cadastrado!</h1>
              <h2>Você já faz parte da nossa comunidade</h2>
            </S.MessageHeader>
            <S.MessageContent>
              <p>
                Caso não esteja recebendo nossos e-mails confira sua caixa de
                spam e confirme nosso contato.
              </p>
            </S.MessageContent>
          </S.MessageBox>
        </S.MessageWrapper>
      )}

      {status === RequestStatus.success && (
        <S.MessageWrapper>
          <S.MessageSuccess>
            <S.MessageHeader>
              <h1>Bem vindo(a)!</h1>
              <h2>Agora você está junto da nossa comunidade</h2>
            </S.MessageHeader>
            <S.MessageContent>
              <p>
                Seu cadastro foi concluído, em breve você receberá nossos
                conteúdos.
              </p>
            </S.MessageContent>
          </S.MessageSuccess>
        </S.MessageWrapper>
      )}
    </>
  );
};

export default Newsletter;
