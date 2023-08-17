/* eslint-disable @typescript-eslint/no-floating-promises */
import { useFormik } from 'formik';
import { isEmpty } from 'lodash';
import { useEffect } from 'react';
import toast, { Toaster, ToastBar } from 'react-hot-toast';
import { personalDataProfileSchema } from 'utils/schemas';
import { useAppDispatch } from 'hook/store';
import Button from 'components/Button';
import Input from 'components/Input';

import { masks } from 'utils';
import { useClientInfo, useUpdateClient } from 'hook/selectors/clientHooks';
import { updateClient } from 'flux/modules/client/actions';
import RemovePhoneMask from 'utils/mask/removePhoneMask';
import { RequestStatus } from 'models/iRequest';
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
          fullWidth
          errorMessage={
            (formik.touched.cellphone && formik.errors.cellphone) || ''
          }
          inputMode="numeric"
          mask={{ mask: masks.cel.mask, maskPlaceholder: '' }}
          spacing="24"
        />
        <Input
          fullWidth
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
          fullWidth
          type="submit"
          disabled={
            !(formik.isValid && formik.dirty) ||
            status === RequestStatus.fetching
          }
        >
          Salvar
        </Button>
      </S.FormData>
      <S.ToasterWrapper>
        <Toaster
          position="bottom-center"
          toastOptions={{
            className: '',
            style: {
              width: '100%',
              color: '#1A1A19',
              fontFamily: 'Work Sans',
              fontSize: 16,
              fontStyle: 'normal',
              fontWeight: 400,
              textAlign: 'left'
            }
          }}
        >
          {t => (
            <ToastBar toast={t}>
              {({ message }) => (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 1C4.13438 1 1 4.13438 1 8C1 11.8656 4.13438 15 8 15C11.8656 15 15 11.8656 15 8C15 4.13438 11.8656 1 8 1ZM11.0234 5.71406L7.73281 10.2766C7.68682 10.3408 7.62619 10.3931 7.55595 10.4291C7.48571 10.4652 7.40787 10.4841 7.32891 10.4841C7.24994 10.4841 7.17211 10.4652 7.10186 10.4291C7.03162 10.3931 6.97099 10.3408 6.925 10.2766L4.97656 7.57656C4.91719 7.49375 4.97656 7.37813 5.07812 7.37813H5.81094C5.97031 7.37813 6.12187 7.45469 6.21562 7.58594L7.32812 9.12969L9.78438 5.72344C9.87813 5.59375 10.0281 5.51562 10.1891 5.51562H10.9219C11.0234 5.51562 11.0828 5.63125 11.0234 5.71406Z"
                      fill="#22C55E"
                    />
                  </svg>

                  {message}
                </div>
              )}
            </ToastBar>
          )}
        </Toaster>
      </S.ToasterWrapper>
    </S.ContainerPersonalData>
  );
};

export default ProfilePersonalData;
