import { useEffect,useState } from "react";

import { ContainerPersonalData, ContentInputs, InputData, SaveButton, Title } from "./styles";

export function PersonalData() {
  const [phone, setPhone] = useState('');
  const [head, setHead] = useState('');
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (phone && head !== '') {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }, [head, phone, disabled])

  return (
    <ContainerPersonalData>
      <Title>Dados Pessoais</Title>

      <ContentInputs>
        <InputData
          type="text"
          placeholder="(00) 0 0000-0000"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <InputData
          type="text"
          style={{ marginTop: '1.4rem'}}
          placeholder="Head de inovação"
          value={head}
          onChange={(e) => setHead(e.target.value)}
        />
      </ContentInputs>

      <SaveButton disabled={disabled}>Salvar</SaveButton>
    </ContainerPersonalData>
  );
}