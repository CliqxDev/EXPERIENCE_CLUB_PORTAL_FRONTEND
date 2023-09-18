import { useState } from 'react';
import { useFormik } from 'formik';
import { isEmpty } from 'lodash';
import { assignNewsletter } from 'flux/modules/client/actions';
import { useNewsLetter } from 'hook/selectors/clientHooks';
import { useAppDispatch } from 'hook/store';
import { newsLetterSchema } from 'utils/schemas';
import { isAuthenticated } from 'utils/services/auth';

import Button from 'components/ui/Button';
import Input from 'components/ui/Input';
import Title from 'components/ui/Title';

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
        <S.NewsletterWrapper
          id="news-letter-wrapper"
          islogged={isAuthenticated() ? '17.8rem' : '38.8rem'}
        >
          <S.WrapperTitle>
            <Title variant="lightCenter">
              Inscreva-se na nossa Newsletter!
            </Title>
          </S.WrapperTitle>
          <S.FormDesk>
            <S.FormWrapper onSubmit={formik.handleSubmit}>
              {!isAuthenticated() && (
                <>
                  <Input
                    fullwidth
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
                    fullwidth
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
                style={{ height: '4rem', margin: '2rem auto' }}
                fullwidth
                variant="secondary"
                onClick={handleSubmit}
                disabled={isDisabled()}
              >
                Cadastrar
              </Button>
            </S.FormWrapper>
          </S.FormDesk>
        </S.NewsletterWrapper>
      )}
      {status === RequestStatus.error && (
        <S.MessageWrapper>
          <S.MessageBox>
            <S.MessageHeader>
              <h1>O seu e-mail já está no nosso cadastro!</h1>
              <h2>Você já faz parte da nossa comunidade</h2>
            </S.MessageHeader>
            <S.MessageContent>
              <p>
                Caso não esteja recebendo nossos e-mails verifique na sua pasta
                de Spam e salve o nosso e-mail em seus contatos.
              </p>
            </S.MessageContent>
          </S.MessageBox>
        </S.MessageWrapper>
      )}

      {status === RequestStatus.success && (
        <S.MessageWrapper>
          <S.MessageSuccess>
            <S.MessageHeader>
              <h1>Obrigado por se cadastrar!</h1>
              <h2>Agora você está junto da nossa comunidade</h2>
            </S.MessageHeader>
            <S.MessageContent>
              <p>
                A partir de agora, você vai receber, diretamente no seu e-mail,
                o melhor conteúdo de negócios.
              </p>
            </S.MessageContent>
          </S.MessageSuccess>
        </S.MessageWrapper>
      )}
    </>
  );
};

export default Newsletter;
