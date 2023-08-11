/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useFormik } from "formik";
import { addressSchema } from "utils/schemas/addressSchema";

import Input from "components/Input";

import { ContentAddress, ContentState, FormAddress, InputAddress, SaveButton, SelectState } from "./styles";

export function AddressForm() {

  const handleSubmit = () => {
    console.log('asd')
  }

  const formik = useFormik({
    initialValues: {
      cep: '',
      address: '',
      number: '',
      district: '',
      complement: '',
      state: '',
      city: '',
    },
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: handleSubmit,
    validationSchema: () => addressSchema
  });

  return (
    <ContentAddress>
      <FormAddress>
        {/* CEP */}
        <Input
          value={formik.values.cep}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          label="CEP"
          required
          mask='cep'
          id="cep"
          name="cep"
          placeholder=""
          style={{ width: '95%' }}
          errorMessage={(formik.touched.cep && formik.errors.cep) || ''}
          spacing="24"
        />
        {/* ENDEREÇO */}
        <Input
          value={formik.values.address}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          label="Endereço"
          required
          id="address"
          name="address"
          placeholder=""
          style={{ width: '95%' }}
          errorMessage={(formik.touched.address && formik.errors.address) || ''}
          spacing="24"
        />

        {/* NÚMERO */}
        <Input
          value={formik.values.number}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          label="Número"
          required
          id="number"
          name="number"
          placeholder=""
          style={{ width: '95%' }}
          errorMessage={(formik.touched.number && formik.errors.number) || ''}
          spacing="24"
        />

        {/* BAIRRO */}
        <Input
          value={formik.values.district}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          label="Bairro"
          required
          id="district"
          name="district"
          placeholder=""
          style={{ width: '95%' }}
          errorMessage={(formik.touched.district && formik.errors.district) || ''}
          spacing="24"
        />

        {/* COMPLEMENTO */}
        <Input
          value={formik.values.complement}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          label="Complemento"
          id="complement"
          name="complement"
          placeholder=""
          style={{ width: '95%' }}
          spacing="24"
        />

        <ContentState>
          {/* ESTADO */}
          <SelectState
            placeholder="Estado"
          >
            <option>SP</option>
            <option>RJ</option>
          </SelectState>

          {/* CIDADE */}
          <Input
            value={formik.values.city}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            label="Cidade"
            required
            id="city"
            name="city"
            placeholder=""
            style={{ width: '70%' }}
            errorMessage={(formik.touched.city && formik.errors.city) || ''}
            spacing="24"
          />
        </ContentState>

        <SaveButton>Salvar</SaveButton>
      </FormAddress>
    </ContentAddress>
  );
}