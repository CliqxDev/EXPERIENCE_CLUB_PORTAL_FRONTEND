import { useFormik } from 'formik';
import Image from 'next/image';
import Input from 'components/ui/Input';
import Button from 'components/ui/Button';
import { newEmployeeSchema } from 'utils/schemas';
import ToasterComponent from 'components/ui/Toaster';
import * as S from './styles';
import newPhoto from '../../../../public/img/photo.svg'

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
      <S.AddNewPhoto>
        <S.Avatar>
          <S.ChangeAvatarLabel htmlFor="avatar">
            <S.ChangeAvatar type='file' id='avatar' name='avatar' />
            <Image src={newPhoto} alt="Adicionar Foto" />
          </S.ChangeAvatarLabel>
        </S.Avatar>
        <S.AddPhoto>Adicione uma foto</S.AddPhoto>
      </S.AddNewPhoto>
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