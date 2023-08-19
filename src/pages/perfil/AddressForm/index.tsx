/* eslint-disable @typescript-eslint/no-floating-promises */
import { useFormik } from 'formik';
import { useEffect } from 'react';
import { isEmpty } from 'lodash';
import toast from 'react-hot-toast';
import { addressSchema } from 'utils/schemas/addressSchema';
import { useAppDispatch } from 'hook/store';

import Button from 'components/Button';
import Input from 'components/Input';

import { masks } from 'utils';
import {
  useAddress,
  useCreateClientAddress,
  useUpdateClientAddress
} from 'hook/selectors/addressHooks';
import { RequestStatus } from 'models/iRequest';
import Select from 'components/Select';
import { ufs } from 'utils/uf';

import Toaster from 'components/Toaster';
import { useClientInfo } from 'hook/selectors/authHooks';
import {
  clearCreateClientAddress,
  clearUpdateClientAddress,
  createClientAddress,
  getAddressByCep,
  updateClientAddress
} from 'flux/modules/address/actions';
import { updateClientState } from 'flux/modules/auth/actions';
import { Address } from 'flux/modules/address/types';
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
      dispatch(getAddressByCep.request(formik.values.cep.replace('-', '')));
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
        dispatch(clearCreateClientAddress());
        dispatch(clearUpdateClientAddress());
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
      <Toaster variant="success" />
    </S.ContentAddress>
  );
};

export default ProfileAddressForm;
