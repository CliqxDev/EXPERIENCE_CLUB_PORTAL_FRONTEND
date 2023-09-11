import { useFormik } from 'formik';
import Image from 'next/image';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { redirect } from 'next/navigation';
import Input from 'components/ui/Input';
import Button from 'components/ui/Button';
import { newEmployeeSchema } from 'utils/schemas';
import Toaster from 'components/ui/Toaster';
import { useAppDispatch } from 'hook/store';
import { addEmployee, clearAddEmployee } from 'flux/modules/employee/actions';
import { useAddEmployee } from 'hook/selectors/employeeHooks';
import { RequestStatus } from 'models/iRequest';
import * as S from './styles';
import newPhoto from '../../../../public/img/photo.svg'

const AddNewEmployee = () => {
  const dispatch = useAppDispatch();
  const { status, message, data } = useAddEmployee();

  useEffect(() => {
    if (status === RequestStatus.error) {
      toast('Falha ao tentar adicionar colaborador');
    }

    if (status === RequestStatus.success) {
      dispatch(clearAddEmployee());
      redirect('/employees/employee-added');
    }
  }, [status, message, data])

  const handleSubmit = () => {
    dispatch(
      addEmployee.request({
        email: formik.values.email,
        name: formik.values.name
      })
    );
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
        <Toaster variant="error" />
      </S.ContainerData>
    </S.Wrapper>
  );
}

export default AddNewEmployee;