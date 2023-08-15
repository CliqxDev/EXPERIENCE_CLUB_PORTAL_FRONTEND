/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable no-console */
import { useFormik } from "formik";
import { personalDataProfileSchema } from "utils/schemas";

import Button from "components/Button";
import Input from "components/Input";

import * as S from './styles';

const PersonalData = () => {
  const handleSubmit = () => {
    console.log("asd")
  }

  const formik = useFormik({
    initialValues: {
      telephone: '',
      headInovation: ''
    },
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: handleSubmit,
    validationSchema: () => personalDataProfileSchema
  });

  return (
    <S.ContainerPersonalData>
      <S.Title>Dados Pessoais</S.Title>

      <S.FormData>
        <Input
          value={formik.values.telephone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          label="Telefone"
          required
          mask='tel'
          id="telephone"
          name="telephone"
          placeholder=""
          style={{ width: '95%' }}
          errorMessage={(formik.touched.telephone && formik.errors.telephone) || ''}
          spacing="24"
        />
        <Input
          value={formik.values.headInovation}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          label="Head de inovação"
          id="head-inovation"
          name="head-inovation"
          placeholder=""
          style={{ width: '95%', height: '5.6rem' }}
          spacing="24"
        />
        <Button
          type="submit"
          disabled={!(formik.isValid && formik.dirty)}
          style={{ width: '95%' }}
        >
          Salvar
        </Button>
      </S.FormData>

    </S.ContainerPersonalData>
  );
}

export default PersonalData;