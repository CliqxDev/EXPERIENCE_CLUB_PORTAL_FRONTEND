import { useFormik } from 'formik';
import Input from 'components/ui/Input';
import Button from 'components/ui/Button';
import { masks } from 'utils';
import { newEmployeeSchema } from 'utils/schemas';
import ToasterComponent from 'components/ui/Toaster';
import * as S from './styles';

const AddNewEmployee = () => {

  const handleSubmit = () => {
    
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: ''
    },
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: handleSubmit,
    validationSchema: () => newEmployeeSchema
  });

  return (
    <S.Wrapper>
      <S.ContainerData>
        <S.FormData onSubmit={formik.handleSubmit}>
          <Input
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            label="Nome completo"
            required
            id="name"
            name="name"
            placeholder=""
            fullwidth
            errorMessage={
              (formik.touched.name && formik.errors.name) || ''
            }
            inputMode="numeric"
            mask={{ mask: masks.cel.mask, maskPlaceholder: '' }}
            spacing="24"
          />
          <Input
            fullwidth
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            label="E-mail"
            id="email"
            name="email"
            placeholder=""
            spacing="24"
          />
          <Button
            fullwidth
            type="submit"
            disabled={
              !(formik.isValid && formik.dirty)
            }
          >
            Salvar
          </Button>
        </S.FormData>
        <ToasterComponent variant="success" />
      </S.ContainerData>
    </S.Wrapper>
  );
}

export default AddNewEmployee;