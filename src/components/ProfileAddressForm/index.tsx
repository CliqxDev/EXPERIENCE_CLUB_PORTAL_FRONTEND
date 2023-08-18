/* eslint-disable @typescript-eslint/no-floating-promises */
import { useFormik } from 'formik';
import { useEffect } from 'react';
import { isEmpty } from 'lodash';
import toast, { Toaster, ToastBar } from 'react-hot-toast';
import { addressSchema } from 'utils/schemas/addressSchema';
import { useAppDispatch } from 'hook/store';

import Button from 'components/Button';
import Input from 'components/Input';

import { masks } from 'utils';
import { getAddress } from 'flux/modules/cep/actions';
import { useAddress } from 'hook/selectors/addressHooks';
import { RequestStatus } from 'models/iRequest';
import Select from 'components/Select';
import { ufs } from 'utils/uf';
import {
  createClientAddress,
  updateClientAddress,
  updateClientState
} from 'flux/modules/client/actions';
import {
  useClientInfo,
  useCreateClientAddress,
  useUpdateClientAddress
} from 'hook/selectors/clientHooks';
import { Address } from 'flux/modules/client/types';
import * as S from './styles';

const ProfileAddressForm = () => {
  const dispatch = useAppDispatch();
  const { data, status } = useAddress();
  const { data: userData } = useClientInfo();
  const { status: statusUpdateClientAddress, data: dataUpdateClientAddress } =
    useUpdateClientAddress();
  const { status: statusCreateClientAddress, data: dataCreateClientAddress } =
    useCreateClientAddress();

  const onUpdate = () => {
    if (!isEmpty(userData)) {
      const request: Address = {
        cep: formik.values.cep.replace('-', ''),
        address: formik.values.address,
        number: formik.values.number,
        district: formik.values.district,
        complement: formik.values.complement,
        state: formik.values.state.value,
        city: formik.values.city,
        user: userData.id
      };
      if (userData.address) {
        request.id = userData.address.id;
        dispatch(updateClientAddress.request(request));
      } else {
        dispatch(createClientAddress.request(request));
      }
    }
  };

  const handleSubmit = () => {
    onUpdate();
  };

  const formik = useFormik({
    initialValues: {
      cep: '',
      address: '',
      number: '',
      district: '',
      complement: '',
      state: { value: '', label: '' },
      city: ''
    },
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: handleSubmit,
    validationSchema: () => addressSchema
  });

  useEffect(() => {
    if (formik.values.cep.length === 9) {
      dispatch(getAddress.request(formik.values.cep.replace('-', '')));
    } else if (formik.values.cep.length === 0) {
      formik.setFieldValue('address', '', false);
      formik.setFieldValue('district', '', false);
      formik.setFieldValue('city', '', false);
      formik.setFieldValue('number', '', false);
      formik.setFieldValue('complement', '', false);
      formik.setFieldValue('state', { value: '', label: '' }, false);
    }
  }, [formik.values.cep]);

  useEffect(() => {
    if (status === RequestStatus.success) {
      if (!isEmpty(data)) {
        formik.setFieldValue('address', data?.logradouro, false);
        formik.setFieldValue('district', data?.bairro, false);
        formik.setFieldValue('city', data?.localidade, false);
        formik.setFieldValue(
          'state',
          { label: data?.uf, value: data?.uf },
          false
        );
      }
    }
  }, [data, status]);

  useEffect(() => {
    if (!isEmpty(userData)) {
      const { address } = userData;
      if (!isEmpty(address)) {
        formik.setFieldValue('address', address.address, false);
        formik.setFieldValue('district', address.district, false);
        formik.setFieldValue('city', address.city, false);
        formik.setFieldValue('complement', address.complement, false);
        formik.setFieldValue('number', address.number, false);
        formik.setFieldValue(
          'state',
          { label: address.state, value: address.state },
          false
        );
        formik.setFieldValue('cep', address.cep, false);
      }
    }
  }, [userData]);

  const isUpdateSuccess =
    (statusUpdateClientAddress === RequestStatus.success ||
      statusCreateClientAddress === RequestStatus.success) &&
    (!isEmpty(dataCreateClientAddress) || !isEmpty(dataUpdateClientAddress));

  const newAddress = () => {
    if (statusUpdateClientAddress === RequestStatus.success) {
      return dataUpdateClientAddress;
    }
    if (statusCreateClientAddress === RequestStatus.success) {
      return dataCreateClientAddress;
    }
    return userData?.address;
  };

  useEffect(() => {
    if (isUpdateSuccess) {
      const newAddressData = newAddress();
      if (!isEmpty(newAddressData) && !isEmpty(userData)) {
        dispatch(
          updateClientState({
            ...userData,
            address: newAddressData
          })
        );
        toast('Informações atualizadas.');
      }
    }
  }, [
    statusUpdateClientAddress,
    dataCreateClientAddress,
    dataUpdateClientAddress,
    statusCreateClientAddress
  ]);

  return (
    <S.ContentAddress>
      <S.FormAddress onSubmit={formik.handleSubmit}>
        <Input
          value={formik.values.cep}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          label="CEP"
          required
          id="cep"
          fullWidth
          name="cep"
          errorMessage={(formik.touched.cep && formik.errors.cep) || ''}
          inputMode="numeric"
          mask={{ mask: masks.cep.mask, maskPlaceholder: '' }}
          spacing="24"
        />
        <Input
          value={formik.values.address}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          label="Endereço"
          fullWidth
          required
          id="address"
          name="address"
          placeholder=""
          errorMessage={(formik.touched.address && formik.errors.address) || ''}
          spacing="24"
        />
        <Input
          value={formik.values.number}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          fullWidth
          label="Número"
          required
          id="number"
          name="number"
          placeholder=""
          errorMessage={(formik.touched.number && formik.errors.number) || ''}
          spacing="24"
        />
        <Input
          fullWidth
          value={formik.values.district}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          label="Bairro"
          required
          id="district"
          name="district"
          placeholder=""
          errorMessage={
            (formik.touched.district && formik.errors.district) || ''
          }
          spacing="24"
        />
        <Input
          fullWidth
          value={formik.values.complement}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          label="Complemento"
          id="complement"
          name="complement"
          placeholder=""
          spacing="24"
        />
        <S.ContentState>
          <Select
            options={ufs}
            value={formik.values.state}
            onChange={(option: { label: string; value: string }) => {
              formik.setFieldValue('state', option);
            }}
            onBlur={formik.handleBlur}
            fullWidth
            label="Estado"
            id="state"
            name="state"
            spacing="24"
          />
          <Input
            fullWidth
            value={formik.values.city}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            label="Cidade"
            required
            id="city"
            name="city"
            placeholder=""
            errorMessage={(formik.touched.city && formik.errors.city) || ''}
            spacing="24"
          />
        </S.ContentState>

        <Button
          fullWidth
          disabled={!(formik.isValid && formik.dirty)}
          type="submit"
        >
          Salvar
        </Button>
      </S.FormAddress>
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
    </S.ContentAddress>
  );
};

export default ProfileAddressForm;
