/* eslint-disable @typescript-eslint/no-floating-promises */
import { useFormik } from 'formik';
import { isEmpty } from 'lodash';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { personalDataProfileSchema } from 'utils/schemas';
import { useAppDispatch } from 'hook/store';
import Button from 'components/ui/Button';
import Input from 'components/ui/Input';

import { masks } from 'utils';
import RemovePhoneMask from 'utils/mask/removePhoneMask';
import { RequestStatus } from 'models/iRequest';
import Toaster from 'components/ui/Toaster';
import { useClientInfo } from 'hook/selectors/authHooks';
import { useUpdateClient } from 'hook/selectors/clientHooks';
import { clearUpdateClient, updateClient } from 'flux/modules/client/actions';
import * as S from './styles';

const ProfilePersonalData = () => {
  const { data } = useClientInfo();
  const { status } = useUpdateClient();
  const dispatch = useAppDispatch();

  const onUpdate = () => {
    if (!isEmpty(data)) {
      const request = {
        ...data,
        role: formik.values.role,
        phone: RemovePhoneMask(formik.values.cellphone)
      };

      dispatch(updateClient.request(request));
    }
  };

  const handleSubmit = () => {
    onUpdate();
  };

  const formik = useFormik({
    initialValues: {
      cellphone: '',
      role: ''
    },
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: handleSubmit,
    validationSchema: () => personalDataProfileSchema
  });

  useEffect(() => {
    if (!isEmpty(data)) {
      formik.setFieldValue('cellphone', data.phone, false);
      formik.setFieldValue('role', data.role, false);
    }
  }, [data]);

  useEffect(() => {
    if (status === RequestStatus.success) {
      toast('Informações atualizadas.');
      dispatch(clearUpdateClient());
    }
  }, [status]);

  return (
    <S.ContainerPersonalData>
      <S.Title>Dados Pessoais</S.Title>

      <S.FormData onSubmit={formik.handleSubmit}>
        <Input
          value={formik.values.cellphone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          label="Telefone"
          required
          id="cellphone"
          name="cellphone"
          placeholder=""
          fullwidth
          errorMessage={
            (formik.touched.cellphone && formik.errors.cellphone) || ''
          }
          inputMode="numeric"
          mask={{ mask: masks.cel.mask, maskPlaceholder: '' }}
          spacing="24"
        />
        <Input
          fullwidth
          value={formik.values.role}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          label="Cargo"
          id="role"
          name="role"
          placeholder=""
          spacing="24"
        />
        <Button
          fullwidth
          type="submit"
          disabled={
            !(formik.isValid && formik.dirty) ||
            status === RequestStatus.fetching
          }
        >
          Salvar
        </Button>
      </S.FormData>
      <Toaster variant="success" />
    </S.ContainerPersonalData>
  );
};

export default ProfilePersonalData;
