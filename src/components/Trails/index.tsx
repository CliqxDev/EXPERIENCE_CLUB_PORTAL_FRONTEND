import { useEffect, useState } from 'react'

import CardTrails from 'components/CardTrails';
import Title from 'components/Title';

import * as S from './styles';

const Trails = () => {
  const [optionLabel, setOptionLabel] = useState('');

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOptionLabel(event.target.value);
  };

  useEffect(() => {
    setOptionLabel('MERCADO')
  }, [])

  const topRadiosList = [
    {
      id: 'button-radio1',
      value: 'MERCADO',
      selected: optionLabel === 'MERCADO',
      action: handleOptionChange,
      label: 'Mercado'
    },
    {
      id: 'button-radio2',
      value: 'GESTAO',
      selected: optionLabel === 'GESTAO',
      action: handleOptionChange,
      label: 'Gestão'
    },
    {
      id: 'button-radio3',
      value: 'TECNOLOGIA',
      selected: optionLabel === 'TECNOLOGIA',
      action: handleOptionChange,
      label: 'Tecnologia'
    },
  ]

  const bottomRadiosList = [
    {
      id: 'button-radio4',
      value: 'ESG',
      selected: optionLabel === 'ESG',
      action: handleOptionChange,
      label: 'ESG'
    },
    {
      id: 'button-radio5',
      value: 'STARTUP',
      selected: optionLabel === 'STARTUP',
      action: handleOptionChange,
      label: 'Startup'
    },
    {
      id: 'button-radio6',
      value: 'FUTURO',
      selected: optionLabel === 'FUTURO',
      action: handleOptionChange,
      label: 'Futuro'
    },
  ]

  return (
    <S.Wrapper labelSelected={optionLabel}>
      <Title variant='black50'>Trilhas</Title>

      <S.ContentRadio>
        {topRadiosList.map((topRadio) => (
          <>
            <input
              name="button-radio"
              id={topRadio.id}
              type="radio"
              value={topRadio.value}
              checked={topRadio.selected}
              onChange={topRadio.action}
            />
            <S.RadioLabel sizes={topRadio.value} colors={topRadio.value} labelSelected={optionLabel} htmlFor={topRadio.id}>
              {topRadio.label}
            </S.RadioLabel>
          </>
        ))}
      </S.ContentRadio>

      <S.ContentRadio>
        {bottomRadiosList.map((bottomRadio) => (
          <>
            <input
              name="button-radio"
              id={bottomRadio.id}
              type="radio"
              value={bottomRadio.value}
              checked={bottomRadio.selected}
              onChange={bottomRadio.action}
            />
            <S.RadioLabel sizes={bottomRadio.value} colors={bottomRadio.value} labelSelected={optionLabel} htmlFor={bottomRadio.id}>
              {bottomRadio.label}
            </S.RadioLabel>
          </>
        ))}
      </S.ContentRadio>
      <CardTrails />
    </S.Wrapper>
  )
};


export default Trails;