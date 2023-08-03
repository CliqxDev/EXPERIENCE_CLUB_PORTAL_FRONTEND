/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";

import { ContentAddress, ContentState, FormAddress, InputAddress, SaveButton, SelectState } from "./styles";

export function AddressForm() {
  const [cep, setCep] = useState('');
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');
  const [district, setDistrict] = useState('');
  const [complement, setComplement] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  return (
    <ContentAddress>
      <FormAddress>
        {/* CEP */}
        <InputAddress
          type="text"
          placeholder="CEP"
          style={{ marginTop: '3.5rem' }}
          onChange={(e) => setCep(e.target.value)}
        />
        {/* ENDEREÇO */}
        <InputAddress
          type="text"
          placeholder="Endereço"
          onChange={(e) => setAddress(e.target.value)}
        />

        {/* NÚMERO */}
        <InputAddress
          type="text"
          placeholder="Número"
          onChange={(e) => setNumber(e.target.value)}
        />

        {/* BAIRRO */}
        <InputAddress
          type="text"
          placeholder="Bairro"
          onChange={(e) => setDistrict(e.target.value)}
        />

        {/* COMPLEMENTO */}
        <InputAddress
          type="text"
          placeholder="Complemento"
          onChange={(e) => setComplement(e.target.value)}
        />

        <ContentState>
          {/* ESTADO */}
          <SelectState
            placeholder="Estado"
            onChange={(e) => setState(e.target.value)}
          >
            <option>SP</option>
            <option>RJ</option>
          </SelectState>

          {/* CIDADE */}
          <InputAddress
            type="text"
            placeholder="Cidade"
            style={{ width: '70%' }}
            onChange={(e) => setCity(e.target.value)}
          />
        </ContentState>

        <SaveButton>Salvar</SaveButton>
      </FormAddress>
    </ContentAddress>
  );
}